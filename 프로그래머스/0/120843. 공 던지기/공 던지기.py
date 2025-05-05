def solution(numbers, k):
    total_len = (k - 1) * 2
    return numbers[total_len % len(numbers)]