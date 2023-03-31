#Square of list of num

#fun for square_list
def square_list(numbers):
    squared_list = []
    for number in numbers:#iterate
        squared_list.append(number ** 2)
    return squared_list
#input from user
numbers = input("Enter a list of numbers, separated by spaces: ")
numbers = [int(x) for x in numbers.split()]

squared_list = square_list(numbers)
print("The squared list of numbers is: ", squared_list) #res
