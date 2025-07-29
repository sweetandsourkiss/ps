def solution(cards1, cards2, goal):
    card1_idx = 0
    card2_idx = 0
    goal_idx = 0
    
    while goal_idx < len(goal):
        flag = False
        if card1_idx < len(cards1) and goal[goal_idx] == cards1[card1_idx]:
            goal_idx += 1
            card1_idx += 1
            flag = True
        elif card2_idx < len(cards2) and goal[goal_idx] == cards2[card2_idx]:
            goal_idx += 1
            card2_idx += 1
            flag = True
        
        if not flag:
            break;
    
    
    if goal_idx == len(goal):
        return "Yes"
    else:
        return "No"