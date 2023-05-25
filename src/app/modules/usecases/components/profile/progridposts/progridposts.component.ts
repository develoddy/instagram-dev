import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Post } from '@data/models/Post';
import { User } from '@data/models/User';
import { FiltroService } from '@data/services/api/filtro.service';
import { ProfileService } from '@data/services/api/profile.service';
import { UserService } from '@data/services/api/user.service';
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
  public user: User;
  paramUsername: string;

  constructor(
    private filter: FiltroService,
    private router: Router,
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private userService: UserService
  ) {
    this.infoPost = false;

    this.currentRoute = 'Demo';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

    //this.currentRoute = document.location.pathname;
    this.paramUsername = this.route.snapshot.paramMap.get("username")!;
    /*this.clientesSubscription = this.authService.getCurrentUser().subscribe((snaphot) => {
      this.user = snaphot;
      this.fetchPosts();
    });*/
  }

  ngOnInit() { this.fetchUser() }

  public fetchUser() {
    this.clientesSubscription = this.userService
      .fetchUserByUsername(this.paramUsername)
      .subscribe((snapshot) => {
        this.user = snapshot[0];
        this.fetchPosts();
      });
  }

  fetchPosts() {
    this.clientesSubscription = this.profileService
      .fetchPostsByOwnerUid(this.user.uid!)
      .subscribe((snapshot) => {
        this.posts = [];
        snapshot.forEach((element: any) => {
          this.posts.push({
            postId: element.payload.doc.id,
            ...element.payload.doc.data(),
          });
        });
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
