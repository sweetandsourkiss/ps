function solution(dice) {
    let answer = [ -1 ];
    // 최대 경우의 수
    // 10개의 주사위 --> 5개 5개
    // 가져가는 주사위의 조합의 수 === 10C5 ~= 250
    // 경우의 수 ===  6^10 === 6^5 * 6^5 ~= 8000 * 8000 === 64,000,000
    // 64,000,000 * 250 === 180억...
    // 백트레킹??
    let max_win = -1
    
    const fight = (select_dice_arr) => {
        const a_case = {}
        const b_case = {}
        
        const a_select_dice = select_dice_arr.map((value, index) => value === 'a' ? index : -1).filter(v => v !== -1)
        const b_select_dice = select_dice_arr.map((value, index) => value === 'b' ? index : -1).filter(v => v !== -1)
        // console.log(a_select_dice)
        // console.log(b_select_dice)
        const comb = (sum, index, select_dice, target) => {
            if(index === select_dice.length){
                if(target === 'a'){
                    a_case[sum] = (a_case[sum] ?? 0) + 1    
                }else if(target === 'b'){
                    b_case[sum] = (b_case[sum] ?? 0) + 1
                }
            }else {
                for(let i = 0;i < 6;i++){
                    comb(sum + dice[select_dice[index]][i], index + 1, select_dice, target)
                }
            }
        }
        comb(0, 0, a_select_dice, 'a')
        comb(0, 0, b_select_dice, 'b')
        
        let _a_win = 0, _draw = 0, _b_win = 0
        
        // console.log(a_case, b_case)
        // console.log('----------------')
        Object.entries(a_case).forEach(([_a_sum, _a_count]) => {
            Object.entries(b_case).forEach(([_b_sum, _b_count]) => {
                const _total_count = _a_count * _b_count
                if(Number(_a_sum) > Number(_b_sum)) {
                    _a_win += _total_count
                } else if(Number(_b_sum) > Number(_a_sum)) {
                    _b_win += _total_count
                } else {
                    _draw += _total_count
                }
            })
        })
        
        return [_a_win, _draw, _b_win]
    }
    
    const combination = (cur_index, select_dice_arr, a_dice_number, b_dice_number) => {
        if(cur_index === dice.length){
            // 주사위 정하기 완료
            // console.log(select_dice_arr)
            const [a_win, draw, b_win] = fight(select_dice_arr)
            // console.log(a_win, draw, b_win)
            if(a_win > max_win){
                max_win = a_win
                answer = select_dice_arr.map((value, index) => {
                    return value === 'a' ? index + 1 : -1
                }).filter(v => v !== -1)
            }
            
        } else {
            // 주사위 누가 가질 지 정하기
            if(a_dice_number < dice.length / 2){
                select_dice_arr[cur_index] = 'a'
                combination(cur_index + 1, select_dice_arr, a_dice_number + 1, b_dice_number)
            }
            if(b_dice_number < dice.length / 2){
                select_dice_arr[cur_index] = 'b'
                combination(cur_index + 1, select_dice_arr, a_dice_number, b_dice_number + 1)
            }
        }
    }
    
    combination(0, Array(dice.length).fill(null), 0, 0)
    
    
    return answer;
}