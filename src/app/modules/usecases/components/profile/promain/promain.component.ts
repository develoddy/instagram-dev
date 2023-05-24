import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from '@data/models/User';
import { FiltroService } from '@data/services/api/filtro.service';
import { UserService } from '@data/services/api/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promain',
  templateUrl: './promain.component.html',
  styleUrls: ['./promain.component.css'],
})
export class PromainComponent implements OnInit {
  @Input() currentRoute: string;
  private clientesSubscription: Subscription;
  public user: User;

<<<<<<< Updated upstream
  constructor( private router: Router, private route: ActivatedRoute, public filter: FiltroService, private userService: UserService ) {
      this.currentRoute = document.location.pathname;
=======
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public filter: FiltroService
  ) {
    this.currentRoute = document.location.pathname;
>>>>>>> Stashed changes
  }

  ngOnInit() {
    this.fetchUser()
  }

  fetchUser() {
    this.clientesSubscription = this.userService.fetchUserByUsername("lujandev").subscribe(( snapshot) => {
      console.log("DEBUG: Promain.component");
      console.log(snapshot);
    })
  }

  ngOnDestroy() {
    if (this.clientesSubscription) {
        this.clientesSubscription.unsubscribe();
        console.log(this.clientesSubscription.unsubscribe);
    }
}
}
