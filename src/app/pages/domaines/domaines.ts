import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveDivider } from '../../shared/wave-divider/wave-divider';

@Component({
  selector: 'app-domaines',
  standalone: true,
  imports: [RouterLink, WaveDivider],
  templateUrl: './domaines.html',
  styleUrl: './domaines.scss'
})
export class Domaines {}
