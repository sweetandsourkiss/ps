function solution(arr, query) {
    for(const [index, standard] of query.entries()){
        if(index % 2 === 0){
            arr = arr.slice(0, standard + 1)    
        }else {
            arr = arr.slice(standard)
        }
        // console.log(arr)
    }
    return arr
}