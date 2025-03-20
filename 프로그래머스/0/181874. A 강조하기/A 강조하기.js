function solution(myString) {
    return myString.split("").map(v => {
        if(v === 'a') return 'A'
        else if(v.charCodeAt(0) > 65 && v.charCodeAt(0) <= 90) return v.toLowerCase()
        return v
    }).join("")
}