import { Component, inject, Input } from '@angular/core';
import { MatchService } from '../../../core/services/match.service';
import { MatchInfo } from '../../../core/interfaces/match/match-info.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-page',
  // standalone: false,
  imports: [CommonModule],
  templateUrl: './match-page.component.html',
  styleUrl: './match-page.component.scss'
})
export class MatchPageComponent {

  matchInfo$!: Observable<MatchInfo>;

  private matchService = inject(MatchService);

  constructor() {
    this.matchInfo$ = this.matchService.getMatchById('681424c263b5f8403bc06065');
  }
  
}
