import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  readonly heroBg = "linear-gradient(to bottom, rgba(8,15,30,0.65) 0%, rgba(8,15,30,0.75) 60%, rgba(8,15,30,0.92) 100%), url('images/hero-bg.jpg')";
}
