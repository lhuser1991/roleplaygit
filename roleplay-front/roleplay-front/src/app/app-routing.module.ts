import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJoueurComponent } from './list-joueur/list-joueur.component';
import { CreateJoueurComponent } from './create-joueur/create-joueur.component';
import { DetailsJoueurComponent } from './details-joueur/details-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { ListGuerrierComponent } from './list-guerrier/list-guerrier.component';

const routes: Routes = [
  {path: 'joueur', component: ListJoueurComponent},
  {path: 'create-joueur', component: CreateJoueurComponent},
  {path: 'details-joueur/:id', component: DetailsJoueurComponent},
  {path: 'update-joueur/:id', component: UpdateJoueurComponent},
  {path: 'guerrier', component: ListGuerrierComponent},
  {path: '', redirectTo: 'joueur', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
