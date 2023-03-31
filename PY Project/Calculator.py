#Calculator
#fun for sum
def sum(a, b):
    return a + b
#fun for diff
def diff(a, b):
    return a - b
#fun for mul
def mul(a, b):
    return a * b
#fun for div
def div(a, b):
    return a / b
#fun for mod
def mod(a,b):
    return a % b


while True:
    # get the user's input
    print("--------------------------------------------------")
    operation = input("Enter any operation (+,-,*,/,%), or e to exit: ")

    # check if the user wants to quit
    if operation == 'e':
        print("Byeee")
        print("-------------------------------------------")
        break

    # get the numbers to perform the operation on
    num1 = float(input("Please enter the first number: "))
    num2 = float(input("Please enter the second number: "))
    print("------------------------------------------------")

    # perform the operation
    if operation == '+':
        result = sum(num1, num2)
    elif operation == '-':
        result = diff(num1, num2)
    elif operation == '*':
        result = mul(num1, num2)
    elif operation == '/':
        result = div(num1, num2)
    elif operation == '%':
        result = mod(num1,num2)
    else:
        print("Invalid operation, please try again.")
        continue

    # print the result
    print("--------------------------------------")
    print("The result is:", result)
   
