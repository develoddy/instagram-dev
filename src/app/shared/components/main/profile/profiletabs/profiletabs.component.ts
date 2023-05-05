import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-profiletabs',
  templateUrl: './profiletabs.component.html',
  styleUrls: ['./profiletabs.component.css']
})
export class ProfiletabsComponent implements OnInit {
 
  @Input() currentRoute: string;
  public activePost : boolean;
  public activeReels : boolean;
  public activeSaved : boolean;
  public activeTagged : boolean;
  
  constructor(
  ) {
    this.activePost = true;
    this.activeReels = false;
    this.activeSaved = false;
    this.activeTagged = false;
  }

  ngOnInit() { 
      let currentRoute = this.currentRoute.split('/')[2];
      this.activeTabs(currentRoute);
  }

  public activeTabs( tab:string ) {
      switch ( tab ) {
          case 'posts':
              this.activePost = true;
              this.activeReels = false;
              this.activeSaved = false;
              this.activeTagged = false;
              break;

          case 'reels':
              this.activeReels = true;
              this.activePost = false;
              this.activeSaved = false;
              this.activeTagged = false;
              break;

          case 'saved':
              this.activeSaved = true;
              this.activePost = false;
              this.activeReels = false;
              this.activeTagged = false;
              break;
          
          case 'tagged':
              this.activeTagged = true;
              this.activeSaved = false;
              this.activeReels = false;
              this.activePost = false;
              break;

          default:
              break;
      }
  }
}
