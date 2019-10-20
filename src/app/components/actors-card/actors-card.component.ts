import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actors-card',
  templateUrl: './actors-card.component.html',
  styleUrls: ['./actors-card.component.css']
})
export class ActorsCardComponent implements OnInit {

  audio: any = null;
  play = false;

  @Input() actor: any;
  @Input() key: any;

  constructor() { }

  ngOnInit() {
  }


  playSample(play, username) {
    console.log(play, username)
    this.audio = document.getElementById(`music/${username}`);
    if (play) {
      document.getElementById(`Play/${username}`).style.display = 'none';
      document.getElementById(`Pause/${username}`).style.display = 'block';
      this.audio.play();
    } else {
      document.getElementById(`Play/${username}`).style.display = 'block';
      document.getElementById(`Pause/${username}`).style.display = 'none';
      this.audio.pause();
    }
    this.play = !this.play;
  }

}
