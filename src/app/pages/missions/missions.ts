import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './missions.html',
  styleUrl: './missions.scss'
})
export class Missions {
  readonly heroBg = "linear-gradient(to bottom, rgba(8,15,30,0.82), rgba(8,15,30,0.95)), url('images/img-bet-17.jpg') center/cover no-repeat";
}
