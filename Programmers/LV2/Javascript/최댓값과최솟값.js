function solution(s) {
    // Math.max() 는 Object를 매개변수로 받을 수 없다.
    let arr = s.split(' ');
    return Math.min(...arr) + " " + Math.max(...arr);
}