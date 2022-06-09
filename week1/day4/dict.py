# variable = {
#     "num": [1, 2, 3, 4, 5],
#     "name": "Amanda",
#     "boolean": False,
#     "weldingEquipment": ["torch"]
# }
# print(variable["nums"]) # have to use brackets to call the key in a dictionary
# variable["weldingQuipment"][0] #accesses torch
# # will give you the value of something by refrencing its key
# for num in variable["nums"]:
#     print(num)

computer = {
    "monitor": "benq",
    "keyboard": "Logitech",
    "fans": [
        {"gpu": "3"},
        {"processor": "1"}
    ]
}

computer["fans"][1]["processor"] #prints 1

computer["keyboard"] = "Razer" # updates the key

computer["powersupply"] = "500w" # adds it to dictionary
#if you have a second copy of this, then it won't add a duplicate it will just stay the same
