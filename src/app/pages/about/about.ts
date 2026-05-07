import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  private meta = inject(Meta);

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: "Découvrez IDSM, bureau d'études techniques au Maroc. Expertise reconnue en structure, diagnostic et maîtrise d'œuvre pour vos projets de construction et rénovation." });
  }
}
