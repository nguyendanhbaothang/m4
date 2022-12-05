import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-game-numbers',
  templateUrl: './game-numbers.component.html',
  styleUrls: ['./game-numbers.component.css']
})
export class GameNumbersComponent {
  public isPlayingGame: boolean = false;
  public next: number = 1;
  public point: number = 0;
  public numbers: number[] = [];
  public timeleft: number = 0;
  public timeStart: any = false;
  public maxTime: number = 500;
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.timeleft = this.maxTime;
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i);
      //xao tron mang
      this.numbers = this.shuffle(this.numbers);
    }
  }
  ngDoCheck(): void {
    if (this.isPlayingGame == true) {
      if (!this.timeStart) {
        this.timeStart = setInterval(() => {
          this.timeleft--;
        }, 1000);
      }
    }
    if (this.isPlayingGame == true) {
      if (this.timeleft <= 0) {
        this.resetGame();
      }
    }
  }
  public playGame() {
    this.isPlayingGame = true;
  }


  win(): void {
    alert('You win!');
    this.resetGame();
  }
  public resetGame() {
    let a = alert(`Game Over ${this.point}`);
    this.isPlayingGame = false;
    this.next = 1;
    this.point = 0;
    this.timeleft = this.maxTime;
    clearInterval(this.timeStart);
    this.timeStart = null;
  }
  play(number: number): void {
    if (number == this.next) {
      this.next++;
      this.point++;
      this.numbers = this.shuffle(this.numbers);
      if (this.point == 100) {
        this.win();
      }
    } else {
      this.resetGame();
    }
  }
  shuffle(array: any) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
