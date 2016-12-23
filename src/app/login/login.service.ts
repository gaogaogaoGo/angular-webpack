import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User }          from '../model/user';

@Injectable()
export class LoginService {
    constructor(private http: Http){};
    private getUsersUrl = 'app/users';

    getUsers(): Promise<User[]>{
        return this.http.get(this.getUsersUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}