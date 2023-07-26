import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-directsidebar',
  templateUrl: './directsidebar.component.html',
  styleUrls: ['./directsidebar.component.css']
})
export class DirectsidebarComponent {

  // @Output() data: string[] = ["contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact"];
  @Input() data = [
    { profileUrl:"https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", username: "rebeca2372", fullname: "Rebeca Marroquín", checked: false, id: 0 },
    { profileUrl:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80", username: "lujandev", fullname: "Eddy Lujan", checked: false, id: 1 },
    { profileUrl:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", username: "paola", fullname: "Paola Lujan", checked: false, id: 2 },
    { profileUrl:"https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", username: "tessy", fullname: "Tessy Lujan", checked: false, id: 3 },
    { profileUrl:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80", username: "jordan", fullname: "Jordan Lujan", checked: false, id: 4 },
    { profileUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", username: "teresa", fullname: "Teresa Lujan", checked: false, id: 5 },
  ];
}
