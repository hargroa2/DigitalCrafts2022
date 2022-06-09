# List and stuff

array = ["dog"]
list = []
Access things inside of a list using an index

A list has the mindset of always being next to one another as memory in your computer. It has to find a place where it can all fit together and have a memory address containing it. It's an interesting data structure that has its pros and cons, but takes time to find where to store them and how to access things inside of them.

array[0]
Reading an index: this is O(1) -> O of 1
Insert -> O(n)
Read all -> O(n)

Big O Notation/Space and time complexity = how much time will this take worst case and how much space will this take in complexity?

O(1) -> Means that it's in constant time (it's instant and happens instantly). Things that the computer is good at
Creating a list -> O(n) -> Whatever the size of your array is is n. Have to find a place to put n number of things.
O(n^2) -> is two times the size of your list, meaning that it's massive.
2 nested for-loops are considered O(n^2)
O(log(n))
O(nlog(n))

...
factorial is awful: O(n!) and exponential O(2^n)

creating a list takes o(n) time complexity
reading a list at an index that we know array[i], takes constant time o(1)
updating a list at an index takes constant o(1) because we know where the index is.
updating a list takes o(n)
reading a list tales o(n)
deleting a list at an index takes o(1)
