export class Queen {
    constructor (private nextQueen: Queen, public Column: number ) { 
        this.Row = 1;
    }

    public Row : number;

    public static BoardSize : number;

    public MoveNext(){
        this.Row++;
    }

    public CanPositionBeAttacked(possibleRow: number, possibleColumn: number) : boolean
    {
        if(this.Row == possibleRow){
            return true;
        }
        else if(this.IsOnDiagnol(possibleRow, possibleColumn)) {
            return true;
        }
        else if(this.nextQueen != null){
            return this.nextQueen.CanPositionBeAttacked(possibleRow, possibleColumn);
        }
        else {
            return false;
        }
    }

    private IsOnDiagnol(possibleRow: number, possibleColumn: number) : boolean {
        var columnDiff = possibleColumn - this.Column;
        if(possibleRow - columnDiff == this.Row ||
           possibleRow + columnDiff == this.Row) {
               return  true;
        }
        return false;
    }

    public Solve() : boolean {
        if(this.nextQueen == null){
            return  true;
        }

        this.nextQueen.Solve();

        while(this.nextQueen.CanPositionBeAttacked(this.Row, this.Column) ||
              this.Row > Queen.BoardSize){
            this.MoveNext();

            if(this.Row > Queen.BoardSize){
                this.Row = 1;
                this.nextQueen.MoveNext();
                this.nextQueen.Solve();
            }
        }

        return true;
    }
}