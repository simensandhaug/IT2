def isPrime(num, array):
    for number in array:
        if num % number == 0:
            return false
        return true
        

def checkPrimes(n):

    array = [2]
    
    for i in range(3, n, 2):
        if isPrime(i, array):
            array.append(i)

    return array


print(checkPrimes(20))
 
