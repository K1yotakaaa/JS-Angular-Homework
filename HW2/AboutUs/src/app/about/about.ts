import { Component } from '@angular/core';
import { Contact, contacts } from '../contacts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  about: Contact[] = contacts
}
