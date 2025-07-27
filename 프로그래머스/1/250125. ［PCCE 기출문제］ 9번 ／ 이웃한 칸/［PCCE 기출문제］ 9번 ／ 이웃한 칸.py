def solution(board, h, w):
    size = len(board)
    goal = board[h][w]
    targets = ((-1, 0), (0, 1), (1, 0), (0, -1))
    count = 0
    for candi in targets:
        new_h = h + candi[0]
        new_w = w + candi[1]
        if new_h < 0 or new_w < 0 or new_h >= size or new_w >= size:
            continue
        if board[new_h][new_w] == goal:
            count += 1
    return count