import { Component , OnInit } from '@angular/core';
import { Joueur } from '../model/joueur/joueur';
import { JoueurService } from '../services/joueur-service/joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-joueur',
  templateUrl: './list-joueur.component.html',
  styleUrls: ['./list-joueur.component.css']
})
export class ListJoueurComponent implements OnInit{

  joueurs: Joueur[] = [];

  constructor(private joueurService: JoueurService, private router: Router) {}

  private getJoueurs() {
    this.joueurService.getAllJoueurs().subscribe(data => {
      this.joueurs = data;
    })
  }

  detailsJoueur(id: number) {
    this.router.navigate(['details-joueur', id]);
  }

  updateJoueur(id: number) {
    this.router.navigate(['update-joueur', id]);
  }

  ngOnInit(): void {
      this.getJoueurs();
      console.log(this.joueurs);
  }

}
