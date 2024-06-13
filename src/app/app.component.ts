import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PianoComponent } from './piano/piano.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PianoComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pianoapp';
}
