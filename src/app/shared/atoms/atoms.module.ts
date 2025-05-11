import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomPlatformComponent } from './atom-platform/atom-platform.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AtomPlatformComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AtomPlatformComponent]
})
export class AtomsModule { }
