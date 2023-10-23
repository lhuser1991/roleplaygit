import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur/joueur';
import { JoueurService } from '../services/joueur-service/joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-guerrier',
  templateUrl: './list-guerrier.component.html',
  styleUrls: ['./list-guerrier.component.css']
})
export class ListGuerrierComponent implements OnInit {

  guerriers: Joueur[] = [];
  guerrierSelectionneStatus: boolean = false;
  guerrierSelectionne: Joueur = new Joueur();
  isHovered: boolean = false;

  constructor(private joueurService: JoueurService, private router: Router) { };

  private getGuerriers() {
    this.joueurService.getAllGuerriers().subscribe(data => {
      this.guerriers = data;
      console.log(this.guerriers);
    })
  }

  chooseGuerrier(id: number) {
    this.guerrierSelectionneStatus = true;
    this.joueurService.getJoueurById(id).subscribe(data1 => {
      this.guerrierSelectionne = data1;
      console.log(this.guerrierSelectionne);
    });
  }


  ngOnInit(): void {
    this.guerrierSelectionneStatus = false;
    this.getGuerriers();
  }

}
