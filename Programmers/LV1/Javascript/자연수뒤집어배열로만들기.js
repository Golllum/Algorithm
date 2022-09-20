function solution(n) {
    // Array.from -> [...n.toString()] 호환 가능
    let answer = Array.from(n.toString());
    let reverse = [...answer].reverse().map(Number);
    
    return reverse;
}