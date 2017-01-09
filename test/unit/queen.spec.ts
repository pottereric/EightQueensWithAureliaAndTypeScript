import {Queen} from '../../src/queen';

describe('a single queen in the first row', () =>{
    var firstQueen = new Queen(null, 1);
    it('can attack in its row', () => {   
        expect(firstQueen.CanPositionBeAttacked(1, 2)).toBe(true);
    })

    it('can attack in its down diagnol', () => {
        expect(firstQueen.CanPositionBeAttacked(2, 2)).toBe(true);
    })

    it('cannot attack off row/diagnol', () => {
        expect(firstQueen.CanPositionBeAttacked(3, 2)).toBe(false);
    })

});

describe('a single queen in the second row', () =>{
    var firstQueen = new Queen(null, 1);
    firstQueen.MoveNext();
    it('can attack in its row', () => {   
        expect(firstQueen.CanPositionBeAttacked(2, 2)).toBe(true);
    })

    it('can attack in its down diagnol', () => {
        expect(firstQueen.CanPositionBeAttacked(3, 2)).toBe(true);
    })

    it('can attack in its up diagnol', () => {
        expect(firstQueen.CanPositionBeAttacked(1, 2)).toBe(true);
    })


    it('cannot attack off row/diagnol', () => {
        expect(firstQueen.CanPositionBeAttacked(4, 2)).toBe(false);
    })

});


describe('a two queen system', () => {
    var firstQueen = new Queen(null, 1);
    var secondQueen = new Queen(firstQueen, 2);
    secondQueen.MoveNext();

    it('can attack a row from the second queen', () => {
        expect(secondQueen.CanPositionBeAttacked(2,3)).toBe(true);
    })

    it('can attack a row from the first queen', () => {
        expect(secondQueen.CanPositionBeAttacked(1,3)).toBe(true);
    })

    it('Can be solved', () => {
        expect(secondQueen.Solve()).toBe(true);
        expect(secondQueen.Row).toBe(3);
    })
});

describe('a three queen system (3 x 4)', () => {
    var firstQueen = new Queen(null, 1);
    var secondQueen = new Queen(firstQueen, 2);
    var thirdQueen = new Queen(secondQueen, 3);

    thirdQueen.Solve();

    it('can solve for the first queen', () => {
        expect(firstQueen.Row).toBe(1);
    })

    it('can solve for the second queen', () => {
        expect(secondQueen.Row).toBe(4);
    })

    it('can solve for the third queen', () => {
        expect(thirdQueen.Row).toBe(2);
    })

});

describe('a four queen system', () => {
    var firstQueen = new Queen(null, 1);
    var secondQueen = new Queen(firstQueen, 2);
    var thirdQueen = new Queen(secondQueen, 3);
    var fourthQueen = new Queen(thirdQueen, 4);

    fourthQueen.Solve();

    it('can solve for the first queen', () => {
        expect(firstQueen.Row).toBe(2);
    })

    it('can solve for the second queen', () => {
        expect(secondQueen.Row).toBe(4);
    })

    it('can solve for the third queen', () => {
        expect(thirdQueen.Row).toBe(1);
    })

    it('can solve for the fourth queen', () => {
        expect(fourthQueen.Row).toBe(3);
    })

});

