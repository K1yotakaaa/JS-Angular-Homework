import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AboutUs';
}
