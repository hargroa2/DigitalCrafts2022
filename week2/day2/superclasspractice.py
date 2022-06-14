# parents: you take on possibly last name but you get your own first name. parent can speak, laugh, walk
#make a child inherit from the parent. can do what parent does but can play video games
# sibling: can inherit from the child and parent, but can do something else that they cant

class Parent:
    def __init__(self, name, eat, sleep):
        self.name = name
        self.eat = eat
        self.sleep = sleep
    
class Child(Parent):
    def __init__(self, name, eat, sleep, videoGames):
        super().__init__(name, eat, sleep)
        self.videoGames = videoGames

class Sibling(Parent):
    def __init__(self, name, eat, sleep, talkOnPhone):
        super().__init__(name, eat, sleep)
        self.talkOnPhone = talkOnPhone

mom = Parent("Lisa", "Salad", "Yes I sleep")
me = Child("Amanda", "Pizza", "Yes I sleep but not much", "Witcher III")
emily = Sibling("Emily", "Tacos", "I barely sleep, I'm a nurse", "Calling dad")
print(me.videoGames)
print(emily.talkOnPhone)