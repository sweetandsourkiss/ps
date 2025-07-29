def solution(food):
    arr = []
    for idx in range(1, len(food)):
        arr.append(str(idx) * (food[idx] // 2))
    return ''.join(arr) + "0" + ''.join(list(reversed(arr)))