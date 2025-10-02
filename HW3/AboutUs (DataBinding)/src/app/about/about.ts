import { Component } from '@angular/core';
import { Contact, contacts } from '../contacts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  about: Contact[] = contacts;

  searchText: string = ''; // 🔹 Two-way binding property
  selectedContact?: Contact; // 🔹 For event binding result

  // 🔹 Method for filtering
  filteredContacts() {
    if (!this.searchText) return this.about;
    return this.about.filter((c) =>
      c.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 🔹 Method for event binding (on card click)
  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  // 🔹 Clear input (event binding)
  clearSearch() {
    this.searchText = '';
    this.selectedContact = undefined;
  }
}
