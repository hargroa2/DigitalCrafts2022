
toDoList = []

def add():
    addInput = input("What would you like to add?: ")
    priority = input("What is the priority? High, Medium, or Low: ")
    toDoList.append(addInput + ' - ' + priority)
    print(toDoList)

def delete():
    for index in range(len(toDoList)):
        value = toDoList[index]
        print(f"Task: {value} - {index}") # Try to add priority (high medium low) next to printout of value and index

    delInput = int(input("What would you like to delete? Choose an index: "))
    toDoList.remove(toDoList[delInput])
    print(toDoList)


def printList():
    for index in range(len(toDoList)):
        value = toDoList[index]
        print(f"Task: {value} - {index}")

def menu():
    print(
        """
        1 - Add an item
        2 - Delete an item
        3 - Print the to-do list
        4 - Quit the app
        """
    )

def main():
    choice = ""
    while choice != 4:
        menu()
        choiceInput = int(input("what would you like to do? 1, 2, 3, 4: "))
        if choiceInput == 1:
            add()
        elif choiceInput == 2:
            delete()
        elif choiceInput == 3:
            printList()
        elif choiceInput == 4:
            print("Quitting program")
            break
        else:
            print("Unknown options selected")
main()