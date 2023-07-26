// https://github.com/SinghDigamber/angularfirebase-authentication/blob/master/src/app/shared/services/auth.service.ts
// https://github.com/SinghDigamber/angularfirebase-authentication/blob/master/src/app/components/sign-in/sign-in.component.html

//

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User, UserStats } from '@data/models/User';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import * as auth from 'firebase/auth';
import { ProfileService } from '@data/services/api/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any; // Guardar datos de usuario registrados.
  public identity: any;
  clientesSubscription: Subscription;
  public errorLogin: boolean = false;
  public spinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public textLogin: boolean = false;

  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private profileService: ProfileService
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
        this.fetchUserStats();
      } else {
        localStorage.setItem('user', 'null');
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
    this.textLogin = !this.textLogin;
    this.spinner.next(true);
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.spinner.next(false);
        this.setUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['/']); // feed
          }
        });
      })
      .catch((error) => {
        this.spinner.next(false);
        this.errorLogin = true;
        this.textLogin = !this.textLogin;
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
        console.log('DEBUG: forgotPassword -> Error');
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
        this.router.navigate(['/']); //feed
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
    console.log('DEBUG; isLoggedIn : ');
    console.log(user);

    //return user !== null && user.emailVerified !== false ? true : false;
    return user !== null ? true : false;
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
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      // [routerLink]="['login']"
      this.router.navigate(['login']);
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
   * Se obtiene los datos del current user.
   * @returns
   */
  public getCurrentUser(): Observable<any> {
    this.identity = this.getIdentity();
    var uid = this.identity.uid;
    return this.afs.collection('users').doc(uid).valueChanges(); //.snapshotChanges();
  }

  public localStorageStats: any;
  /**
   * Se recupera los datos de tasts del storage.
   * @returns 
   */
  public getStats() {
    if (!this.localStorageStats) {
      this.localStorageStats = JSON.parse(localStorage.getItem('stats')!);
    }
    return this.localStorageStats;
  }

  public followersTotal = 0;
  public followingsTotal = 0;
  public postsTotal = 0;
  public stats: UserStats = { followers: 0, followings: 0, posts: 0 };
  /**
   * Se recupera el total de tasts del currrentUser y se 
   * inserta los datos en el local storage.
   */
  public fetchUserStats() {
    var uid = this.getIdentity().uid;
    this.clientesSubscription = this.profileService
      .fetchFollowersStat(uid)
      .subscribe((snapshot) => {
        this.followersTotal = snapshot.length;

        this.clientesSubscription = this.profileService
          .fetchFollowingsStat(uid)
          .subscribe((snapshot) => {
            this.followingsTotal = snapshot.length;

            this.clientesSubscription = this.profileService
              .fetchPostsStat(uid)
              .subscribe((snapshot) => {
                this.postsTotal = snapshot.length;

                this.stats.followers = this.followersTotal;
                this.stats.followings = this.followingsTotal;
                this.stats.posts = this.postsTotal;
                localStorage.setItem('stats', JSON.stringify(this.stats));
              });
          });
      });
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
