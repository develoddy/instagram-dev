import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FiltroService } from '@data/services/api/filtro.service';
import { MainComponent } from '@modules/usecases/components/main/main.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Output() usernameEvent = new EventEmitter();

  constructor(
    private render2: Renderer2,
    private filter: FiltroService
  ) {}

  ngAfterViewInit() {}
  
  ngOnInit() {}

  mouseOver( event:any ) {
    this.filter.mouseOverShowInfoProfile(event);
  }

  mouseOverDisplay(hover:boolean) {
    this.filter.mouseOverShowInfoProfile(hover);
  }

  public displayEmojis(event:any) {
    this.filter.displayEmojisPost(event);
  }

  public gotToProfile( username:string ) {
      this.usernameEvent.emit(username);
  }
}
