
# Write a ToDo class that allows you to add tasks, delete tasks, print the tasks out, and exit out of the program

class ToDoList:

    toDoList = ['cat - Medium', 'dog - Medium']
    def __init__(self):
        self.choice = ""
        while self.choice != 4:
            self.menu()
            choiceInput = int(input("what would you like to do? 1, 2, 3, 4: "))
            if choiceInput == 1:
                self.add()
            elif choiceInput == 2:
                self.delete()
            elif choiceInput == 3:
                self.printList()
            elif choiceInput == 4:
                print("Quitting program")
                break
            else:
                print("Unknown options selected")

    def add(self):
        self.add = input("What would you like to add?: ")
        self.priority = input("What is the priority? High, Medium, or Low: ")
        self.toDoList.append(self.add + ' - ' + self.priority)
        print(self.toDoList)
    
    def printList(self):
        for i in range(len(self.toDoList)):
            value = self.toDoList[i]
            print(f"Task: {value} - {i}")

    def delete(self):
        for i in range(len(self.toDoList)):
            value = self.toDoList[i]
            print(f"Task: {value} - {i}")
        
        self.delete = int(input("What would you like to delete? Choose an index: "))
        self.toDoList.remove(self.toDoList[self.delete])
        print(self.toDoList)
    
    def menu(self):
        print(
        """
        1 - Add an item
        2 - Delete an item
        3 - Print the to-do list
        4 - Quit the app
        """
        )

ToDoList()

























