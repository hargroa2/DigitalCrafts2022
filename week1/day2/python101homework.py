#Coin Flip: Write a function that will "flip a coin" and print the result. There should be a 50/50 chance of getting heads or tails.
def flipCoin():
    print("You flipped a coin!")
    import random
    coin = random.randint(1,2)
    if coin == 1:
        print("It's heads!")
    elif coin == 2:
        print("It's tails!")

flipCoin()

#=============================
#Even Odd: Write a function that when given a number as an input will return true if the number is odd and false if the number is even.Write a script that asks the user for a number. Pass the number to the function and then print a message to the console that informs the user if the number was even or odd
def evenOdd():
    numberInput = int(input("Enter a number: "))
    if numberInput % 2 == 0:
        print("It's even")
    elif numberInput % 2 == 1:
        print("It's odd")
evenOdd()

#=============================
#Dice Roller: Write a function that takes two numbers as arguments, then returns a random whole number between those two numbers. Write a script that tells the user that we are going to roll the dice but we need to know how many sides they have. Ask them for a number between 2 and 20. Pass the number 1 and the number from the user to the function, then print a message that shows the result
#Function for whole number
def randNum(num1, num2):
    import random
    num = random.randint(num1, num2)
    print(num)
randNum(1,10)

#Script to roll dice
print("Let's roll a dice!")
sides = int(input("How many sides should it have (2 - 20)? "))
print("It's rolling...")
import random
roll = random.randint(1, sides)
print(f"It's a {roll}!")

