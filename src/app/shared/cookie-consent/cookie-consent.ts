import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.scss'
})
export class CookieConsent implements OnInit {
  visible = false;

  ngOnInit() {
    this.visible = !localStorage.getItem('cookie-consent');
  }

  accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    this.visible = false;
  }

  refuse() {
    localStorage.setItem('cookie-consent', 'refused');
    this.visible = false;
  }
}
