function solution(date1, date2) {
    const date_one = new Date(date1[0], date1[1] - 1, date1[2])
    const date_two = new Date(date2[0], date2[1] - 1, date2[2])
    return (date_one < date_two) ? 1 : 0
}