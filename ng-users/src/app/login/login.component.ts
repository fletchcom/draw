import { Component, OnInit } from '@angular/core';
// 1. Import the service
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // 2. Create a new instance of the User object
  user:User = new User();
  // 3. Instantiate an errors array
  error: any;

  // 4. Clear out the constructor login
  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  // 3. Add a login method
  login(): void{

    this.userService.login(this.user).subscribe(
      (response)=>{
        console.log(response);

      if(response.success == false){
          this.error=true;
        }

      }
    );
  }
}