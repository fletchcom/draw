import { Component, OnInit } from '@angular/core';
// 1. Import the service
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   // 2. Inject the service into the constructor
  constructor(private usersService: UsersService) {

    // 3. Call the test method from the service
    console.log(this.usersService.test());
  }

  ngOnInit(): void {
  }

}
