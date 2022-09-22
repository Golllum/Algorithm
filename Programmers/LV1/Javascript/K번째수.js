function solution(array, commands) {
    // map(element, index, array) : array -> [from, to, target] destructuring
    return commands.map(([from, to, target]) => {

        // Array.prototype.sort 함수는 문자열 타입으로 비교함
        // '90' > '100' 으로 인식됨 (9>1)
        // return next - prev 라는 정수형으로 비교 함수를 새로 만든다.
        return array.slice(--from, to)
                    .sort((next, prev) => next - prev)[--target];
    });
}