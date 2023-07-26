import { Component,OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScriptsService } from '@data/services/api/scripts.service';
import { Subscription } from 'rxjs';
//import * as $ from "jquery";
//declare var $: any;

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit, OnDestroy {
  public cssUrl: string;
  constructor(
    public sanitizer: DomSanitizer,
    public scripts: ScriptsService,
  ) {
    scripts.loadFiles(['responsive']);
    this.cssUrl = '/assets/css/responsive.css';
  }
  ngOnInit() {
    
  }

  ngOnDestroy() {
  }
}
