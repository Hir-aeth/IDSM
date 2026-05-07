import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-domaines',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './domaines.html',
  styleUrl: './domaines.scss'
})
export class Domaines implements OnInit {
  private meta = inject(Meta);

  readonly heroBg = "linear-gradient(to bottom, rgba(8,15,30,0.74), rgba(8,15,30,0.9)), url('images/thumb-architecture.jpg') center/cover no-repeat";

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: "IDSM intervient dans 8 domaines : bâtiment, routes, génie civil, logements, santé, tertiaire, infrastructures sportives, scolaires et culturels au Maroc." });
  }
}
