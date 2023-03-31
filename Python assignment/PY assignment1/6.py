num_list = input("Enter a list of numbers, separated by spaces: ").split()
max_num = int(num_list[0])
min_num = int(num_list[0])
for num in num_list:
    num = int(num)
    if num > max_num:
        max_num = num
    if num < min_num:
        min_num = num
print("The largest number in the list is:", max_num)
print("The smallest number in the list is:", min_num)
