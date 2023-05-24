import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Post } from '@data/models/Post';
import { FiltroService } from '@data/services/api/filtro.service';
import { ProfileService } from '@data/services/api/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progridposts',
  templateUrl: './progridposts.component.html',
  styleUrls: ['./progridposts.component.css'],
})
export class ProgridpostsComponent implements OnInit {
  currentRoute: string;
  private clientesSubscription: Subscription;
  public infoPost: boolean;
  @Output() mouseOverEvent = new EventEmitter();
  public posts: Post[] = [];

  constructor(
    private filter: FiltroService,
    private router: Router,
    private profileService: ProfileService
  ) {
    this.infoPost = false;

    this.currentRoute = 'Demo';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

    this.currentRoute = document.location.pathname;
  }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.clientesSubscription = this.profileService
      .fetchPostsByOwnerUid('2h9C6J90nVchyZ587UTqK0vyYHy1')
      .subscribe((snapshot) => {
        this.posts = [];
        snapshot.forEach((element: any) => {
          this.posts.push({
            postId: element.payload.doc.id,
            ...element.payload.doc.data(),
          });
        });
        console.log(this.posts);
        
      });
  }

  public mouseInfoPost(hover: boolean) {
    this.infoPost = hover;
  }

  public displayHorizontalWindowSwipePost(
    event: boolean,
    currentRoute: string
  ) {
    this.filter.displayHorizontalWindowSwipePost(event, currentRoute); // true
  }

  ngOnDestroy() {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
      console.log(this.clientesSubscription.unsubscribe);
    }
  }
}
