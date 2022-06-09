# listOfStudents = ["Amanda", "Andrea", "Blake", "Carlos", "Jason", "Olivia", "Rahmin", "Stacy", "West"]

# newList = []

# listOfStudents.append("Bob") #adds to the end of the list, like push in JS

# newList.append(listOfStudents)
# newList.extend(newList)
# print(newList)

# for student in listOfStudents:
#     newList.append(student)
# print(newList)

# Square the numbers in this list
numbers = [1, 2, 3, 4, 5, 6, 7]
# Output [1, 4, 9, 16, 25, 36, 49]
# def squares(numbers):
#     newList = []
#     for num in numbers:
#         squared = num*num
#         newList.append(squared)
#     return newList
# print(squares(numbers))

# Remove all empty strings in this list
list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
# output ["Mike", "Emma", "Kelly", "Brad"]
# for names in list1:
#     if len(names) < 1:
#         list1.remove(names)
# print(list1)


# Add new item to list after a specified item
list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
# output [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]
# list2[2][2].append(7000)
# print(list2)

# Replace list's item with new value if found
list3 = [5, 10, 15, 20, 25, 50, 20]
# output [5, 10, 15, 200, 25, 50, 20]
# list3[3] = 200
# print(list3)

# for i in range(len(list3)):
#     if list3[i] == 20:
#         i == 200

# list3 = [5, 10, 15, 20, 25, 50, 20]
# # output [5, 10, 15, 200, 25, 50, 20]

# for item in list3:
#     if item == 20:
#         list3[list3.index(item)]= 200
#         break

# print(list3)


# Remove all occurrences of a specific item from a list.
list4 = [5, 20, 15, 20, 25, 50, 20]
# output [5, 15, 25, 50]

#Clever way to do it vvvv
# def remove(list, val):
#     return [i for i in list if i!= val]
# # List comprehension 

# for i in list4:
#     if i == 20:
#         list4.remove(i)
# print(list4)
# res = remove(list4, 20)
# print(res)

#===========
name = "Amanda Hargrove"
for letter in name:
    print(letter)

dictionary = {"key": "value"}
for thing in dictionary:
    print(dictionary[thing])


