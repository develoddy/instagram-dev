import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@data/models/User';

@Component({
  selector: 'app-linkprofile',
  templateUrl: './linkprofile.component.html',
  styleUrls: ['./linkprofile.component.css']
})
export class LinkprofileComponent {
    @Input() user: User;
    @Output() usernameEvent = new EventEmitter();

    gotoProfile( username:string ) {
        this.usernameEvent.emit( username );
    }
}
