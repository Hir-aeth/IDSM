import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './missions.html',
  styleUrl: './missions.scss'
})
export class Missions implements OnInit {
  private meta = inject(Meta);

  readonly heroBg = "linear-gradient(to bottom, rgba(8,15,30,0.82), rgba(8,15,30,0.95)), url('images/img-bet-17.jpg') center/cover no-repeat";

  ngOnInit() {
    this.meta.addTag({ name: 'description', content: "Découvrez les missions d'IDSM : BET Structure, diagnostic et expertises techniques, ingénierie et maîtrise d'œuvre. Bureau d'études techniques au Maroc." });
  }
}
