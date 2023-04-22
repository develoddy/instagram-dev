import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScriptsService } from '@data/services/api/scripts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public cssUrl: string;

  constructor(
    public sanitizer: DomSanitizer,
    public scripts: ScriptsService,
  ) {
    //scripts.loadFiles(['responsive']);
    //this.cssUrl = '/assets/css/responsive.css';
    //this.cssUrl = '/assets/css/root.css';
    
  }
  
  ngOnInit() {}


}
