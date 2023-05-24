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
    console.log("DEBUG; Services profile.service...");
    return this.firebase.collection("posts", ref => ref.where('ownerUid', '==', uid )).snapshotChanges();
  }
}
