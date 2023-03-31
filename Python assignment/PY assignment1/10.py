num_list = input("Enter a list of numbers separated by commas: ")

num_list = num_list.split(",")
num_list = [int(num) for num in num_list]

even_sum = 0
for num in num_list:
    if num % 2 == 0:
        even_sum += num

print("Sum of even numbers:", even_sum)





