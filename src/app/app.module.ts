import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { MyDetailsComponent } from './my-details/my-details.component';
import { UserService } from './user.service';
import { ContactComponent } from './contact/contact.component';
import { PipeComponent } from './pipe/pipe.component';

const appRoutes:Routes=[
  {
    path:'dashboard/:id/:name', 
    component: DashboardComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login/:id/:name',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    MyDetailsComponent,
    ContactComponent,
    PipeComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
