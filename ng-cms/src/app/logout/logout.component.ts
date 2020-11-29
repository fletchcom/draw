import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  user: User = new User();
  error: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // console.log("exit here");
    this.usersService.logout().subscribe(
      (response: any) => {
        console.log(response);

        if (response.success == false) {
          this.error = true;
        }
      }
    );
  }
}
