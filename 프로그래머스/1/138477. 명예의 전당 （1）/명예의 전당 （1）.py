def solution(k, score):
    answer = []
    arr = []
    for sc in score:
        if len(arr) < k:
            arr.append(sc)
        else:
            if arr[k - 1] < sc:
                arr[k - 1] = sc
        
        arr.sort(reverse = True)
        answer.append(arr[len(arr) - 1])
    return answer