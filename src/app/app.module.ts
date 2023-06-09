import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { FastC0deComponent } from './fast-c0de/fast-c0de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:'fast_code', component: FastC0deComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'agendar', component: AgendamientoComponent},
  {path: '**', component:NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FastC0deComponent,
    ContactoComponent,
    AgendamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
