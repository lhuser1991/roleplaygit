import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJoueurComponent } from './list-joueur/list-joueur.component';
import { CreateJoueurComponent } from './create-joueur/create-joueur.component';
import { FormsModule } from '@angular/forms';
import { DetailsJoueurComponent } from './details-joueur/details-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { ListGuerrierComponent } from './list-guerrier/list-guerrier.component';

@NgModule({
  declarations: [
    AppComponent,
    ListJoueurComponent,
    CreateJoueurComponent,
    DetailsJoueurComponent,
    UpdateJoueurComponent,
    ListGuerrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
