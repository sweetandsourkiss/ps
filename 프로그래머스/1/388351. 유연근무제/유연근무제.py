def solution(schedules, timelogs, startday):
    startday -= 1 # 0:월 ~ 6:일
    
    answer = 0
    for tup in enumerate(timelogs):
        idx, log = tup
        limit = schedules[idx] + 10
        if limit % 100 > 59:
            limit = limit + 100 - 60
        
        flag = True
        day = startday - 1
        
        for time in log:
            day = (day + 1) % 7
            if day == 5 or day == 6:                
                continue
                
            if time > limit:
                flag = False
                break
        
        if flag:
            answer += 1
        
        
    return answer