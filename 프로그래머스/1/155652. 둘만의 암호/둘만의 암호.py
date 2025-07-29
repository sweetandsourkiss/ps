def solution(s, skip, index):
    answer = []
    possible_chars = []
    
    for i in range(26):
        target = chr(97 + i)
        if target not in skip:
            possible_chars.append(target)
    # print(possible_chars)
    size = len(possible_chars)
    for _char in s:
        idx = possible_chars.index(_char)
        idx = (idx + index) % size
        answer.append(possible_chars[idx])
        
    return ''.join(answer)