import math

def solution(box, n):
    return math.prod(map(lambda x : x // n, box))