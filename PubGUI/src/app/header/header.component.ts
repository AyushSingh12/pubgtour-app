import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AuthenticationService } from '../modules/authentication/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$ : Observable<boolean>;

  constructor(private acct : AuthenticationService) {

   }

  ngOnInit() {
    this.isLoggedIn$ = this.acct.isLoggedIn;
  }

  onLogout()
  {
     this.acct.removeToken();
  }
}
