import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.sass']
})
export class SelectGameComponent implements OnInit {
  public selectedFile: any = null;
  public playerPic = document.getElementById('.player-picture');

  constructor(private http: HttpClientModule) {
   }

  ngOnInit() {
  }
}
