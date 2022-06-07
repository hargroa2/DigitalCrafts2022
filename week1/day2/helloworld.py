#Type python3 helloworld.py in terminal to run it

# Function
#1. Function name
#2. Function arguments (sometimes)
#3. Function body
print() #Comes from inside of the python language, is built-in functions

# Syntax in python for a function
# def
#functionName
# ():
# indentation
def sayHi():
    print("Hi") #anything indented in here is the function body

# Run the function:
sayHi()

# Variables
#The way you can store pieces of data and interact with it
# string "" - anything inside of quotation marks
string = "true"

# Boolean
# Is true or false
# is it truthy
True
#is it falsy
False

trueBoolean = True

# Integers
number = 1

# Float
floatNumber = 3.2

#  Lists/arrays
students = ["1", 2, True, 3.2]
#            0   1   2     3
students[2] # Access a list by using the index of the list
students[-2] #Prints True, second to last element. -1 is last element
students[0:3]

# Dictionary/Object
# variable = {"key": value, "key2": value2}
animals = {
    "cat": "Sam",
    "catAge": 2,
    "isItOld": False,
    "students": ["Carlos", "Olivia"]
}

#print the number using the key
animals["catAge"]
animals["students"][0] # Gives you the cat value

# randomData = {
#     "sorry" [{"name": "Joe"}],
#     "sorry2": [
#         {"name":
#         {"name":
#         {"name":
#         ["1"]}}}
#         ]
# }
# randomData["sorry"][0]["name"]
# randomData["sorry2"][0]["name"]["name"]["name"][0]

data = {
    "president": {
        "name": "Zaphod Beeblebrox",
        "species": "Betelgeusian",
        "location": ["South America"]
    }
}
data["president"]["name"]
print(data["president"]["location"][0])

