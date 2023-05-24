// https://github.com/SinghDigamber/angularfirebase-authentication/blob/master/src/app/shared/services/auth.service.ts
// https://github.com/SinghDigamber/angularfirebase-authentication/blob/master/src/app/components/sign-in/sign-in.component.html

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
import * as auth from 'firebase/auth';


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
   * Regístrese con correo electrónico/contraseña
   * @param email 
   * @param password 
   * @returns 
   */
  private signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Llame a la función SendVerificaitonMail() cuando un nuevo usuario se registre y devuelva la promesa */
        this.sendVerificationMail();
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /**
   * Enviar verificación por correo electrónico cuando se registre un nuevo usuario
   * @returns 
   */
  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  /**
   * Restablecer Olvidé mi contraseña
   * @param passwordResetEmail 
   * @returns 
   */
  forgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        console.log("DEBUG: forgotPassword -> Error");
        window.alert(error);
      });
  }

  /**
   * Inicia sesión con Google
   * @returns 
   */
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  }

  /**
   * Lógica de autenticación para ejecutar proveedores de autenticación
   * @param provider 
   * @returns 
   */
  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['feed']);
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /**
   * Devuelve verdadero cuando el usuario inicia sesión y se verifica el correo electrónico
   */
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
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
   * Desconectar la aplicación.
   * @returns 
   */
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
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
