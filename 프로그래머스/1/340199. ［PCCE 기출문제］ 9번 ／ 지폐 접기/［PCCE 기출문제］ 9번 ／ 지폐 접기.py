def solution(wallet, bill):
    max_num = max(bill)
    min_num = min(bill)
    
    count = 0
    while True:
        print(max_num, min_num)
        # 넣을 수 있는지 체크
        flag = False
        if wallet[0] >= max_num and wallet[1] >= min_num:
            flag = True
        elif wallet[0] >= min_num and wallet[1] >= max_num:
            flag = True
        
        if flag:
            break
        else:
            # 넣을 수 있다면 break, 안되면 규칙에 따라 접기
            _numbers = (int(max_num / 2), min_num)
            max_num = max(_numbers)
            min_num = min(_numbers)
            count += 1
    
    return count
        
        