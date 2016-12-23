import { Component, OnInit }  from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
    selector: 'my-user',
    template: `
      <div *ngIf="users">
          <h2>{{users.name}} details!</h2>
          <div><label>id: </label>{{users.id}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="users.name" placeholder="name"/>
          </div>
        </div>  
`,
    providers: [UserService]
})
export class UserComponent implements OnInit{
    users: User[];
    constructor(
        private userService: UserService,
    ){}

    getUser() : void {
        this.userService.getUsers().then(users => this.users == users)
    }
    ngOnInit(): void {
      this.getUser();
    }
};