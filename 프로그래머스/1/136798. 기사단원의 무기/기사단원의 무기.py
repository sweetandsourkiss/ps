def solution(number, limit, power):
    answer = 0
    for i in range(1, number + 1):
        count = 0 # 약수의 개수
        for j in range(1, 1 + int(i ** (1 / 2))):
            if i % j == 0:
                if j == i / j:
                    count += 1
                else:
                    count += 2
        if count > limit:
            answer += power
        else:
            answer += count
    
    return answer