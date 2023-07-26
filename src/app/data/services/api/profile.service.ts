import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '@data/models/Post';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public posts: Post[] = [];

  public spinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private firebase: AngularFirestore) {}

  fetchPostsByOwnerUid(uid: string): Observable<any> {
    return this.firebase.collection("posts", ref => ref.where('ownerUid', '==', uid )).snapshotChanges();
  }

  public fetchFollowingsStat(uid: string): Observable<any>  {
    return this.firebase.collection("followings").doc(uid).collection("user-followings").snapshotChanges();
  }

  public fetchFollowersStat(uid: string): Observable<any>  {
    return this.firebase.collection("followers").doc(uid).collection("user-followers").snapshotChanges();
  }

  public fetchPostsStat(uid: string): Observable<any>  {
    return this.firebase.collection("posts", ref => ref.where('ownerUid', '==', uid )).snapshotChanges();
  }

  public checkIfUserIsFollowed(currentId: string, uid: string): Observable<any> {
    return this.firebase.collection("followings").doc(currentId).collection("user-followings").doc(uid).snapshotChanges();
  }
}
