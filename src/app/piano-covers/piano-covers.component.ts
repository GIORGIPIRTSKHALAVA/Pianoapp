import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-piano-covers',
  standalone: true,
  templateUrl: './piano-covers.component.html',
  styleUrls: ['./piano-covers.component.scss']
})
export class PianoCoversComponent {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;

  playCover(cover: string) {
    const audio = this.audioPlayer.nativeElement as HTMLAudioElement;
    audio.src = `${cover}.mp3`;
    audio.currentTime = 0;
    audio.play();
  }
}
