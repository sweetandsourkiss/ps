def solution(park, routes):
    now_r = -1
    now_c = -1
    
    for r in range(0, len(park)):
        if now_r != -1 and now_c != -1:
            break
        for c in range(0, len(park[0])):
            # print(r, c, park[r])
            if park[r][c] == 'S':
                now_r = r
                now_c = c
                break
    
    if now_r == -1 and now_c == -1:
        return -1
    
    # print(now_r, now_c)
    delta = {
        "N" : [-1, 0],
        "S" : [1, 0],
        "W" : [0, -1],
        "E" : [0, 1]
    }
    for route in routes:
        _dir, _size = route.split(' ')
        _size = int(_size) # 타입 변환
        r, c = delta.get(_dir)
        print(r, c)
        # 끝가지 갈 수 있는지 체크
        new_r = now_r + r * _size
        new_c = now_c + c * _size
        # print(new_r, new_c)
        if new_r < 0 or new_r >= len(park) or new_c < 0 or new_c >= len(park[0]):
            continue
        # # 가는 도중에 장애물 있는지 체크
        flag = True
        for i in range(1, _size + 1):
            if park[now_r + r * i][now_c + c * i] == 'X':
                flag = False
                break
        # # 이동
        if flag:
            now_r = new_r
            now_c = new_c
    
    return [now_r, now_c]
    