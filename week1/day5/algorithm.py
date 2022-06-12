#Write a function that takes in a string of lowercase letters and returns the index of the string's first non-repeating character. If the input string does not have any non-repeating characters, your function should return -1.

#optimal solution: O(n)
# def lowerCase(string):
#     m = 0
#     #takes in a string of lowercase characters
#     #returns the index of the string's first non-repeating character and occurs only once
#     for i in range(m, len(string)):
#         if m == i:
#             m + 1
#         if m != i:
#             print("The first non-repeating character is ",string[i], "at index ", [i])

# print(lowerCase("abcdcaf"))

# def first_non_repeating_character(str1):
#   char_order = [] 
#   ctr = {}
#   for c in str1: #for every char in the string
#     if c in ctr: #if char is in the counter
#       ctr[c] += 1 #the char in counter goes up by 1
#     else:
#       ctr[c] = 1  #otherwise, character is 1
#       char_order.append(c) # add the character into the order list
#   for c in char_order: #for each character in the order list
#     if ctr[c] == 1: #if char in counter is 1
#       return c #return the character
#       return "The first non-repeating character is " + c + "and is at index " +
#   return None #if doesn't match anything, return none

# print('The first non-repeating character is ',first_non_repeating_character('abcdcaf'))
# print(first_non_repeating_character('abcabcdef'))
# print(first_non_repeating_character('aabbcc'))
# string1 = 'bbabc'

# def repeating(string):
#     counter = {}
#     for char in string:
#         counter[char] = counter.get(char, 0) + 1
#     for char in counter:
#         if counter[char] == 1:
#             index = list(string).index(char)
#             print(index)
#             return print(char + ' is the first nonrepeating character'
#     return print('-1'))

# repeating(string1)

# def firstNonRepeating(string):
#     hash = {}
#     for letter in string:
#         if letter not in hash:
#             hash[letter] = 0
#         hash[letter] += 1

#     for letter in string:
#         if hash[letter] == 1:
#             return f"{letter}, {string.index(letter)}"
#     return -1

# print(firstNonRepeating("abcdef")) # returns a, 0
# ======================================
#Tandem Bicycle
# redShirtSpeeds = [5, 5, 3 ,9, 2]
# blueShirtSpeeds = [3, 6, 7, 2, 1]
# fastest = False

# def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
#     redShirtSpeeds.sort() #sort red list in ascending order
#     blueShirtSpeeds.sort() #sort blue list in ascending order
#     speedsCombined = [] #empty list 
#     if fastest == True: #if you want the fasted
#         blueShirtSpeeds.reverse() #reverse the blue list
#     for i in range(len(redShirtSpeeds)): # for each number in red list
#         if redShirtSpeeds[i] > blueShirtSpeeds[i]: #if the red speed is greater than blue speed
#             speedsCombined.append(redShirtSpeeds[i]) # add the red speeds to the list
#         # if redShirtSpeeds[i] == blueShirtSpeeds[i]:
#         #     speedsCombined.append(redShirtSpeeds[i])
#         if blueShirtSpeeds[i] > redShirtSpeeds[i]: # if blue speed is greater than red speed
#             speedsCombined.append(blueShirtSpeeds[i]) # add the blue speeds to the list
#     return sum(speedsCombined) # return the sum of what is in the list

# print(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)) # print it out

# pair based on fastest criteria, order ascending and one descending, run it through both lists and append highest one to a new list and print out the list Didnt have an append statement if they were equal

def tandem(list1,list2,fastest):
    list1 = [1,2,3,4]
    list2 = [2,3,7,8]
        # [8,7,3,2]
    speed = []
    if fastest:
        list2.reverse()
    for i in range(len(list1)):
        # val = list1[i]
        # val2 = list2[i]
        if list1[i] > list2[i]:
            speed.append(list1[i])
        if list1[i] == list2[i]:
            speed.append(list1[i])
        if list1[i] < list2[i]:
            speed.append(list2[i])
    return sum(speed)

    tandem([1, 2, 3, 4], [2, 3, 7, 8], fastest)