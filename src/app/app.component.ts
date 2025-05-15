import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturesModule, SharedModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'madnolia-web-frontend';
  seoService: SeoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.init();
  }
}
