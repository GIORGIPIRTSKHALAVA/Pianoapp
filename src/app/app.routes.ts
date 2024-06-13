import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { PianoComponent } from './piano/piano.component';
import { PianoCoversComponent } from './piano-covers/piano-covers.component';

export const routes: Route[] = [
  { path: '', redirectTo: 'piano', pathMatch: 'full' },
  { path: 'piano', component: PianoComponent },
  { path: 'piano-covers', component: PianoCoversComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
.catch(err => console.error(err));
