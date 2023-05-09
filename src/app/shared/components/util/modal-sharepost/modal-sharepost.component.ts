import { Component, Input, OnInit } from '@angular/core';
import { FiltroService } from '@data/services/api/filtro.service';

export interface User {
  id: number;
  username: string;
  checked: boolean
}

@Component({
  selector: 'app-modal-sharepost',
  templateUrl: './modal-sharepost.component.html',
  styleUrls: ['./modal-sharepost.component.css']
})

export class ModalSharepostComponent implements OnInit {

  public isCheck: boolean;
  public isChangedBlock: number;
  public isCheckInputMessage: boolean;
  public obj_usersSelected: User[] = [];
  @Input() data = [
    { profileUrl:"https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", username: "rebeca2372", fullname: "Rebeca Marroquín", checked: false, id: 0 },
    { profileUrl:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80", username: "lujandev", fullname: "Eddy Lujan", checked: false, id: 1 },
    { profileUrl:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", username: "paola", fullname: "Paola Lujan", checked: false, id: 2 },
    { profileUrl:"https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", username: "tessy", fullname: "Tessy Lujan", checked: false, id: 3 },
    { profileUrl:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80", username: "jordan", fullname: "Jordan Lujan", checked: false, id: 4 },
    { profileUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", username: "teresa", fullname: "Teresa Lujan", checked: false, id: 5 },
  ];

  constructor( public filter: FiltroService) {
      this.isCheckInputMessage = false;
      this.isCheck = true;
  }

  ngOnInit() { 
      this.isChangedBlock = -1;
  }

  selectUser(index:number ) {
      this.data.map( item => { 
          if ( item.id == index ) { 
              item.checked = !item.checked;
              item.checked ? this.pushUsername( item.username, item.id, item.checked ) : this.popUsername( item.id, 'selected' );
          } 
      });
      this.showInputMessage();
  }

  pushUsername(username: string, id: number, checked: boolean) {
      this.obj_usersSelected.push({ id: id, username: username, checked: checked });
  }

  popUsername( id: number, option: string ) {
      const filtrados = this.obj_usersSelected.filter(item => item.id !== id);
      this.obj_usersSelected = [...filtrados];
      if ( option == 'close' ) {
          this.data.map( item => { 
              if ( item.id == id ) { 
                  item.checked = !item.checked;
              } 
          });
      }
      this.showInputMessage();
  }

  showInputMessage() {
      this.data.filter( ( item ) => item.checked == true ).length == 0 ? this.isCheckInputMessage = false : this.isCheckInputMessage = true;
  }
}