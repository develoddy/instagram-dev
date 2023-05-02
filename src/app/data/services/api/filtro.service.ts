import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  public optionPost: boolean;

  // display info
  public displayInfoProfile: boolean;
  public clientX:0;
  public clientY:0;

  constructor() { 
    this.optionPost = false;
    this.displayInfoProfile = false;
  }


  /**
   * ---- Post click display option ----
   */
  displayOptionPost() { 
    this.optionPost = true;
  }

  /**
   * ---- Post mouse over display option ----
   */
  mouseOver(event:any) {
    const ref = event.ref.nativeElement;
    const coords = ref.getBoundingClientRect();
    console.log(coords);
    this.clientX = coords.left;
    this.clientY = (scrollY + coords.bottom);
    
    
    this.displayInfoProfile = event.hover;
  }

  
}
