def solution(video_len, pos, op_start, op_end, commands):
    minutes = int(pos[:2])
    seconds = int(pos[3:])
    start_min = int(op_start[:2])
    start_sec = int(op_start[3:])
    end_min = int(op_end[:2])
    end_sec = int(op_end[3:])
    video_min = int(video_len[:2])
    video_sec = int(video_len[3:])
    
    # print(video_min, video_sec, minutes, seconds, start_min, start_sec, end_min, end_sec)
    # print(minutes, seconds)
    # 오프닝 구간인지 확인
    if (minutes * 100 + seconds >= start_min * 100 + start_sec) and (minutes * 100 + seconds <= end_min * 100 + end_sec):
        minutes = end_min
        seconds = end_sec
    for command in commands:
        # 커맨드에 따라 이동
        if command == "next":
            seconds += 10
        elif command == "prev":
            seconds -= 10
        
        # 시간 조정
        if seconds < 0:
            if minutes > 0 :
                minutes -= 1
                seconds += 60
            else:
                seconds = 0
        elif seconds > 59:
            minutes += 1
            seconds -= 60
        # 전체 범위를 벗어나는지 확인
        if minutes > video_min or (minutes == video_min and seconds > video_sec):
            minutes = video_min
            seconds = video_sec
        # 오프닝 구간인지 확인
        if (minutes * 100 + seconds >= start_min * 100 + start_sec) and (minutes * 100 + seconds <= end_min * 100 + end_sec):
            minutes = end_min
            seconds = end_sec
        
        # print(minutes, seconds)
    print(str(minutes).rjust(2, '0') + ":" + str(seconds).rjust(2, '0'))
    return str(minutes).rjust(2, '0') + ":" + str(seconds).rjust(2, '0')
    
        