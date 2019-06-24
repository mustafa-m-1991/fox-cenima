import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { FindusComponent } from './findus/findus.component';
import { FoodDrinksComponent } from './food-drinks/food-drinks.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'findus', component: FindusComponent },
  { path: 'food-and-drinks', component: FoodDrinksComponent },
  { path: 'signin', component: SignupComponent },
  { path: 'login', component: LoginComponent }
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
