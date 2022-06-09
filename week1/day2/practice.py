age = 20;
price = 19.95;
firstName = "Amanda";
isOnline = False;
print(age);

# name = input("What is your name? ");
# print("Hello " + name);
#This is a comment

# birthYear = input("Enter your birth year: ");

# age = 2022 - int(birthYear);
# print(age);

#functions for converting types of variables
int();
float();
bool();
str();

# firstNum = input("First: ");
# secondNum = input("Second: ");
# sum = float(firstNum) + float(secondNum);
# print("Sum: " + str(sum));

course = "Python for Beginners";
print(course.upper()); #capitalizes
course.find('y') #returns index of first character y
course.replace('for', '4'); #replaces for with x in string
print('python' in course) #Checking to see if python is in course, returns true

x = 10;
x += 3;
x // 4; #floor division
x ** 3; #exponent

3 == 2 and price > 30; #no strict === in python
price > 10 or price < 15;
not price > 10;

#if statements
temperature = 35;
if temperature > 30: 
    print("It's a hot day");
    print("Drink water");
#To get out of indention, you enter to this line, then click shift + tab. It wont be in the if statement if it's not indented
elif temperature > 20:
    print("It's a nice day");
else:
    print();

#while loops
i = 1
while i < 6:
    print(i);
    i += 1;
    break

#lists
names = ["John", "Bob", "Mary"];
names[0] = "Jon";
names[-1]; #last element in the list
names[-2]; #second from last element
names[0:3]; #Return all elements from start to end index (0,1,2)

#list methods
numbers = [1, 2, 3, 4, 5];
numbers.append(6); #adds 6 to the end of the list
numbers.insert(0, -1); #lets you insert a number somewhere in the middle or at beginning
numbers.remove(3);
# numbers.clear();
print(1 in numbers) #checking to see if 1 is in numbers list
len(numbers) #returns number of elements in a list, "length"

#for loop
numbers = [1, 2, 3, 4, 5];
for item in numbers:
    print(item);


#range() function
numbers = range(5, 10, 2); #start, end, step (2 = skip over one)
for number in numbers:
    print(number); #sequence that shows range from 5 to 9

#tuples
numberHere = (1, 2, 3, 3); #is immutable and cannot be changed
numberHere.count(3); #will return 2 since 3 appears twice

#functions
def sayHi():
    print("Hi")

sayHi()

#dictionaries/objects
variable = {
    "key": 2,
    "cat": "animal",

}










