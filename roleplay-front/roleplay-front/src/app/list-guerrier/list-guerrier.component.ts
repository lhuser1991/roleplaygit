import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur';
import { JoueurService } from '../joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-guerrier',
  templateUrl: './list-guerrier.component.html',
  styleUrls: ['./list-guerrier.component.css']
})
export class ListGuerrierComponent implements OnInit{

  guerriers: Joueur[] = [];

  constructor(private joueurService: JoueurService, private router: Router) {};

  private getGuerriers() {
    this.joueurService.getAllGuerriers().subscribe(data => {
      this.guerriers = data;
    })
  }


  ngOnInit(): void {
      this.getGuerriers();
  }

}
