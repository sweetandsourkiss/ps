def solution(keymap, targets):
    answer = []
    minimum_keys = {}
    
    for keys in keymap:
        for data in enumerate(keys):
            _count, _char = data
            _count = _count + 1
            if _char in minimum_keys:
                # print(_count, _char)
                minimum_keys[_char] = min(minimum_keys[_char], _count)
            else:
                minimum_keys[_char] = _count
    # print(minimum_keys)
    for target in targets:
        _sum = 0
        for _char in target:
            if _char in minimum_keys:
                _sum += minimum_keys[_char]
            else:
                _sum = 0
                break
        if _sum == 0:
            answer.append(-1)
        else:
            answer.append(_sum)
    return answer