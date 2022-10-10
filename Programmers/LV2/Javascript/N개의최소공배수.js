function solution(arr) {
    // 두 수의 최소공배수 값과 다음 인덱스값과 다시 최소공배수를 구하는 방식
    return arr.sort((a, b) => a-b).reduce((acc, cur) => {
        // 최소공배수 = 두 수의 곱 / 최대공약수
        return (acc*cur) / gcd(acc,cur);
    }, 1);
}

function gcd(a, b){
    let r;
    
    // 유클리드 호제법
    while(a !== 0){
        r = b % a;
        b = a;
        a = r;
    }
    
    return b;
}