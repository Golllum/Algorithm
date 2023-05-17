def fib():
    prev, curr = 0, 1
    while True:
        yield curr
        prev, curr = curr, prev + curr

def fibo(n):
    count = 0

    for item in fib():
        if count >= n:
            break

        print(item, end=" ")
        count += 1

fibo(10)