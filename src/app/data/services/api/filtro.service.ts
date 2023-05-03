import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  public optionPost: boolean;
  public displayInfoProfile: boolean;
  public clientX:0;
  public clientY:0;

  constructor() { 
    this.optionPost = false;
    this.displayInfoProfile = false;
  }

  /**
   * Esta función se encarga de escuchar la acción del usuario
   * al hacer click en las opciones de la publicación.
   * Cuando el usuario haga click, se mostrará las opciones.
   */
  displayOptionPost(option:boolean) { 
    this.optionPost = option;
  }

  /**
   * Esta función se encarga de escuchar el evento del mouseOver 
   * cuando el usuario pasa el mouse por la imagen del perfil o el 
   * username, a continuación se mostrara una vetana con la información del perfil.
   * @param event 
   */
  mouseOverShowInfoProfile(event:any) {
    const ref = event.ref.nativeElement;
    const coords = ref.getBoundingClientRect();
    this.clientX = coords.left;
    this.clientY = (scrollY + coords.bottom);
    this.displayInfoProfile = event.hover;
  }

  // Ocultar la ventana de información de perfil.
  mouseOverHideInfoProfile(hover:boolean) {
    this.displayInfoProfile = hover;
  }
}