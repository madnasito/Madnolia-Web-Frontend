import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { AboutComponent } from "./features/about/about.component";
import { DownloadComponent } from "./features/download/download.component";
import { PlatformGameComponent } from "./features/platforms/platform-game/platform-game.component";
import { PlatformsComponent } from "./features/platforms/platforms.component";
import { PlatformComponent } from "./features/platforms/platform/platform.component";
import { MatchPageComponent } from "./features/match/match-page/match-page.component";
import { LandingComponent } from "./features/landing/landing.component";
import { ChildSafetyComponent } from "./features/child-safety/child-safety.component";
import { authRoutes } from "./features/auth/auth.routes";

export const routes: Routes = [
    { 
      path: '', 
      component: LandingComponent,
      data: {
        title: 'Madnolia - Connect with Gamers Worldwide',
        metaTags: [
          { name: 'description', content: 'Platform to schedule matches for any retro or modern console. Connect with the global gaming community.' },
          { name: 'keywords', content: 'gaming, scheduled matches, gamers, retro consoles, gaming community' },
          { property: 'og:title', content: 'Madnolia - Connect with Players' },
          { property: 'og:description', content: 'Platform to schedule matches for any console' },
          { property: 'og:url', content: 'https://madnolia.app' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' }
        ],
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
          data: {
            seo: {
              title: 'Match Details | Madnolia',
              description: 'Join this scheduled gaming match'
            }
          }
        }
      ]
    },
    {
      path: 'platforms',
      component: PlatformsComponent,
      data: {
        seo: {
          title: 'Gaming Platforms | Madnolia',
          description: 'Browse all supported gaming platforms'
        }
      },
      children: [
        { 
          path: ':platform-name', 
          component: PlatformComponent,
          data: {
            seo: {
              title: (route: ActivatedRouteSnapshot) => {
                const platform = route.paramMap.get('platform-name');
                return `${formatPlatformName(platform)} Games | Madnolia`;
              },
              description: (route: ActivatedRouteSnapshot) => {
                const platform = route.paramMap.get('platform-name');
                return `Find players and schedule matches for ${formatPlatformName(platform)} games`;
              }
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
        }
      }
    },
    {
      path: 'download',
      component: DownloadComponent,
      data: {
        seo: {
          title: 'Download Madnolia App',
          description: 'Get the Madnolia app to schedule matches on the go'
        }
      }
    },
    {
      path: 'about',
      component: AboutComponent,
      data: {
        seo: {
          title: 'About Madnolia',
          description: 'Learn about our gaming matchmaking platform'
        }
      }
    },
    {
      path: 'child-safety',
      component: ChildSafetyComponent,
      data: {
        seo: {
          title: 'Child Safety',
          description: ''
        }
      }
    },
    {
        path: '.well-known/assetlinks.json',
        redirectTo: '/public/.well-known/assetlinks.json',
        pathMatch: 'full'
    },
    ...authRoutes,
    { path: '**', redirectTo: '' }
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