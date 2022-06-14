class TodoList:
    def __init__(self):
        self.todoListItems = []

    def viewTodos(self):
        print(self.todoListItems)
        counter = 1
        for todos in self.todoListItems:
            print(f"{counter} - {todos}")
            counter += 1

    def addTodos(self, todoItem):
        task = int(input("What item would you like to add: \n"))
        priority = input("What is the priority of this task? High, med, low?")
        completeTask = {"nameOfTask": task,
        "priority": priority}
        self.todoListItems.append(completeTask)
    
    def deleteTodos(self):
        itemToDel = int(input("What item would you like to delete? Enter the number of the item you wish to delete: \n"))
        self.viewTodos()
        while itemToDel.isnumeric() == False:
            print("Please enter in a number")
            itemToDel = int(input("What item would you like to delete? Enter the number of the item you wish to delete: \n"))
        del self.todoListItems[int(itemToDel) - 1]
        self.viewTodos()


shoppingList = TodoList()

shoppingList.addTodos('Mow the lawn')
shoppingList.addTodos('Feed the cat')
shoppingList.deleteTodos()
shoppingList.viewTodos()

while True:
    choice = ""
    if choice != "n":
        # addTodos()
        print("addTodos()")