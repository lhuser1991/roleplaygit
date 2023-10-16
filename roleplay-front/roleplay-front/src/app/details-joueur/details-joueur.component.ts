import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur';
import { JoueurService } from '../joueur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-joueur',
  templateUrl: './details-joueur.component.html',
  styleUrls: ['./details-joueur.component.css']
})
export class DetailsJoueurComponent implements OnInit{

  joueur: Joueur = new Joueur();
  id: number = 0;

  constructor(private joueurService: JoueurService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.joueur = new Joueur();
      this.joueurService.getJoueurById(this.id).subscribe(data => {
        this.joueur = data;
      })
  }

}
