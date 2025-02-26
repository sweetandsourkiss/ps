function solution(fees, records) {
    const parking_record = {};
    const last_time = 23 * 60 + 59
    records.forEach(record=>{
        const [time, car, status] = record.trim().split(" ")
        const [hours, minutes] = time.split(":").map(Number)
        // console.log(hours, minutes)
        const sum = hours * 60 + minutes
        // console.log(sum)
        if(!parking_record[car]){
            parking_record[car] = {}
        }
        
        if(status === 'IN'){
            parking_record[car]['start'] = sum
        }else{
            parking_record[car]['sum'] = (parking_record[car]['sum'] ?? 0) + sum - parking_record[car]['start']
            parking_record[car]['start'] = null
        }
    })
    
    const answer = []
    const [basic_time, basic_fee, unit_time, unit_fee] = fees
    // console.log(basic_time, basic_fee, unit_time, unit_fee)
    Object.entries(parking_record).sort((a, b)=>{
        return a[0] - b[0]
    }).map(([car, infos])=>{
        // console.log(car, infos['start'])
        const parking_time = (infos['sum'] ?? 0) + (infos['start'] === null ? 0 : last_time - infos['start'])
        // console.log(parking_time)
        if(parking_time <= basic_time){
            answer.push(basic_fee)
        }else {
            answer.push(basic_fee + Math.ceil((parking_time - basic_time) / unit_time) * unit_fee )
        }
    })
    
    return answer;
}