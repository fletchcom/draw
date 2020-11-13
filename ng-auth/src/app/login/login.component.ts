import { Component, OnInit } from '@angular/core';
// 1. Import the service
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // 2. Inject the service into the constructor
  constructor(private userService: UserService) {
    this.userService.test().subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

  ngOnInit() {}

}
