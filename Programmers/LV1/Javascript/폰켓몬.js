function solution(nums) {
    // 중복 제거 -> set
    const arr = [...new Set(nums)];
    
    // 중복 제거 -> filter & indexOf
    const arr2 = nums.filter((e, i) => {
        // indexOf는 값에 대한 첫번째 index를 반환한다.
        return nums.indexOf(e) === i;
    });
    
    const getNum = nums.length/2;
    
    return getNum > (arr.length) ? arr.length : getNum;
}