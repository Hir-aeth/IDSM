import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-domaines',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './domaines.html',
  styleUrl: './domaines.scss'
})
export class Domaines {
  readonly heroBg = "linear-gradient(to bottom, rgba(8,15,30,0.74), rgba(8,15,30,0.9)), url('images/thumb-architecture.jpg') center/cover no-repeat";
}
