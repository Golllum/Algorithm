import math

def solution(n):
    sqrtNum = int(math.sqrt(n))

    if sqrtNum ** 2 == n:
        return (sqrtNum+1) ** 2
    else:
        return -1

print(solution(121))