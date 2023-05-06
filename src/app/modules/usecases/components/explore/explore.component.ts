import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  public showGridPosts:boolean;
  public spinnerTimeout: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.showGridPosts = false;
  }

  ngOnInit() {
    this.spinnerTimeout.next(true);
    setTimeout (() => {
      this.spinnerTimeout.next(false);
      this.showGridPosts = true;
    }, 1000);
  }

}
