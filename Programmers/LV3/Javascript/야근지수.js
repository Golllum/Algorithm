function solution(n, works) {
    var answer = 0;
    
    // 야근 피로도 : sum(남은 일의 작업량^2)
    let leftWork = [...works].sort((a, b) => a - b);
    let leftWorkLength = leftWork.length - 1;
    
    for(let i=0; i<n; i++){
        if(leftWork[leftWorkLength] === 0){
            break;
        }
        
        leftWork[leftWorkLength] -= 1
        
        // TODO : 추후 알맞은 정렬을 찾으면 적용 예정
        mySort(leftWork);
    }
    
    leftWork.forEach(e => {
        answer += Math.pow(e, 2);
    });
    
    return answer;
}

function mySort(arr){
    for(let i=arr.length-1; i>0; i--){
        if(arr[i] < arr[i-1]){
            let temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }else{
            return;
        }
    }
}