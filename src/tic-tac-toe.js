class TicTacToe {

    constructor() {
        this.players = ['x', 'o'];
        this.player = this.players[0];
        this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.player;
            this.player = this.players[0] === this.player ?
                this.players[1] :
                this.players[0];
        }   
    }

    isFinished() {
        return !!this.getWinner() || this.isDraw();
    }

    getWinner() {
        let dict = [
            [this.matrix[0][0],this.matrix[0][1],this.matrix[0][2]],
            [this.matrix[1][0],this.matrix[1][1],this.matrix[1][2]],
            [this.matrix[2][0],this.matrix[2][1],this.matrix[2][2]],
            [this.matrix[0][0],this.matrix[1][0],this.matrix[2][0]],
            [this.matrix[0][1],this.matrix[1][1],this.matrix[2][1]],
            [this.matrix[0][2],this.matrix[1][2],this.matrix[2][2]],
            [this.matrix[0][0],this.matrix[1][1],this.matrix[2][2]],
            [this.matrix[0][2],this.matrix[1][1],this.matrix[2][0]]];

        let winner = dict.find(i => i.every(j => !!j && j === i[0]));        
        return !winner ? null : winner[0];
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(!this.matrix[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {    
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
