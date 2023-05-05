import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-linkprofile',
  templateUrl: './linkprofile.component.html',
  styleUrls: ['./linkprofile.component.css']
})
export class LinkprofileComponent {

    @Output() usernameEvent = new EventEmitter();

    gotoProfile( username:string ) {
        this.usernameEvent.emit( username );
    }
}
