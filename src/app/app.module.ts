import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPaneComponent } from './components/main-pane/main-pane.component';
import { RegisterComponent } from './components/main-pane/register/register.component';
import { LoginComponent } from './components/main-pane/login/login.component';
import { PrivacyComponent } from './components/main-pane/privacy/privacy.component';
import { FeedbackComponent } from './components/main-pane/feedback/feedback.component';
import { FleetComponent } from './components/main-pane/fleet/fleet.component';
import { MainUiComponent } from './components/main-pane/main-ui/main-ui.component';
import { AirportComponent } from './components/main-pane/fleet/airport/airport.component';
import { LocalComponent } from './components/main-pane/fleet/local/local.component';
import { TourComponent } from './components/main-pane/fleet/tour/tour.component';
import { DefaultComponent } from './components/main-pane/fleet/default/default.component';
import { ToastrModule } from 'ngx-toastr';

import { TermsComponent } from './components/main-pane/terms/terms.component';
import { FaqComponent } from './components/main-pane/faq/faq.component';
import { TestingComponent } from './components/testing/testing.component';
import { RateUsComponent } from './components/main-pane/rate-us/rate-us.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/mainUi', pathMatch: 'full' },
  { path: 'mainPane', component: MainPaneComponent, },
  { path: 'mainUi', component: MainUiComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'rate-us', component: RateUsComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'fleet', component: FleetComponent,
    children: [
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: 'default', component: DefaultComponent },
      { path: 'airportFleet', component: AirportComponent },
      { path: 'localFleet', component: LocalComponent },
      { path: 'tourFleet', component: TourComponent }
    ]    
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainPaneComponent,
    RegisterComponent,
    LoginComponent,
    PrivacyComponent,
    FeedbackComponent,
    FleetComponent,
    MainUiComponent,
    AirportComponent,
    LocalComponent,
    TourComponent,
    DefaultComponent,
    TermsComponent,
    FaqComponent,
    TestingComponent,
    RateUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    ToastrModule.forRoot(),
    FormsModule,
    
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
