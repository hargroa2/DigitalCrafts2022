# Functions and Why We Use Them

- Functions are things we create to do steps that we often repeat
- If you find yourself writing the same code over and over, it's probably a good idea to make it a function
- Functions allow us to do multiple steps over and over but writing the code once

- Your scope are your boundaries
- Lexical scope is within the body of a function
- Global scope can be accessed in functions since it is on the top level

def factorial(n):
if n == 0:
return 1
return n \* factorial(n-1)

- This is recursion. The function is calling itself over and over. You use it to iterate something but can't do it with a loop, like it's not a loopable thing.
