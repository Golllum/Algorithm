function solution(n, left, right) {
    let answer = [];
    
    for(let i=left; i<=right; i++){
        let quotient = Math.floor(i/n);
        let remainder = i%n;
        
        quotient >= remainder ? answer.push(quotient+1) : answer.push(quotient+1+(remainder - quotient));
    }
    
    return answer;
}