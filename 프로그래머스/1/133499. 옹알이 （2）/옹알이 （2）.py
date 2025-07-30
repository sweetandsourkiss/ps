def solution(babbling):
    answer = 0
    for babble in babbling:
        last_babble = -1
        index = 0
        # print(babble[index:index + 3])
        while index < len(babble):
            flag = False
            if last_babble != 0 and 'aya' == babble[index:index + 3]:
                flag = True
                last_babble = 0
                index += 3
            elif last_babble != 1 and 'ye' == babble[index:index + 2]:
                flag = True
                last_babble = 1
                index += 2
            elif last_babble != 2 and 'woo' == babble[index:index + 3]:
                flag = True
                last_babble = 2
                index += 3
            elif last_babble != 3 and 'ma' == babble[index:index + 2]:
                flag = True
                last_babble = 3
                index += 2
            if not flag:
                break
        if index == len(babble):
            answer += 1
    return answer