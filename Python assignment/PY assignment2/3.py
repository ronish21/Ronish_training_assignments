#sorting list of str

#user to enter input
str_list = input("Enter a list of str, separated by spaces: ").split()
sorted_list = []

#iterate until end of list
while str_list:
    min_str = str_list[0]  # assigning the value
    for str in str_list:
        if str < min_str:   
            min_str = str
    sorted_list.append(min_str)
    str_list.remove(min_str)
print("The str in alphabetical order are:") #res
for str in sorted_list:
    print(str)