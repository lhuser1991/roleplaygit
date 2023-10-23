import { Component, Input, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur/joueur';
import { JoueurService } from '../services/joueur-service/joueur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-joueur',
  templateUrl: './details-joueur.component.html',
  styleUrls: ['./details-joueur.component.css']
})
export class DetailsJoueurComponent implements OnInit{

  joueur: Joueur = new Joueur();
  id: number = 0;

  @Input() guerrierSelectionne: Joueur = new Joueur();
  @Input() guerrierSelectionneStatus: boolean = false;

  constructor(private joueurService: JoueurService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.guerrierSelectionneStatus == false) {
      this.id = this.route.snapshot.params['id'];
      this.joueur = new Joueur();
      this.joueurService.getJoueurById(this.id).subscribe(data => {
        this.joueur = data;
        console.log(this.joueur);
      });
    } else {
      this.joueur = this.guerrierSelectionne;
      console.log(this.joueur);
      console.log(this.guerrierSelectionneStatus);
    }
  }

}
