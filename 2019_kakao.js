//행과 열 뒤집기 reduce 사용
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

//행열 뒤집기 iterative
const transpose_iter = matrix => {
    const newMatrix = []
    for( let i = 0; i < matrix[0].length ; i++){
        const tmp = [];
        matrix.map( (row) => tmp.push(row[i]));
        newMatrix.push(tmp);
    }
}

function solution(board, moves) {
    const stack = []
    const newBoard = []
    let answer = 0
    
    for( let i = 0; i < board[0].length ; i++){
        const tmp = [];
        board.map( (row, idx) => tmp.push(row[i]));
        newBoard.push(tmp);
    }
    
    for(let i = 0; i < moves.length; i++){
        const col = moves[i] -1
        
        for(let j = 0; j < newBoard[col].length; j++){
            const value = newBoard[col][j]
            
            if(value){
                newBoard[col][j] = 0
                if(value){
                    if(stack[stack.length -1] === value){
                        answer += 2
                        stack.pop()
                    }else{
                    stack.push(value)        
                    }
                }
                
                break;
            }
        }
        
        
        
    }
    
    return answer;
}