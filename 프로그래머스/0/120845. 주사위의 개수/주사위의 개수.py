def solution(box, n):
    for i in range (0, len(box)):
        box[i] = int(box[i] / n)
    return box[0] * box[1] * box[2]