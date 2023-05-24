import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '@data/models/User';
import { Subscription, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any; // Guardar datos de usuario registrados.
  public identity: any;
  clientesSubscription: Subscription;

  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    /**
     * Guardar datos de usuario en almacenamiento local cuando ha
     * iniciado sesión y configuración nula cuando se cierra la sesión.
     */
    this.clientesSubscription = this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'nul');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  /**
   * Iniciar sesión con correo electrónico / contraseña.
   * @param email
   * @param password
   */
  public signIn(email: string, password: string) {
    console.log('Email: ' + email);
    console.log('Password: ' + password);
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['feed']);
          }
        });
      })
      .catch((error) => {
        console.log('Error login');
        console.log(error);
      });
  }

  /**
   * Configuración de datos de usuario al iniciar sesión con nombre de usuario/contraseña,
   * regístrese con nombre de usuario/contraseña e inicie sesión con autenticación social
   * proveedor en la base de datos de Firestore usando AngularFirestore + AngularFirestoreDocument service.
   * @param user
   */
  private setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      email: user.email,
      phoneNumber: '',
      profileImageURL: user.photoURL,
      uid: user.uid,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  /**
   * Get user information.
   * @returns
   */
  public getIdentity() {
    if (!this.identity) {
      this.identity = JSON.parse(localStorage.getItem('user')!);
    }
    return this.identity;
  }

  /**
   * @desc Error in services.
   * @param
   * @return
   **/
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status} \n Message:_${error.message}`;
    }
    return of({ error: true, msg: errorMessage, data: null });
  }

  /**
   * @desc Services calls are destroyed.
   * @param
   * @return
   **/
  ngOnDestroy() {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }
  }
}
