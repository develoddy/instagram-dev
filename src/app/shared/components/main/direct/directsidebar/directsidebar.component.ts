import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-directsidebar',
  templateUrl: './directsidebar.component.html',
  styleUrls: ['./directsidebar.component.css']
})
export class DirectsidebarComponent {

  @Output() data: string[] = ["contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact", "contact"];

}
