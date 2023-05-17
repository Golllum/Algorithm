def solution(n):
    return list(map(int, reversed(str(n))))
    #return list(map(int, list(str(n)[::-1])))

    #a = list(map(int, str(n)))
    #a.reverse()
    #return a

print(solution(12345))