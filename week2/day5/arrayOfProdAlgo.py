def arrayOfProducts(array):
    # for thing in range(len(array)):
    #     array.append(1)
    products = [1 for _ in range(len(array))] # Whatever length I have creates an array like [1,1,1,1]
    for i in range(len(array)):
        runningProduct = 1
        for j in range(len(array)): #will run 4 times for every 1 item
            # print(array[j])
            # print(array[i])
            if i != j:
                runningProduct *= array[j]
        products[i] = runningProduct
    return products
    pass

            
arrayOfProducts([5,1,4,2])

    # l=[1,2,3,4,5]  
    # a=[0]*len(l)  
    #  for i in range(len(l)):  
    #     p=1  
    #     for j in range(len(l)):
    #         if(i==j):
    #             continue
    #         else:
    #             p*=l[j]  
    #         a[i]=p  
    #  print(a) 

    #sorting it
    #starting from end, front, middle, moving forward to the middle