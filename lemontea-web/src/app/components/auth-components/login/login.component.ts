import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  link: any;
  textLink = '';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.link = this.route.data.subscribe(target => {
      if(target['link'] == 'login') {
        this.textLink = 'Login'
      } else this.textLink = 'Sign up'
    });
  }

}
