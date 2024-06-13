import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent {

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;

  playSound(note: string) {
    const audio = this.audioPlayer.nativeElement as HTMLAudioElement;
    audio.src = `${note}.mp3`;
    audio.currentTime = 0;
    audio.play();
  }
}
