function solution(id_list, report, k) {
    const mail_list = new Map();
    const report_list = new Map()
    id_list.forEach(nickname=>{
        mail_list.set(nickname, 0)
        report_list.set(nickname, new Set())
    })
    report.forEach(value=>{
        const [reporter, target] = value.trim().split(" ")
        report_list.get(target).add(reporter)
    })

    id_list.forEach(nickname=>{
        if(report_list.get(nickname).size >= k){
            report_list.get(nickname).forEach(reporter => {
                mail_list.set(reporter, mail_list.get(reporter) + 1)
            })
        }
    })
    
    return Array.from(mail_list.values());
}