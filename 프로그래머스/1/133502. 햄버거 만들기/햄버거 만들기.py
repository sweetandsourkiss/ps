def solution(ingredient):
    answer = 0
    now_status = []
    for i in ingredient:
        now_status.append(i)
        size = len(now_status)
        if len(now_status) > 3 and now_status[size - 1] == 1 and now_status[size - 2] == 3 and now_status[size - 3] == 2 and now_status[size - 4] == 1:
            now_status.pop()
            now_status.pop()
            now_status.pop()
            now_status.pop()
            answer += 1
    return answer