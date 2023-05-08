import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  public option: string = '';

  public optionPost: boolean;
  public displayInfoProfile: boolean;
  public emojisPost:boolean;
  public clientX = 0;
  public clientY = 0;
  public top = 0;
  public left = 0;
  public showSwipeHorizontalPost: boolean;
  public showFollowers: boolean;
  public showFollowing: boolean;
  public showSideSearch: boolean;
  public showLikes: boolean;
  public showSharepost: boolean;

  constructor() { 
      this.showSideSearch = false;
      this.optionPost = false;
      this.displayInfoProfile = false;
      this.emojisPost = false;
      this.showSwipeHorizontalPost = false;
      this.showFollowers = false;
      this.showFollowing = false;
      this.showLikes = false;
      this.showSharepost = false;
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
  public currentRoute: string;
  displayHorizontalWindowSwipePost(event:boolean, currentRoute: string) {
      this.showSwipeHorizontalPost = event;
      this.option = 'modalSwipePosts'
      this.currentRoute = currentRoute;
      if ( event ) {
          var stateObj = { foo: "bar" };
          history.pushState(stateObj, "page 2", "p/idxx");
      } else {
        var stateObj = { foo: "bar" };
          history.pushState(stateObj, "page 2", this.currentRoute);
      }
  }

 
}