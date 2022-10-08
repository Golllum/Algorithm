function solution(n) {
    let numOfOne = [...n.toString(2)].filter(e => e == 1).length;
    
    for(let i=n+1; ; i++){
        if(numOfOne === [...i.toString(2)].filter(e => e == 1).length)
            return i;
    }
}