import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <div class="container not-found-inner">
        <h1>404</h1>
        <h2>Page non trouvée</h2>
        <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <a routerLink="/" class="btn-cta">Retour à l'accueil</a>
      </div>
    </section>
  `,
  styles: [`
    .not-found { min-height: 70vh; display: flex; align-items: center; text-align: center; background: var(--surface); }
    .not-found-inner { max-width: 600px; margin: 0 auto; }
    h1 { font-size: clamp(80px, 15vw, 140px); color: var(--gold); line-height: 1; margin-bottom: 8px; }
    h2 { font-size: 28px; color: var(--navy-deep); margin-bottom: 16px; }
    p { color: var(--muted); margin-bottom: 32px; font-size: 16px; }
  `]
})
export class NotFound {}
