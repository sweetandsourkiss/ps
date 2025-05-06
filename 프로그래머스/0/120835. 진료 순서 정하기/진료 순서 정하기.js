function solution(emergency) {
    const arr = Array.from(emergency)
    arr.sort((a, b)=> b - a)
    emergency = emergency.map(v => arr.indexOf(v) + 1)
    return emergency;
}