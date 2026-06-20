import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

(async () => {
  const server = registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Serve static files in production or development (if handled by vite proxy)
  // For development, we rely on Vite. For a simple setup, we might need a workaround if not running vite separately.
  // Assuming 'npm run dev' runs 'tsx server/index.ts' which might not serve the frontend without vite middleware.
  // However, the README says 'npm run dev' runs 'tsx server/index.ts'. 
  // Typically in Replit/Vite setups, we use 'vite' for dev or express serving 'dist' for prod.
  // I will assume for now we are building basic API support.
  
  // Serve static files in production or development (if handled by vite proxy)
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // Production: serve built files
    // app.use(express.static("dist/public"));
    // app.get("*", ...);
    // For now, we focus on Dev.
    console.log("Production serving not yet implemented in this scaffold");
  }

  const PORT = Number(process.env.PORT) || 5000;
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`serving on port ${PORT}`);
  });
})();

async function setupVite(app: Express, server: Server) {
  const vite = await import("vite");
  const viteServer = await vite.createServer({
    server: { middlewareMode: true, hmr: { server } },
    appType: "custom", 
  });

  app.use(viteServer.middlewares);
  
  // Serve index.html for SPA
  app.use("*", async (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    
    try {
      const fs = await import("fs");
      const path = await import("path");
      
      let template = fs.readFileSync(path.resolve("client/index.html"), "utf-8");
      template = await viteServer.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      viteServer.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
