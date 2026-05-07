import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  form = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: ''
  };

  submitted = false;
  error = false;
  loading = false;

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
