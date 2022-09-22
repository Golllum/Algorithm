function solution(s) {

    // 공백 기준으로 대문자 변경
    let arr = Array.from(s, (e, i) => {
        return i === 0 || s.charAt(i-1) === ' '  ? e.toUpperCase() : e.toLowerCase();
    }).join('');

    // 단어별로 잘라서 각 단어별 첫문자 대문자로 변경
    let arr2 = s.split(" ").map(e => {
        return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase();
    }).join(" ");
    
    return arr;
}