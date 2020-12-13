import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { FavouritiesComponent } from './modules/pubg-tournaments/components/favourities/favourities.component';
import { TournamentsComponent } from './modules/pubg-tournaments/components/tournaments/tournaments.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [

  {path:'',component:HeroComponent},
  {path:'home',component:HeroComponent},
  {path:'tournaments', component:TournamentsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'favourities', component:FavouritiesComponent},
  {path:'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[TournamentsComponent,LoginComponent,RegisterComponent,FavouritiesComponent]
