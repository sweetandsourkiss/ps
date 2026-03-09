function solution(k, n, reqs) {
  // 조합 + 큐(상담 유형 별)
  let answer = Infinity;

  const startConsult = (numberOfType) => {
    console.log(numberOfType)

    let candidate = 0; // 예비 정답

    const queue = {}; // 타입별 상담 종료 시간을 넣는 곳(내림차순 저장)
    for (let t = 1; t <= k; t++) {
      queue[t] = [];
    }

    for (const req of reqs) {
      if (candidate >= answer) break; // 현재 정답보다 크다면 그만해도 됨.

      const [startTime, consultTime, type] = req;

      // startTime 이전 상담 큐별로 정리시간!
      for (let t = 1; t <= k; t++) {
        let flag = false;
        while (!flag) {
          const size = queue[t].length;
          if (size > 0 && queue[t][size - 1] <= startTime) {
            // 마지막 요소가 startTime보다 작거나 같다면 제거!
            queue[t].pop();
          } else {
            flag = true;
          }
        }
      }

      // 해당 상담 처리하기
      const size = queue[type].length;

      let additionalTime = 0;
      if (size == numberOfType[type - 1]) {
        // 조금 기다려야 하는가?
        additionalTime = queue[type][size - 1] - startTime;
        queue[type].pop();
      }

      queue[type].push(startTime + consultTime + additionalTime); // 상담 진행
      queue[type].sort((a, b) => b - a); // 상담 들어간 배열 sort 진행

      candidate += additionalTime;
    }
    // console.log(candidate)

    answer = Math.min(answer, candidate); // 정답 비교 후 초기화
  };

  const combination = (numberOfType, remainMentor, startIndex) => {
    if (answer == 0) return;

    if (remainMentor == 0) {
      startConsult(numberOfType);
    } else {
      for (let i = startIndex; i < k; i++) {
        numberOfType[i]++;
        combination(numberOfType, remainMentor - 1, i);
        numberOfType[i]--;
      }
    }
  };

  combination(Array(k).fill(1), n - k, 0);

  return answer;
}
