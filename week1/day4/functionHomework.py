#1. Write an app which asks users for the input and then prints the factorial for that number.

def factorialFunc():
    num = int(input("Enter a number: "))
    factorial = 1
    if num < 0:
        print("Factorial does not exist for negative numbers")
    elif num == 0:
        print("The factorial of 0 is 1")
    else:
        for i in range(1, num + 1):
            factorial *= i
        print("The factorial of ", num, " is ", factorial)

factorialFunc()

#==================
#2. Create an app which detects if the input word is a palindrome or not. Palindromes are strings which read from left to right are the same as right to left. mom, dad, madam, etc. NOT backwards

def palindrome():
    palInput = input("Enter your word here: ")
    reversedPal = palInput[::-1]
    if palInput == reversedPal:
        print(palInput, "is a palindrome")
    else:
        print(palInput, "is not a palindrome")

palindrome()

#3. Take input from the user and find out if that number is prime or not.

def primeOrNot():
    num = int(input("Enter a number: "))
    if num > 1:
   # check for factors
        for i in range(2,num):
            if (num % i) == 0:
                print(num,"is not a prime number")
                break
        else:
            print(num,"is a prime number")
       
# if input number is less than
# or equal to 1, it is not prime
    else:
        print(num,"is not a prime number")
primeOrNot()