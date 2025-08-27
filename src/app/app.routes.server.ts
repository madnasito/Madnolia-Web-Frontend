// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
        path: 'match',
        renderMode: RenderMode.Server,

    },
    {
    path: 'platforms',
    renderMode: RenderMode.Server,
    },
    {
    path: 'platform/:platform-slug/:game-slug',
    renderMode: RenderMode.Server,
    }
];