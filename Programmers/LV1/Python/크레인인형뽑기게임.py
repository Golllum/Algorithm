def solution(board, moves):
    myboard = [[] for x in range(len(board))]
    mybasket = []
    boomNum = 0

    ## 인형만 남겨버리기
    for x in board:
        for idx in range(len(x)):
            if x[idx] == 0:
                continue

            myboard[idx].append(x[idx])

    ## 인형 뽑기 시작
    for idx in moves:
        if len(myboard[idx-1]) == 0:
            continue

        doll = myboard[idx-1].pop(0)
        
        if len(mybasket) == 0:
            mybasket.append(doll)
        else:
            ## 방금 뽑은 인형과 바구니의 맨 위 인형을 비교
            if doll == mybasket[-1]:
                mybasket.pop()
                boomNum += 2
            else:
                mybasket.append(doll)

    return boomNum

input_board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
input_moves = [1,5,3,5,1,2,1,4]

print(solution(input_board, input_moves))