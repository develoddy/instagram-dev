import { Component, Input, OnInit } from '@angular/core';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-modal-sharepost',
  templateUrl: './modal-sharepost.component.html',
  styleUrls: ['./modal-sharepost.component.css']
})
export class ModalSharepostComponent implements OnInit {
  
  public isCheck: boolean;
  public isChangedBlock: number;
  public boxMessage: boolean;
  @Input() data = [ "1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1" ];

  activeIndex: number;
  
  constructor( public filter: FiltroService) {
    this.boxMessage = false;
    this.isCheck = false;
  }

  ngOnInit() { 
      this.isChangedBlock = -1;
  }

  selectUser(index:number ) {
      this.activeIndex = index;
  }
}
