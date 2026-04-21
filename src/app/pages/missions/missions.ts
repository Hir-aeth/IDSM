import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './missions.html',
  styleUrl: './missions.scss'
})
export class Missions {}
