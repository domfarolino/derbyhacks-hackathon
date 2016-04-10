import { Component, Input } from 'angular2/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'quick-card',
  templateUrl: 'static/src/shared/components/quick-card/quick-card.component.html',
  styleUrls: ['static/src/shared/components/quick-card/quick-card.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})

export class QuickCardComponent {
    @Input() title: string;
    constructor() {
        
    }
}