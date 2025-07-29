def solution(s):
    answer = 0
    target = None
    target_count = 0
    else_count = 0
    for i in range(len(s)):
        if target is None:
            target = s[i]
            target_count += 1
        else:
            if s[i] == target:
                target_count += 1
            else:
                else_count += 1
        if target_count == else_count:
            answer += 1
            target = None
            target_count = 0
            else_count = 0
    if target_count != else_count:
        answer += 1
    return answer