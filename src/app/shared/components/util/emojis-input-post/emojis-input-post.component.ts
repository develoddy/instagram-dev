import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emojis-input-post',
  templateUrl: './emojis-input-post.component.html',
  styleUrls: ['./emojis-input-post.component.css']
})
export class EmojisInputPostComponent implements OnInit {

  // Recibe datos de componente padre 'Main.component'.
  @Input() top: number = 0;
  @Input() left: number = 0;

  ngOnInit() {} 
}
