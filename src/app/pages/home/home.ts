import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private meta = inject(Meta);

  readonly heroBg = "linear-gradient(to bottom, rgba(8,15,30,0.65) 0%, rgba(8,15,30,0.75) 60%, rgba(8,15,30,0.92) 100%), url('images/hero-bg.jpg')";

  form = { nom: '', prenom: '', email: '', telephone: '', objet: '', message: '' };
  submitted = false;
  error = false;
  loading = false;

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: "IDSM — Bureau d'études techniques au Maroc. Expertise en BET Structure, diagnostic technique et maîtrise d'œuvre pour vos projets de construction et rénovation à Rabat et tout le Maroc." });
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  async onSubmit() {
    this.loading = true;
    try {
      const resp = await fetch('https://formspree.io/f/xnjwbppp', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });
      if (resp.ok) {
        this.submitted = true;
      } else {
        this.error = true;
      }
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
}
