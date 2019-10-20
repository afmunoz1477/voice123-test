import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material';
import { ImageHandlerPipe } from './pipes/image-handler.pipe';
import { HighligthPipe } from './pipes/highligth.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { DemofilePipe } from './pipes/demofile.pipe';
import { ActorsCardComponent } from './components/actors-card/actors-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActorsListComponent,
    ImageHandlerPipe,
    HighligthPipe,
    FooterComponent,
    DemofilePipe,
    ActorsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
