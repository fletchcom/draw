import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';


import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  error: any;

  constructor(private usersService: UsersService,
    private router: Router) {}

  ngOnInit() {}
  showNav = true;

  login(): void{

    this.usersService.login(this.user).subscribe(
      (response:any)=>{
        // console.log(response);

        if(response.success == false){
          this.error=true;
        }
        //Add a route if not logged in
        else
          this.router.navigate(['/articles']);
      }
    );
  }

}