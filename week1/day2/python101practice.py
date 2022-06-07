#Small 1.
# name = input("What is your name? ")
# print("Hello, " + name + "!")

#Small 2.
# name2 = input("WHAT IS YOUR NAME? ")
# nameLength = len(name2)
# print("HELLO, " + name2.upper() + "!")
# print("YOUR NAME HAS " + str(nameLength) + " CHARACTERS!")

#Small 3.
# print("Please fill in the blanks below: ")
# print("___(name)___'s favorite subject is ___(subject)___.")
# theName = input("What is the name? ")
# theSubject = input("What is your favorite subject? ")
# print(theName + "'s favorite animal is a " + theSubject)

#Small 4.
# day = int(input("Day (0-6)?"))
# match day:
#     case "0":
#         print("Sunday")
#     case "1":
#         print("Monday")
#     case "2":
#         print("Tuesday")
#     case "3":
#         print("Wednesday")
#     case "4":
#         print("Thursday")
#     case "5":
#         print("Friday")
#     case "6":
#         print("Saturday")

# print(day)

#Small 9.
# for i in range(5):
#     print("*****")

#Small 10.
# squareSize = int(input("How big"))
# for i in range(squareSize): #Run as many times as square size is
#     print("*" * squareSize)

# Medium 1.
# bill = float(input("What was your bill? "))
# tip = float(input("What tip would you like to give? Put it in a percentage. "))

# def tipCalc():
#     calcTip = bill * (tip*0.01)
#     calcBill = bill + calcTip
#     print("Your total bill is " + str(calcBill))

# tipCalc()

# Large 3. Guessing number game
# give me a number starting from 1 and 10 and figure out a way to store a random number and compare the answer to what the input is

# while True:
#     print("I am thinking of a number between 1 and 10.")
#     import random
#     randomNumber = random.randint(1,10)
#     guess = int(input("Enter a number from 1 to 10: "))
#     if guess < randomNumber:
#         print("Guess is too low")
#         guess = int(input("Enter a number from 1 to 10: "))
#     elif guess > randomNumber:
#         print("Guess is too high")
#         guess = int(input("Enter a number from 1 to 10: "))
#     if guess == randomNumber: 
#         print("Yes! You win!")
#         playAgain = input("Do you want to play again (Y or N)? ")
#         if playAgain == "Y":
#             continue
#         if playAgain == "N":
#             print("Bye!")
#             break




