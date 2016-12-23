import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }         from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent }     from './app.component';
import { AppRoutingModule }  from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { LoginComponent}    from './login/login.component';
import { UserComponent }    from './users/user.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
