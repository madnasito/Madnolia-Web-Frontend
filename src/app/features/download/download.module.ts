import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class DownloadModule { }
