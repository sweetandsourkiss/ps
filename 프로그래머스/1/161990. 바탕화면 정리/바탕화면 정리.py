def solution(wallpaper):
    size_r = len(wallpaper)
    size_c = len(wallpaper[0])
    min_r = size_r
    min_c = size_c
    max_r = 0
    max_c = 0
    
    for r in range(size_r):
        for c in range(size_c):
            if wallpaper[r][c] == '#':
                min_r = min(min_r, r)
                min_c = min(min_c, c)
                max_r = max(max_r, r + 1)
                max_c = max(max_c, c + 1)
    
    return [min_r, min_c, max_r, max_c]