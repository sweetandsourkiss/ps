def solution(t, p):
    answer = 0
    length = len(p)
    for i in range(len(t) - length + 1):
        print(int(t[i:i+length]))
        if int(t[i:i+length]) <= int(p):
            answer += 1
    return answer