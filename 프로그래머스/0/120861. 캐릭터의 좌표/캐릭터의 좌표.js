function solution(keyinput, board) {
    const MAX_X_ABS = Math.floor(board[0] / 2)
    const MAX_Y_ABS = Math.floor(board[1] / 2)
    let cur_x = 0
    let cur_y = 0
    keyinput.forEach(_cmd => {
        switch(_cmd){
            case 'up':
                cur_y = Math.min(cur_y + 1, MAX_Y_ABS)
                break;
            case 'down':
                cur_y = Math.max(cur_y - 1, -MAX_Y_ABS)
                break;
            case 'left':
                cur_x = Math.max(cur_x - 1, -MAX_X_ABS)
                break;
            case 'right':
                cur_x = Math.min(cur_x + 1, MAX_X_ABS)
                break;
        }
    })
    return [cur_x, cur_y]
}