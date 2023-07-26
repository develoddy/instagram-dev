import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.css']
})
export class ReelsComponent implements OnInit {
 

  public data: string[] = ["reels", "reels", "reels", "reels", "reels", "reels"]

  ngOnInit() {
   
  }

}
