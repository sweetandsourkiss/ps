function solution(n, m, x, y, r, c, k) {
    // 0부터 세자
    x--
    y--
    r--
    c--
    // 최소경로로 가야하는지 체크
    const min_dist = Math.abs(x - r) + Math.abs(y - c)    
    // console.log(min_dist)
    
    const check_remain_route = (nx, ny) => {
        // d l r u 순으로 확인
        let _route = ""
        if(r > nx){
            _route += "d".repeat(r - nx)
        }
        if(ny > c){
            _route += "l".repeat(ny - c)
        }
        if(c > ny){
            _route += "r".repeat(c - ny)
        }
        if(nx > r){
            _route += "u".repeat(nx - r)
        }
        return _route
    }
    
    if(min_dist === k){
        // console.log("min dist")
        const _route = check_remain_route(x, y)
        return _route
    } else {
        // 안되는 경우
        if(k - min_dist % 2 === 1){
            return "impossible"
        }
        
        const pq = []
        pq.push({
            nx:x,
            ny:y,
            depth:0,
            route:""
        })
        while(pq.length){
            const now = pq.shift()
            // console.log(pq)
            const remain_dist = Math.abs(r - now['nx']) + Math.abs(c - now['ny'])
            if(now['depth'] > k) return "impossible"
            if(now['depth'] + remain_dist === k){
                // 정답 떳다
                const _route = check_remain_route(now['nx'] , now['ny'])
                console.log(now['route'] , _route)
                return now['route'] + _route
            } else {
                // 상하좌우 탐색
                const dr = [1, 0, 0, -1]
                const dc = [0, -1, 1, 0]
                const _routes = ['d', 'l', 'r', 'u']
                for(let d = 0;d < 4;d++){
                    const _nx = now['nx'] + dr[d]
                    const _ny = now['ny'] + dc[d]
                    if(_nx >= 0 && _ny >= 0 && _nx < n && _ny < m){
                        pq.push({
                            nx : _nx,
                            ny : _ny,
                            depth : now['depth'] + 1,
                            route : now['route'] + _routes[d]
                        })   
                    }
                }
                pq.sort((a, b) => {
                    if(a['depth'] !== b['depth']) return b['depth'] - a['depth']
                    return a['route'].localeCompare(b['route'])
                })
            }
        }
    }
}