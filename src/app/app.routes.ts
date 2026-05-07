import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: "Accueil - IDSM — Bureau d'études techniques"
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
    title: "A propos - IDSM — Bureau d'études techniques"
  },
  {
    path: 'missions',
    loadComponent: () => import('./pages/missions/missions').then(m => m.Missions),
    title: "Missions - IDSM — Bureau d'études techniques"
  },
  {
    path: 'domaines',
    loadComponent: () => import('./pages/domaines/domaines').then(m => m.Domaines),
    title: "Domaines d'intervention - IDSM — Bureau d'études techniques"
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: "Contact - IDSM — Bureau d'études techniques"
  },
  {
    path: 'cgu',
    loadComponent: () => import('./pages/cgu/cgu').then(m => m.Cgu),
    title: "Conditions Générales d'Utilisation - IDSM — Bureau d'études techniques"
  },
  {
    path: 'cookies',
    loadComponent: () => import('./pages/cookies/cookies').then(m => m.Cookies),
    title: "Politique de Cookies - IDSM — Bureau d'études techniques"
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    title: "Page non trouvée - IDSM — Bureau d'études techniques"
  }
];
