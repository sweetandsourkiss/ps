function solution(n, control) {
    for(const _com of control){
        switch(_com){
            case 'w':
                n++
                break;
            case 'a':
                n -= 10
                break;
            case 's':
                n--
                break;
            case 'd':
                n += 10
                break;    
        }
    }
    return n
}