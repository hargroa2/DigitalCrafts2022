# The bare bones of a class. Pretty useless
class User:
    # name
    # height
    # siblings
    # weight
    # greeting
    def __init__(self, name, height, weight): #This gets called by itself. The __init__ is a unique method/func and self will refer to the current instance of the class so you can access variables in it
        self.name = name # we're assigning it to the instance of the class
        self.height = height
        self.weight = weight
        self.siblings = 'Joe'
        self.greeting = 'Hey guys'

rahmin = User('Rahmin', '5.8ft', '67lbs')
olivia = User('Olivia', '5.3ft', '120lbs')
print(rahmin.name)
# print(olivia.height)
# print(olivia.weight)

#Now we need to define a class with a constructor and then add specific things to it that help us with our program
#The constructor is the blueprint of this class only. It defines the characteristics of a class. A blueprint is completely different for a skyscraper and another one is different for an airplane

class Room:
    # dimensions
    # windows
    # door
    # flooring
    # name/type of room
    # contents
    def __init__(self, dimensions, windows, doors, flooring, name, contents):
        self.dimensions = dimensions
        self.windows = windows
        self.doors = doors
        self.flooring = flooring
        self.name = name
        self.contents = contents
    
    def nameOfRoom(self):
        print(self.name)
    def lowerCaseRoomName(self):
        self.name = self.name.lower()

room1 = Room("12x12x15",2,2,"tile", "The Streaming Room",["Mic", "Mouse", "PC"])
print(room1.name)

if room1.name == "The Streaming Room":
    print("Yup, this is where we stream")

for content in room1.contents:
    print(content)


blakesRoom = Room("5x6x5",1,1, "stone", "Prison cell", ["Empty pot", "Pile of hay", "Chains", "Rat"]) 
#unique instance of the Room class
print(blakesRoom.name)
room1.nameOfRoom()
room1.lowerCaseRoomName()
room1.nameOfRoom()

# =====================================
# listOfTasks = []

# def greeting():
#     print("Howdy")

# def addItem():
#     itemToAdd = input("What todo would you like to add: ")
#     newTask = Item(itemToAdd)
#     listOfTasks.append(newTask)
#     for stuff in listOfTasks:
#         print(stuff)

# class Item:
#     def __init__(self, name):
#         self.name = name
    
#     def addTask(self, taskToAdd):
#         self.task.append(taskToAdd)

#     def printTasks(self):
#         for task in self.task:
#             print(task)

# choice = ""
# while choice != "n":
#     greeting()
#     addItem()
#     choice = input("Keep going? y/n: ")

# ==============
# class Employee:
#     def __init__(self, first, last, pay, hours):
#         self.first = first
#         self.last = last
#         self.pay = pay
#         self.hours = hours

#     ...

# your_employee = Employee(input("First name: "), input("Last name: "),
#     int(input("Pay: ")), int(input("Hours: ")))