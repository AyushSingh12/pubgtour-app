import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './modules/shared-material/shared-material.module';
import { PubgTournamentsModule } from './modules/pubg-tournaments/pubg-tournaments.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { TournamentsComponent } from './modules/pubg-tournaments/components/tournaments/tournaments.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { HeaderComponent } from './header/header.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { SearchComponent } from './search/search.component';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import{NgxPaginationModule} from 'ngx-pagination';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import{Ng2OrderModule} from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
      FooterComponent,
      HeaderComponent,
      SearchComponent
   ],
  imports: [
    BrowserModule,
    NgMatSearchBarModule,
    AppRoutingModule,
    SharedMaterialModule,
    PubgTournamentsModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingcomponents=[TournamentsComponent,LoginComponent,RegisterComponent]
