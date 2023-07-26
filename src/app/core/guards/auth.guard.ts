import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '@core/http/authentication.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {

        // console.log("DEBUG: Auth.guard -> " + this.authenticationService.isLoggedIn);
        /**
         * Si el usuario no está logueado entonces se le 
         * redirige a la pagina de Login.
         */
        if ( !this.authenticationService.isLoggedIn ) {
            this.router.navigate([ 'login' ])
        }
        return true;
        //const currentUser = this.authenticationService.getIdentity();
        //if ( currentUser ) {
            // HA INICIADO SESSIÓN PARA DEVOLVER TRUE, ENTONCES PUEDE SEGUIR.
            //return true;
        //}
        // NO HA INICIADO SESIÓN, ASI QUE REDIRIJA A LA PAGINA DE INICIO DE SESSIÓN CON LA URL DE RETORNO.
        //this.router.navigate(['/login']);
        //return false;
    }
}