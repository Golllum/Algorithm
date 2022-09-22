function solution(numbers, hand) {
    // keyped -> graph 변환 (LinkedList)
    const graph = {
        '1': ['2', '4'],
        '2': ['1', '3', '5'],
        '3': ['2', '6'],
        '4': ['1', '5', '7'],
        '5': ['2', '4', '6', '8'],
        '6': ['3', '5', '9'],
        '7': ['4', '8', '*'],
        '8': ['5', '7', '9', '0'],
        '9': ['6', '8', '#'],
        '*': ['7', '0'],
        '0': ['8', '*', '#'],
        '#': ['9', '0']
    };
    
    // 손가락 현재 위치
    let lPos = "*";
    let rPos = "#";

    // deepcopy 이슈로 사용 안 함
    let arr = [lPos, rPos];

    // 주손 정보
    let myHand = hand === "right" ? "R" : "L";
    
    let result = numbers.map(e => {
        let word = 
        [1, 4, 7].includes(e) ? "L" :
        [3, 6, 9].includes(e) ? "R" :
        arrBFS(graph, [lPos, rPos], e);
        
        if(word === "hand"){
            word = myHand;
        }
        
        word === "R" ? rPos = e : lPos = e;
        
        return word;
    });
    
    return String(result).replaceAll(',', '');
}

function arrBFS(graph, curPos, target){
    // destructuring
    let [lPos, rPos] = curPos;
    
    let lCnt = BFS(graph, lPos, target);
    let rCnt = BFS(graph, rPos, target);
    
    return lCnt < rCnt ? "L" :
           lCnt > rCnt ? "R" : "hand";
}

function BFS(graph, curPos, target, flag){
    let visited = [];
    let queue = [];
    
    queue.push({cnt: 1, pos: curPos});
    visited.push(String(curPos));
    
    while(queue.length){
        let nowPos = queue.shift();
        if(String(nowPos.pos) === String(target)){
            return nowPos.cnt;
        }
        
        let arr = graph[nowPos.pos];
        arr.map(e => {
            if(!visited.includes(e)){
                queue.push({cnt: (nowPos.cnt + 1), pos: e});
                visited.push(e);
            }
        });
    }
}