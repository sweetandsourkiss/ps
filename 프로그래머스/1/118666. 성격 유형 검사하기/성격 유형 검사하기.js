function solution(survey, choices) {
    var answer = '';
    const map = {
        'R' : 0,
        'T' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'A' : 0,
        'N' : 0,
    }
    
    for(let index = 0;index < survey.length;index++){
        const [negative, positive] = survey[index].trim().split("")
        const choice = choices[index]
        if(choice < 4){
            map[negative] += (4 - choice)
        }else if (choice > 4){
            map[positive] += (choice - 4)
        }
    }
    
    answer += map['R'] >= map['T'] ? 'R' : 'T'
    answer += map['C'] >= map['F'] ? 'C' : 'F'
    answer += map['J'] >= map['M'] ? 'J' : 'M'
    answer += map['A'] >= map['N'] ? 'A' : 'N'
    
    return answer;
}