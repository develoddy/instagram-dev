import { Component, Input, OnInit } from '@angular/core';
import { Post } from '@data/models/Post';
import { User } from '@data/models/User';

@Component({
  selector: 'app-profileheader',
  templateUrl: './profileheader.component.html',
  styleUrls: ['./profileheader.component.css']
})
export class ProfileheaderComponent implements OnInit {

  @Input() user: User;
  @Input() post: Post;
  
  ngOnInit() {
  }

}
