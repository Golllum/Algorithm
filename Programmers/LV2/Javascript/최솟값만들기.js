function solution(A,B){
    let sortedA = [...A].sort((a, b) => a - b);
    let sortedB = [...B].sort((a, b) => b - a);

    return sortedA.reduce((acc, e, i) => acc + sortedA[i] * sortedB[i], 0);
}