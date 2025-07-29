def solution(s):
    answer = []
    history = {}
    index = 0
    for _char in s:
        if _char in history:
            answer.append(index - history[_char])
        else:
            answer.append(-1)
        history[_char] = index
        index += 1
    return answer