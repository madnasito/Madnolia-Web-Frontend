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
import { matchResolver } from "./features/match/match-page/match.resolver";
import { NotFoundComponent } from "./features/not-found/not-found.component";

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
          }
        }
      ]
    },
    {
      path: 'platforms',
      component: PlatformsComponent,
      data: {
        title: 'Gaming Platforms | Madnolia',
        metaTags: [
          { name: 'description', content: 'Browse all supported gaming platforms' },
        ]
      },
      children: [
        { 
          path: ':platform-name', 
          component: PlatformComponent,
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
        title: 'DOWNLOAD.TITLE',
        metaTags: [
          { name: 'description', content: 'Download GameMatch app to organize multiplayer matches, connect with players across platforms, and never game alone again. Available on Google Play.' },
          { property: 'og:title', content: 'Download GameMatch - The Ultimate Gaming Companion' },
          { property: 'og:description', content: 'Organize matches, connect with players, and never game alone again. Download now on Google Play.' },
          // { property: 'og:image', content: 'https://madnolia.app/assets/social-preview.jpg' },
          { property: 'og:url', content: 'https://madnolia.app/download' },
          { name: 'twitter:card', content: 'summary_large_image' }
        ]
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
        ]
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