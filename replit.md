# AbogaDuck - Test Vocacional Jurídico

## Overview

AbogaDuck is a comprehensive legal vocational assessment platform designed for law students in Mexico. The application features a 50-question vocational test that evaluates users across 10 key professional dimensions to recommend the most compatible legal specializations from 12 different profiles. Additionally, it includes an AbogaDuck generator that creates personalized lawyer duck images using DALL-E 3 AI.

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: TailwindCSS with custom color scheme (dark blue theme with yellow accents)
- **UI Components**: Shadcn/UI component library for consistent design
- **State Management**: React hooks and context for local state
- **Data Fetching**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Charts**: Chart.js for radar chart visualizations
- **Animations**: Framer Motion for smooth transitions
- **Performance**: Lazy loading, memoization, and Suspense for optimization

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints with proper error handling
- **Middleware**: Compression, rate limiting, helmet for security
- **External APIs**: OpenAI API v4.93.0 for DALL-E 3 image generation

## Key Components

### Test System
- **Question Engine**: 50 questions across 3 sections (Situational, Aptitudes, Values)
- **Scoring Algorithm**: Evaluates 10 dimensions using weighted responses
- **Profile Matching**: Uses compatibility scoring to recommend top 3 legal specializations
- **Results Visualization**: Interactive radar charts and profile cards

### AbogaDuck Generator
- **AI Integration**: DALL-E 3 for generating personalized lawyer duck images
- **Usage Limits**: 3 generations per day for free users
- **Premium System**: 15-day free trial with unlimited generations
- **Caching**: 5-minute TTL cache for generated images

### User Interface
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Progressive Loading**: Lazy-loaded components with loading fallbacks
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Theme**: Professional dark theme with high contrast ratios

## Data Flow

### Test Flow
1. User starts test on intro screen
2. Progressive question answering with real-time validation
3. Local storage backup for resume capability
4. Algorithm calculates dimension scores and profile matches
5. Results displayed with visualization and recommendations
6. Optional email capture for results delivery

### Generation Flow
1. User selects duck type and provides optional customization
2. System checks daily usage limits and premium status
3. AI prompt construction based on legal specialization
4. DALL-E 3 API call with error handling and retry logic
5. Image generation and storage with cache management
6. Results delivery to user interface

## External Dependencies

### Required Services
- **OpenAI API**: DALL-E 3 for image generation (requires API key)
- **Database**: PostgreSQL support via Drizzle ORM (optional, falls back to memory storage)

### Development Dependencies
- **Build Tools**: Vite for fast development and optimized builds
- **Code Quality**: TypeScript compiler with strict mode
- **Package Management**: npm with lockfile for reproducible builds

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Environment Variables**: `.env` file for API keys and configuration
- **Database**: Optional PostgreSQL connection or in-memory fallback

### Production Deployment
- **Build Process**: Static assets compilation with Vite
- **Server Bundle**: ESBuild for optimized Node.js bundle
- **Performance**: Compression, caching, and rate limiting enabled
- **Scaling**: Configured for 4vCPU/8GiB RAM environments

### Environment Configuration
```
OPENAI_API_KEY=required_for_duck_generation
DATABASE_URL=optional_for_persistence
```

### Key Features for Deployment
- Graceful fallbacks when external services are unavailable
- Memory-based storage as backup when database is not configured
- Comprehensive error handling and logging
- Rate limiting to prevent API abuse
- Static asset caching for improved performance