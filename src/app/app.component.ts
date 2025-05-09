import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturesModule, SharedModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'madnolia-web-frontend';
}
