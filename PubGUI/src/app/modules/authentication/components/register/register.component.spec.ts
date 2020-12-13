import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { SharedMaterialModule } from 'src/app/modules/shared-material/shared-material.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


const raw = {
  firstName: "shubham",
  lastName: "kumar",
  userName: "lucifer",
  password: "shubh12"
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let service: AuthenticationService;
  let fixture: ComponentFixture<RegisterComponent>;
  let spyUser: any;
  let routes: Router;
  let location: Location;

  class AuthenticationServiceStub {
    currentUser: any;
    constructor() {}
    registerUser(data) {
      if(data == raw) {
        return of(data);
      }
      return of(false);
    }
  }

  class fake {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [FormsModule,SharedMaterialModule,
        RouterTestingModule.withRoutes([{path: '', component: fake}])
      ],
      providers: [{provide: AuthenticationService, useClass: AuthenticationServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    fixture.debugElement.injector.get(AuthenticationService);
    location = TestBed.get(Location);
    routes = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should get all the fields of registeration form', () => {
    let firstName = fixture.debugElement.query(By.css('.first-name'));
    let lastName = fixture.debugElement.query(By.css('.last-name'));
    let userName = fixture.debugElement.query(By.css('.user-name'));
    let password = fixture.debugElement.query(By.css('.password'));
    let registerBtn = fixture.debugElement.query(By.css('.main-register-button'));

    expect(firstName.nativeElement).toBeTruthy();
    expect(lastName.nativeElement).toBeTruthy();
    expect(userName.nativeElement).toBeTruthy();
    expect(password.nativeElement).toBeTruthy();
    expect(registerBtn.nativeElement).toBeTruthy();
  })
});
