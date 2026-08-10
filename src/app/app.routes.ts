import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { DownloadComponent } from "./pages/download/download.component";
import { PlatformGameComponent } from "./pages/platforms/platform-game/platform-game.component";
import { PlatformsComponent } from "./pages/platforms/platforms.component";
import { PlatformComponent } from "./pages/platforms/platform/platform.component";
import { MatchPageComponent } from "./pages/match/match-page/match-page.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { ChildSafetyComponent } from "./pages/child-safety/child-safety.component";
import { authRoutes } from "./pages/auth/auth.routes";
import { matchResolver } from "./pages/match/match-page/match.resolver";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

import { MatchesInfoComponent } from "./pages/matches-info/matches-info.component";
import { LanPartyComponent } from "./pages/lan-party/lan-party.component";

export const routes: Routes = [
    { 
      path: '', 
      component: LandingComponent,
      data: {
        title: 'HOME.TITLE',
        metaTags: [
          { name: 'description', content: 'HOME.TAG_DESCRIPTION' },
          { name: 'keywords', content: 'HOME.TAG_KEYWORDS' },
        ],
        social: {
          title: 'HOME.TITLE',
          description: 'HOME.DESCRIPTION',
          image: ''
        },
        canonicalUrl: 'https://madnolia.app'
      }
    },
    {
      path: 'match',
      children: [
        { path: '', redirectTo: '/', pathMatch: 'full' },
        { 
          path: ':id', 
          component: MatchPageComponent,
          resolve: {
            match: matchResolver
          },
          data: {
            canonicalUrl: (route: ActivatedRouteSnapshot) => {
              const id = route.paramMap.get('id');
              return `https://madnolia.app/match/${id}`;
            }
          }
        }
      ]
    },
    {
      path: 'matches',
      component: MatchesInfoComponent,
      data: {
        title: 'MATCHES.TITLE',
        metaTags: [
          { name: 'description', content: 'Encuentra comunidades y partidas activas de tus juegos favoritos. Olvídate de buscar en foros o Discord.' },
          { name: 'keywords', content: 'matchmaking, comunidades, juegos, buscar partidas, multijugador' },
        ],
        canonicalUrl: 'https://madnolia.app/matches'
      }
    },
    {
      path: 'lan-party',
      component: LanPartyComponent,
      data: {
        title: 'LAN_PARTY.TITLE',
        metaTags: [
          { name: 'description', content: 'Juega en LAN virtual (VLAN) sin configuraciones complejas ni programas como Hamachi o ZeroTier.' },
        ],
        canonicalUrl: 'https://madnolia.app/lan-party'
      }
    },
    {
      path: 'platforms',
      component: PlatformsComponent,
      data: {
        title: 'PLATFORMS.TITLE',
        metaTags: [
          { name: 'description', content: 'Browse all supported gaming platforms' },
        ],
        canonicalUrl: 'https://madnolia.app/platforms'
      },
      children: [
        {
          path: ':platform-name', 
          component: PlatformComponent,
          data: {
            canonicalUrl: (route: ActivatedRouteSnapshot) => {
              const platform = route.paramMap.get('platform-name');
              return `https://madnolia.app/platforms/${platform}`;
            }
          }
        }
      ]
    },
    {
      path: 'platform/:platform-slug/:game-slug',
      component: PlatformGameComponent,
      data: {
        seo: {
          title: (route: ActivatedRouteSnapshot) => {
            const game = route.paramMap.get('game-slug');
            return `${formatGameName(game)} Matches | Madnolia`;
          },
          description: (route: ActivatedRouteSnapshot) => {
            const game = route.paramMap.get('game-slug');
            return `Schedule matches and find players for ${formatGameName(game)}`;
          }
        },
        canonicalUrl: (route: ActivatedRouteSnapshot) => {
          const platform = route.paramMap.get('platform-slug');
          const game = route.paramMap.get('game-slug');
          return `https://madnolia.app/platform/${platform}/${game}`;
        }
      }
    },
    {
      path: 'download',
      component: DownloadComponent,
      data: {
        title: 'DOWNLOAD.TITLE',
        metaTags: [
          { name: 'description', content: 'Download GameMatch app to organize multiplayer matches, connect with players across platforms, and never game alone again. Available on Google Play.' },
          { property: 'og:title', content: 'Download GameMatch - The Ultimate Gaming Companion' },
          { property: 'og:description', content: 'Organize matches, connect with players, and never game alone again. Download now on Google Play.' },
          // { property: 'og:image', content: 'https://madnolia.app/assets/social-preview.jpg' },
          { property: 'og:url', content: 'https://madnolia.app/download' },
          { name: 'twitter:card', content: 'summary_large_image' }
        ],
        canonicalUrl: 'https://madnolia.app/download'
      }
    },
    {
      path: 'about',
      component: AboutComponent,
      data: {
        title: 'ABOUT.TITLE',
        metaTags: [
          { name: 'description', content: 'Learn about our game matchmaking platform that connects players across all devices. Organize multiplayer matches with ease and never play alone again.' },
          { property: 'og:title', content: 'About Our Game Matchmaking Platform' },
          { property: 'og:description', content: 'Connect with gamers worldwide and organize multiplayer matches seamlessly across all platforms.' },
          // { property: 'og:image', content: 'https://yourdomain.com/assets/social-preview.jpg' },
          { property: 'og:url', content: 'https://madnolia.app/about' },
          { name: 'twitter:card', content: 'summary_large_image' }
        ],
        canonicalUrl: 'https://madnolia.app/about'
      }
    },
    {
      path: 'child-safety',
      component: ChildSafetyComponent,
      data: {
        title: 'CHILD_SAFETY.TITLE',
      }
    },
    {
        path: '.well-known/assetlinks.json',
        redirectTo: '/public/.well-known/assetlinks.json',
        pathMatch: 'full'
    },
    ...authRoutes,
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

// Helper function to format platform names
function formatPlatformName(slug: string | null): string {
  if (!slug) return 'Platform';
  return slug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to format game names
function formatGameName(slug: string | null): string {
  if (!slug) return 'Game';
  return slug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}