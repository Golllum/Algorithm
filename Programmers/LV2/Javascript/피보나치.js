function solution(n) {
    let fibonaci = [0, 1];
    
    for(let i=2; i<=n; i++){
        fibonaci.push(fibonaci[i-2] + fibonaci[i-1]);
    }
    
    return fibonaci[n] % 1234567;
}

function fibonaci(n){ // 재귀함수는 시간초과
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;
        
    return fibonaci(n-2)%1234567 + fibonaci(n-1)%1234567;
}