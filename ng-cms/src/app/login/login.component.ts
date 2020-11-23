import { Component, OnInit } from '@angular/core';
// 1. Import the service
import { UsersService } from '../users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) {
    this.usersService.test().subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

  ngOnInit() {}

}