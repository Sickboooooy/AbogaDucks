# AbogaDuck - Test Vocacional Jurídico

## Descripción
AbogaDuck es una plataforma de evaluación vocacional jurídica diseñada para estudiantes de Derecho en México. La aplicación utiliza un algoritmo de compatibilidad para determinar qué áreas del derecho son más adecuadas según las aptitudes, valores y preferencias del usuario.

---

## Características principales

### Test Vocacional Jurídico
- 50 preguntas organizadas en 3 secciones (Situacionales, Aptitudes, Valores)
- Evaluación de 10 dimensiones clave para profesionales del derecho
- Algoritmo de compatibilidad con 12 perfiles jurídicos diferentes
- Visualización de resultados mediante gráficos de radar
- Recomendaciones personalizadas según perfil

### Generador de AbogaDucks
- Generación de imágenes personalizadas de patos abogados con DALL-E 3
- 12 especialidades jurídicas diferentes con prompts específicos
- Sistema de límites de uso (3 generaciones diarias para usuarios no premium)
- Gestión de suscripciones premium para uso ilimitado
- Biblioteca personal de generaciones previas

---

## Tecnologías

| Área | Tecnología |
|------|------------|
| **Frontend** | React 18, TypeScript, TailwindCSS, Shadcn/UI |
| **Visualización** | Chart.js, HTML Canvas |
| **Backend** | Express, Node.js, OpenAI API v4.93.0 |
| **Almacenamiento** | PostgreSQL (opcional), almacenamiento en memoria |
| **Optimización** | Lazy-loading, memoización, Suspense, caché de generación |

---

## Instalación y uso

### Requisitos
- Node.js 18+
- API Key de OpenAI para generación de imágenes

### Configuración
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno en `.env`:
   ```
   OPENAI_API_KEY=tu_clave_api
   DATABASE_URL=url_base_datos (opcional)
   ```
4. Iniciar el servidor: `npm run dev`

---

## Estructura del proyecto

```
AbogaDucks/
├── client/src/       # Código fuente del frontend
├── server/           # API y lógica de backend
├── shared/           # Esquemas y tipos compartidos
├── public/           # Archivos estáticos y recursos
└── docs/             # Documentación del proyecto
```

---

## Perfiles Jurídicos (12 especialidades)

1. **Derecho Penal** - Defensa y fiscalía en casos criminales
2. **Derecho Civil** - Contratos, familia, sucesiones
3. **Derecho Constitucional** - Derechos fundamentales, amparos
4. **Derecho Laboral** - Relaciones obrero-patronales
5. **Derecho Mercantil** - Sociedades, comercio, propiedad industrial
6. **Derecho Fiscal** - Impuestos, obligaciones tributarias
7. **Derecho Administrativo** - Relación Estado-particulares
8. **Derecho Internacional** - Tratados, comercio exterior
9. **Derecho Ambiental** - Protección ecológica, sustentabilidad
10. **Derecho Digital** - Privacidad, ciberseguridad, tecnología
11. **Derecho Notarial** - Fe pública, actos jurídicos
12. **Derecho Agrario** - Propiedad rural, ejidos

---

## Dimensiones de Evaluación (10 dimensiones)

1. Análisis lógico-jurídico
2. Comunicación oral
3. Redacción y argumentación escrita
4. Negociación y mediación
5. Investigación documental
6. Ética profesional
7. Tolerancia al estrés
8. Trabajo en equipo
9. Liderazgo
10. Empatía y sensibilidad social

---

## App Store Info

- **Nombre:** Test Vocacional AbogaDuck (25/60 caracteres)
- **Descripción:** Descubre cuáles de las 12 especialidades del Derecho en México se alinean mejor con tus aptitudes, valores y preferencias profesionales.

---

## Desarrollado por
**Itosturre LegalTech & ProfesorDuck** - 2025
