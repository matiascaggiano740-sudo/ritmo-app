# Arquitectura y decisiones

- Monorepo pnpm: web, futura API, futura app móvil y librería compartida.
- Fase 0: React 18, TypeScript estricto y Vite; CSS propio con tokens, responsive y temas.
- Fase 1: Fastify como servicio separado para Data API, caché y rate limiting. GitHub Pages solo aloja archivos estáticos y no protege secretos ni ejecuta el servidor.
- Reproducción futura: exclusivamente YouTube IFrame Player API visible, sin extracción de streams ni eliminación de anuncios.
- OAuth en fase 4: scopes mínimos bajo revisión previa del usuario; secretos y tokens únicamente del lado servidor. No prometer que la sesión OAuth inicie sesión dentro del iframe.
- Calidad: depende de la interfaz y capacidades vigentes del reproductor de YouTube; no prometer métodos no documentados.
- PWA y móvil nativo: previstas para fases posteriores, no incluidas ahora.
