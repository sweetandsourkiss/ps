def solution(n, w, num):
    # 0부터 시작하기
    n -= 1
    num -= 1
    
    base_value = num % (w * 2)
    
    if base_value >= w:
        base_value = w * 2 - base_value - 1
        going_right = False
    else :
        going_right = True
    
    print("base_value", base_value)
    
    answer = 0
    while num <= n:
        print(num, going_right)
        answer += 1
        if going_right:
            num += (w - base_value - 1) * 2 + 1
        else :
            num += (base_value) * 2 + 1
        going_right = not going_right
    
    return(answer)
    