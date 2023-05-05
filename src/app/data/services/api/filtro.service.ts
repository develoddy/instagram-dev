import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  public optionPost: boolean;
  public displayInfoProfile: boolean;
  public emojisPost:boolean;
  public clientX = 0;
  public clientY = 0;
  public top = 0;
  public left = 0;
  public swipeHorizontalPost: boolean;

  constructor() { 
    this.optionPost = false;
    this.displayInfoProfile = false;
    this.emojisPost = false;
    this.swipeHorizontalPost = false;
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
    this.clientY = ( scrollY + coords.bottom );
    this.displayInfoProfile = event.hover;
  }

  // Ocultar la ventana de información de perfil.
  mouseOverHideInfoProfile(hover:boolean) {
    this.displayInfoProfile = hover;
  }

  /**
   * Esta función muestra una ventanita con los emojis a elegir para
   * insertar en el input de comentario de la publicación.
   * @param event 
   */
  displayEmojisPost(event: any) {
    const ref = event.ref.nativeElement;
    const coords = ref.getBoundingClientRect();
    this.top = ( coords.top + scrollY ) + 23; 
    this.left = ( coords.left - 14 ); 
    this.emojisPost = event.click;
  }

  /**
   * Esta funcion se encarga de mostrar el modal de las publicaciones 
   * que hay en el perfil actual.
   * @param event 
   */
  displayHorizontalWindowSwipePost(event:boolean) {
    this.swipeHorizontalPost = event;
  }
}