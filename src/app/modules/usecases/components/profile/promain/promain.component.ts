import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '@core/http/authentication.service';
import { Post } from '@data/models/Post';
import { User, UserStats } from '@data/models/User';
import { FiltroService } from '@data/services/api/filtro.service';
import { ProfileService } from '@data/services/api/profile.service';
import { UserService } from '@data/services/api/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promain',
  templateUrl: './promain.component.html',
  styleUrls: ['./promain.component.css'],
})
export class PromainComponent implements OnInit {
  @Input() paramUsername: string;
  private clientesSubscription: Subscription;
  public user: User;
  public stats: UserStats;
  //public followButtonText: string = "";
  public btnEdit: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public filter: FiltroService,
    private userService: UserService,
    private authService: AuthenticationService,
    private profileService: ProfileService
  ) {
    this.paramUsername = this.route.snapshot.paramMap.get('username')!; //document.location.pathname;
    this.btnEdit = '';

    // Get info current user.
    //this.authService.getCurrentUser().subscribe((snapshot) => {
    //this.user = snapshot;
    //this.checkIfUserIsFollowed();
    //});

    // Get stats.
    //this.stats = this.authService.getStats();
  }

  ngOnInit() {
    this.fetchUser();
  }

  // SE RECUPERA LOS DATOS DEL USUARIO POR LA PROPIEDAD USERNAME.
  public fetchUser() {
    this.clientesSubscription = this.userService
      .fetchUserByUsername(this.paramUsername)
      .subscribe((snapshot) => {
        this.user = snapshot[0];
        this.checkIfUserIsFollowed();
      });
  }

  // VERIFICAR SI EL USUARIO ACTUAL SE ENCUENTRA EN SU PERFIL O SI HA ENTRADO EN OTRO
  // Y COMPROBAR SI SIGUE O LO SIGUEN.
  private checkIfUserIsFollowed() {
    if (this.checkIfItsYourProfile()) {
      this.btnEdit = 'Edit Profile';
    } else {
      let currentUserUID = this.authService.getIdentity().uid;
      let userUID = this.user.uid!;
      this.profileService
        .checkIfUserIsFollowed(currentUserUID, userUID)
        .subscribe((snapshot) => {
          let user = new User();
          user.isFollwed = snapshot.payload.exists;
          this.user.isFollwed = user.isFollwed;
          this.btnEdit = user.isFollwed ? 'Following' : 'Follow';
        });
    }
  }

  // SE VERIFICA SI EL USUARIO ACTUAL HA ENTRADO EN SU PERFIL O
  // HA ENTRADO EN OTRO PERFIL.
  public checkIfItsYourProfile(): boolean {
    return this.authService.getIdentity().uid == this.user.uid;
  }

  // SE RECUPERA EL TOTAL DE STATS.
  public followersTotal = 0;
  public followingsTotal = 0;
  public postsTotal = 0;
  public fetchUserStats() {
    if (this.user) {
      var uid = this.user.uid!;
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

                  // SE RECUPERA TODOS LOS STATS.
                  this.stats.followers = this.followersTotal;
                  this.stats.followings = this.followingsTotal;
                  this.stats.posts = this.postsTotal;
                  this.user.stats = this.stats;
                });
            });
        });
    }
  }

  ngOnDestroy() {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
      console.log(this.clientesSubscription.unsubscribe);
    }
  }
}
