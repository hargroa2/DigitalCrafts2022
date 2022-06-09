#Small 1. Print the sum of the elements in the list
nums = [1, 2, 3]
# ele = 0
# total = 0
# while ele < len(nums):
#     total += nums[ele]
#     ele += 1
# print("Sum: ", total)

# sums = sum(nums)
# print(sums)



#Small 2. Print the largest number on the list
largeNum = [10, 4, 44, 3]
# largeNum.sort()
# print("The largest element is: ", largeNum[-1])

#Small 3. Print the smallest number on the list
# smallNum = [10, 4, 44, 3]
# smallNum.sort()
# print("The smallest number is: ", smallNum[0])

#Small 4. List of even numbers
evenNum = [2, 3, 5, 6, 8]

# for item in evenNum:
#     if item % 2 == 0:
#         print(item, end=" ")

#Small 5. Positive numbers from list
posNum = [0, 2, 4, -2, 5]
# for nums in posNum:
#     if nums > 0:
#         print(nums, end=" ")

#Small 6. Positive numbers II
posNum2 = [-1, 1, 4, 6, -3, -5]
# for posNums in posNum2:
#     if posNums >= 0:
#         print(posNums, end=" ")

#Small 7. Multiply a list
multList = [4, 6, 4, 2]
# multList2 = [element * 2 for element in multList]
# print(multList2)

#Small 8. Reverse a String
# string = "Amanda" [::-1]
# print(string)



#=================
#Caeser Cipher
    
# alphabet = "abcdefghijklmnopqrstuvwxyz "
# letter_to_index = dict(zip(alphabet, range(len(alphabet))))
# index_to_letter = dict(zip(range(len(alphabet)), alphabet))


# def encrypt(message, shift=13):
#     cipher = ""

#     for letter in message:
#         number = (letter_to_index[letter] + shift) % len(letter_to_index)
#         letter = index_to_letter[number]
#         cipher += letter

#     return cipher


# def decrypt(cipher, shift=13):
#     decrypted = ""

#     for letter in cipher:
#         number = (letter_to_index[letter] - shift) % len(letter_to_index)
#         letter = index_to_letter[number]
#         decrypted += letter

#     return decrypted

# def main():
#     message = 'lbh zhfg hayrnea jung lbh unir yrnearq'
#     cipher = encrypt(message, shift=13)
#     decrypted = decrypt(cipher, shift=13)

#     print('Original message: ' + message)
#     print('Encrypted message: ' + cipher)
#     print('Decrypted message: ' + decrypted)

# main()










