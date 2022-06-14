class User:

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.address = []

    def addAddress(self, newAddress):
        self.address.append(newAddress)

class Address:

    def __init__(self, street, city, state, zipCode):
        self.street = street
        self.city = city
        self.state = state
        self.zipCode = zipCode


userName = User("Amanda", "Hargrove")
userName.addAddress(Address("333 Apple Drive", "Hill Rock", "CA", "38474"))
# print(userName.address[0].state)

#NEW EXAMPLE
# class User1:
#     def __init__(self, firstName, lastName, addr):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.addr = addr

# class Address1:
#     def __init__(self, street, city, zipCode, state):
#         self.street = street
#         self.city = city
#         self.zipCode = zipCode
#         self.state = state

# joe = User1("Joe", "Frasier", "123 main st")
# addr = Address1("124 main st", "tomball", "77777", "red state")

# joe.addr.append("123 main st")
# print(joe.addr[0].street)

# ===============================

class BankAccount:
    def __init__(self, accountNumber):
        self.accountNumber = accountNumber
        self.balance = 0
    
    def deposit(self, amount):
        self.balance += amount
    
    def withdraw(self, amount):
        self.balance -= amount
    
    def transferFunds(self, transferFrom, transferTo, amount):
        transferFrom.withdraw(amount)
        transferTo.deposit(amount)
    
    def __str__(self):
        return f"{self.accountNumber}\n{self.balance}"

checkAcct = BankAccount("Checking")
savingsAcct = BankAccount("Savings")

checkAcct.deposit(1000)
checkAcct.transferFunds(checkAcct, savingsAcct, 250)

print(checkAcct)
print(savingsAcct)

