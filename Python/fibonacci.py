#Print første 25 tallene i fibonacci
cNum = 2
cNumM1 = 1
count = 0
def fibonacci(amount):
    print(int(1))
    global count
    while count < amount+1:
        global cNum
        global cNumM1
        print(cNum)
        newCNum = cNum + cNumM1
        newCNumM1 = newCNum - cNumM1
        cNum = newCNum
        cNumM1 = newCNumM1
        count += 1

fibonacci(5)
