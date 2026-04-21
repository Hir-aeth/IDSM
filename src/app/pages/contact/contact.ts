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

  onSubmit() {
    this.submitted = true;
  }
}
