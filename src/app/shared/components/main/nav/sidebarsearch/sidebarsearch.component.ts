import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-sidebarsearch',
  templateUrl: './sidebarsearch.component.html',
  styleUrls: ['./sidebarsearch.component.css']
})
export class SidebarsearchComponent implements OnInit {
 

  public isChangedBlock: number;
  @Input() data: string[] = ['eddy', 'jordan', 'paola', 'tessy', 'chocolate', 'jean', 'marlene', 'maria', 'josue', 'nicole', 'chingo', 'joaquin', 'adriano'];
  @Output() usernameEvent = new EventEmitter();

  constructor( private router: Router, private filter: FiltroService ){}

  ngOnInit() { 
      this.isChangedBlock = -1;
  }

  public gotoProfile( username:string ) {
      this.usernameEvent.emit(username);
  }
}
