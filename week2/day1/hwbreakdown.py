class Lab1:

    def __init__(self):
        self.n = int(input("Please enter a three digit whole number "))

    def sumNum(self):
        n = int(input("Please enter a three digit whole number "))
        n = self.n
        tot=0
        while(n>0):
            dig=n%10
            tot=tot+dig
            n=n//10
        print("The total sum of digits is:",tot)

    def reverseNums(self):
        Number = int(input("Please Enter any Number: "))    
        Number = self.n
        Reverse = 0    
        while(Number > 0):    
            Reminder = Number %10    
            Reverse = (Reverse *10) + Reminder    
            Number = Number //10 
        print("\n Reverse of entered number is = %d" %Reverse)

    def getlist(self):
        n = input("Please enter a number ")
        n = str(self.n)
        list1 = list(n)
        print(list1)

lab1 = Lab1()
lab1.sumNum()
lab1.reverseNums()
lab1.getlist()

