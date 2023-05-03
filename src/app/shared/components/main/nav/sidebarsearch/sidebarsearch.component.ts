import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarsearch',
  templateUrl: './sidebarsearch.component.html',
  styleUrls: ['./sidebarsearch.component.css']
})
export class SidebarsearchComponent implements OnInit {
 

  @Input() data: string[] = ['eddy', 'jordan', 'paola', 'tessy', 'chocolate', 'jean', 'marlene', 'maria', 'josue', 'nicole', 'chingo', 'joaquin', 'adriano'];

  ngOnInit(){

    
  }

}
