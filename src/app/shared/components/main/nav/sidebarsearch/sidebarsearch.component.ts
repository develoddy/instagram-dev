import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebarsearch',
  templateUrl: './sidebarsearch.component.html',
  styleUrls: ['./sidebarsearch.component.css']
})
export class SidebarsearchComponent implements OnInit {
 
  @Output() usernameEvent = new EventEmitter();
  public isChangedBlock: number;
  @Input() data: string[] = ['eddy', 'jordan', 'paola', 'tessy', 'chocolate', 'jean', 'marlene', 'maria', 'josue', 'nicole', 'chingo', 'joaquin', 'adriano'];

  ngOnInit() { 
      this.isChangedBlock = -1;
  }

  public gotoProfile( username:string ) {
      this.usernameEvent.emit(username);
  }
}
