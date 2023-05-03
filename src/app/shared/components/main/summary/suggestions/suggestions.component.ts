import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {

  @Input() data: string[] = ['eddylujan', 'jordan', 'paola', 'tessycastillo', 'chocolate'];

}
