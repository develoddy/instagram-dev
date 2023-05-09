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
    { profileUrl:"https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", username: "lujandev", fullname: "Eddy Lujan", checked: false, id: 1 },
    { profileUrl:"https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", username: "paola", fullname: "Paola Lujan", checked: false, id: 2 },
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
            console.log("item.checked: " +  item.checked + "id: " + item.id + " username: " + item.username);
            item.checked ? this.pushUsername(item.username, item.id, item.checked) : this.popUsername(item.id);
          } 
      });

      this.data.filter((item) => item.checked == true ).length == 0 ? this.isCheckInputMessage =  false : this.isCheckInputMessage = true;
  }

  pushUsername(username: string, id: number, checked: boolean) {
      this.obj_usersSelected.push({ id: id, username: username, checked: checked });
  }

  popUsername( id: number ){
      console.log("POPusername: " + id);
      const filtrados = this.obj_usersSelected.filter(item => item.id !== id);
      this.obj_usersSelected = [...filtrados];
  }

  pop(id: number) {
    const filtrados = this.obj_usersSelected.filter(item => item.id !== id);
    this.obj_usersSelected = [...filtrados];
    this.data.map( item => { 
        if ( item.id == id ) { 
          item.checked = !item.checked;
        } 
    });
    this.data.filter((item) => item.checked == true ).length == 0 ? this.isCheckInputMessage =  false : this.isCheckInputMessage = true;
  }
}
