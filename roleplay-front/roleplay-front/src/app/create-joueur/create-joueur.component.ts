import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur';
import { JoueurService } from '../joueur.service';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Classe } from '../classe';
import { ClasseService } from '../classe.service';

@Component({
  selector: 'app-create-joueur',
  templateUrl: './create-joueur.component.html',
  styleUrls: ['./create-joueur.component.css']
})
export class CreateJoueurComponent implements OnInit{

  joueur: Joueur = new Joueur();
  classes: Classe[] = [];

  constructor(private joueurService: JoueurService, private classeService: ClasseService, private router: Router) {}

  goToJoueurList() {
    this.router.navigate(['/joueur']);
  }

  getAllClasse() {
    this.classeService.getAllClasses().subscribe(data => {
      this.classes = data;
    })
  }

  saveJoueur() {
    this.joueurService.createJoueur(this.joueur).pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe(() => {
      this.goToJoueurList();
    })
  }

  onSubmit() {
    console.log(this.joueur);
    this.saveJoueur();
  }

  ngOnInit(): void {
    this.getAllClasse();
    console.log(this.classes);
  }
}
