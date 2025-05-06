def solution(hp):
    answer = 0
    answer += int(hp / 5)
    hp %= 5
    answer += int(hp / 3)
    hp %= 3
    answer += hp
    return answer