import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public spinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private firebase: AngularFirestore) {}

  /** ---------------------------
    * @description: Se recupera de Firebase los datos del usuario
    * por la propiedas "uid".
    * @param uid 
    * @returns Observable<any> 
    --------------------------- */
  fetchUser(uid: string): Observable<any> {
    return this.firebase.collection('users').doc(uid).get(); 
  }

  /** ---------------------------
   * @description: Se recupera de firebase los datos del usuario
   * por la propiedad "username".
   * @param username 
   * @returns Observable<any> 
  --------------------------- */
  fetchUserByUsername(username: string): Observable<any> {
    return this.firebase
      .collection('users', (ref) => ref.where('username', '==', username)).valueChanges();
  }
}
