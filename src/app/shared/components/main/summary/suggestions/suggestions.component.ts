import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {

  @Input() data: string[] = ['eddylujan', 'jordan', 'paola', 'tessycastillo', 'chocolate'];

  @Output() usernameEvent = new EventEmitter();

  gotoProfile( username:string ) {
      this.usernameEvent.emit( username );
  }

}
