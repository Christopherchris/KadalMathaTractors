import { Component, OnInit } from '@angular/core';
import {Router,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onlogin(){
    this.router.navigate(["/main"]);
  }

}
