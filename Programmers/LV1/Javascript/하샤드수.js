function solution(x) {
    let answer = true;
    let deno = 0;
    
    // 첫번째 솔루션 (split & map)
    // split 함수를 이용하여 문자열을 배열 객체로 변환 하고 map 함수를 이용하여 각 자리수를 더함
    String(x).split('').map((e) => {
        deno += Number(e);
    });
    
    // 두번째 솔루션 (Array.from)
    // Array.from 함수를 이용하여 문자열을 배열로 변환하고 콜백 함수를 이용하여 각 배열 인자를 더함.
    Array.from(x.toString(), e => deno += Number(e));
    
    return Number(x) % deno === 0;
}