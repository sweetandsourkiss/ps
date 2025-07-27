def available_check(r, c, size, park):
    # print(r, c, size)
    flag = True
    for i in range(r, r + size):
        if not flag:
            break
        for j in range(c, c + size):
            if park[i][j] != "-1":
                flag = False
                break
    return flag

def solution(mats, park):
    max_mat_size = 1
    max_r = len(park)
    max_c = len(park[0])
    for r in range(max_r):
        for c in range(max_c):
            if park[r][c] == "-1":
                while True: 
                    result = False
                    # 경계 체크
                    if r + max_mat_size < max_r and c + max_mat_size < max_c:
                        # 한 사이즈 더 가능한지 체크
                        result = available_check(r, c, max_mat_size + 1, park)
                    
                    if result:
                        max_mat_size += 1
                    else:
                        break
    
    filtered_mats = [size for size in mats if size <= max_mat_size]
    if len(filtered_mats) == 0:
        return -1
    else:
        return max(filtered_mats)