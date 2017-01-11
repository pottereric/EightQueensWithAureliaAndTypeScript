import {Queen} from './queen';

export class App {
  message = '8 Queens';
  queens = []; 
  lastRow: number;
  lastColumn: number;

  constructor ( ) {
  }

  public Solve() {
    this. queens = new Array<Queen>(4);

    this.queens[0] = new Queen(null, 1);
    this.queens[1] = new Queen(this.queens[0], 2);
    this.queens[2] = new Queen(this.queens[1], 3);
    this.queens[3] = new Queen(this.queens[2], 4);
      
    this.queens[3].Solve();
  }
}
