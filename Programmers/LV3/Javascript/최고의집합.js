function solution(n, s) {
    if(n > s){
        return [-1];
    }
    
    let answer = [];
    let quotient = Math.floor(s/n);
    let remainder = s%n;
    
    // 풀이 : 각 원소들의 차이가 적을수록 곱한 값이 크다.
    for(let i=0; i<n; i++){
        remainder > 0 ? answer.push(quotient + 1) : answer.push(quotient);
        remainder--;
    }
    
    return answer.sort();
}