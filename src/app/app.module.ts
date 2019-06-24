import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Components
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { FoodDrinksComponent } from './food-drinks/food-drinks.component';
import { FindusComponent } from './findus/findus.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

// Modules
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';



import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './home/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    FoodDrinksComponent,
    FindusComponent,
    PromotionsComponent,
    AuthComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    SignupComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
