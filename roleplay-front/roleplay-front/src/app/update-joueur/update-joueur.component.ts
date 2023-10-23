import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur/joueur';
import { JoueurService } from '../services/joueur-service/joueur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ClasseService } from '../services/classe-service/classe.service';
import { Classe } from '../model/classe/classe';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent implements OnInit{

  joueur: Joueur = new Joueur();
  id: number = 0;
  classes: Classe[] = [];

  constructor(private joueurService: JoueurService, private classeService: ClasseService, private route: ActivatedRoute, private router: Router) {}

  goToJoueurList() {
    this.router.navigate(['/joueur']);
  }

  getAllClasse() {
    this.classeService.getAllClasses().subscribe(data => {
      this.classes = data;
    })
  }

  updateJoueur() {
    this.joueurService.updateJoueur(this.id, this.joueur).pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe(() => {
      this.goToJoueurList();
    });
  }

  onSubmit() {
    this.updateJoueur();
  }

  ngOnInit(): void {
    this.getAllClasse();
    this.id = this.route.snapshot.params['id'];
    this.joueurService.getJoueurById(this.id).pipe(
      tap(data => {
        console.log(data);
        this.joueur = data;
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe();
  }

}
