import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfCampagnesComponent } from './components/list-of-campagnes/list-of-campagnes.component';
import { OneCompagneComponent } from './components/one-compagne/one-compagne.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CompagneDetailsComponent } from './components/compagne-details/compagne-details.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListOfCampagnesComponent,
    OneCompagneComponent,
    CompagneDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
