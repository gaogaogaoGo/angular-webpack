import { Component ,OnInit }    from '@angular/core';
import { LoginService } from './login.service'
import { User }    from '../model/user';
import { Router }  from '@angular/router';

@Component({
    selector: 'my-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent {
    title= '欢迎进入登录页面';
    user: User[];
    selectedLook : User;

    constructor(
        private loginService: LoginService,
        private router: Router
    ){}

    // ngOnInit(): void {
    //     this.getUsers();
    // }

    getUsers() :void {
        console.log('sss');
        //this.loginService.getUsers().then(users => this.user == users);
        this.router.navigate(['/user']);
    }
    addUser(){}
}

