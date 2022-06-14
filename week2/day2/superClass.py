# Inheritance
class Employee:
    def __init__(self, name, department, role):
        self.name = name
        self.department = department
        self.role = role
    def talkAboutWork(self):
        print("Man, mondays am I right?")

class SuperEmployee(Employee):
    def __init__(self, name, department, role):
        super().__init__(name, department, role)
        
    def leadAStandup(self):
        print("Hey guys, let's start our standup")
    def accessClientData(self):
        print("Print out all client data from report")
    
rahmin = Employee("rahmin", "Engineering Group", "staff")
rayleigh = Employee("rayleigh", "Engineering Group", "staff")
carlos = Employee("carlos", "Engineering Group", "staff")
amanda = Employee("amanda", "Engineering Group", "staff")

stacy = SuperEmployee("stacy", "Enginerring Group", "staff III")
stacy.talkAboutWork()
carlos.talkAboutWork()
# carlos.leadAStandup() # Not allowed, not a super employee
stacy.leadAStandup()
print(stacy.securityLevel)