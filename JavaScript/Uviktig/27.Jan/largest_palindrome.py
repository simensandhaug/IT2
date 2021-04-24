palindromes = []

def isPalindrome(i):
    return str(i) == str(i)[::-1]

for i in range(999):
    for j in range(999):
        if(isPalindrome(i*j)):
            palindromes.append(i*j)
palindromes.sort()
print(palindromes[-1])