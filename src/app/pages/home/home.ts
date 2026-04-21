import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveDivider } from '../../shared/wave-divider/wave-divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WaveDivider, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
