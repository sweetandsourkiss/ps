def solution(n, m, section):
    answer = 0
    painted = -1
    for start in section:
        if start <= painted:
            continue
        painted = start + (m - 1)
        answer += 1
    
    return answer