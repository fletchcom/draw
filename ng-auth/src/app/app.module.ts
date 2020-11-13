import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 1. Import FormsModule 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // 2. Add FormsModule to the imports list
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }