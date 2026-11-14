# Ritmo

Base de una app web y móvil para música y videos mediante APIs oficiales de YouTube. Proyecto independiente, no afiliado a Google ni YouTube.

## Estado: Fase 0

Incluye monorepo, layout web responsive, temas y tests básicos. **Todavía no hay búsqueda, reproducción, login, API, PWA ni app móvil.** Los controles de estas funciones están deshabilitados.

## Probar localmente

Requisitos: Node.js 22 y pnpm 9.15.9.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Abrí la URL que indique Vite. Verificaciones:

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Estructura

- `apps/web`: React + TypeScript + Vite.
- `apps/api`: reservado para Fastify, desde Fase 1.
- `apps/mobile`: reservado para Expo, desde Fase 5.
- `packages/shared`: tipos y futuras utilidades compartidas.
- `docs/architecture.md`: decisiones y restricciones.

## Credenciales y privacidad

No se requieren en Fase 0. En fases futuras la clave de YouTube y el secreto OAuth quedarán solo en el servidor, no en el repositorio ni el cliente. No se deben poner valores reales en `.env.example`.

La app usará el reproductor oficial, que puede mostrar anuncios y no garantiza reproducción solo audio. Premium no garantiza ausencia de anuncios en todos los reproductores embebidos. La disponibilidad de una preferencia de calidad depende del reproductor oficial.

[Términos de YouTube](https://www.youtube.com/t/terms) · [Privacidad de Google](https://policies.google.com/privacy)

## Hoja de ruta

1. Búsqueda y reproducción oficial; parser de enlaces.
2. Miniplayer y cola, sujeto a políticas del reproductor.
3. Ajustes de calidad disponibles y preferencias.
4. Inicio de sesión y biblioteca, con permisos revisados.
5. Expo y builds móviles; PWA.
6. Accesibilidad, E2E, rendimiento y release.
