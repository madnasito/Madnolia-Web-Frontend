import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { SeoService } from './core/services/seo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturesModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'madnolia-web-frontend';
  seoService: SeoService = inject(SeoService);
  translateService: TranslateService = inject(TranslateService);

  constructor(){
    
    this.seoService.init();
    this.translateService.langs = ['en', 'es'];
    if (this.translateService.getBrowserLang() == 'es') this.translateService.setDefaultLang('es');
  }

  ngOnInit(): void {
  }
}
