import {Queen} from './queen';

export class App {
  message = '8 Queens';
  queens = []; 
  lastRow: number;
  lastColumn: number;
  boardSize: number;

  constructor ( ) {
    this.boardSize = 5;
  }

  public Solve() {    

    Queen.BoardSize = this.boardSize;

    this.queens = new Array<Queen>(this.boardSize);

    this.queens[0] = new Queen(null, 1);
    for(var i = 1; i < this.boardSize; i++){
      this.queens[i] = new Queen(this.queens[i-1], i + 1);
    }
      
    this.queens[this.boardSize - 1].Solve();
  }
}
