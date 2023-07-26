import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.getIdentity();
    if (currentUser) {
      req = req.clone({
        setHeaders: {
          "Content-Type" : "application/json; charset=utf-8",
          "Accept"       : "application/json",
        }
      });
    }

    // this.spinner.show();
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // this.spinner.hide();
          }
        },
        (error) => {
          //this.spinner.hide();
        }
      )
    );
  }
}
