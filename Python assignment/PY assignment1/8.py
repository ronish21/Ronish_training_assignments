#n = input("Enter a list of names separated by commas: ")
#m = n.split(",")


#m = [name.strip() for name in m]

#m.sort()

#print("Sorted list of names:")
#for name in m:
 #   print(name)



name_list = input("Enter a list of names, separated by spaces: ").split()
sorted_list = []
while name_list:
    min_name = name_list[0]
    for name in name_list:
        if name < min_name:
            min_name = name
    sorted_list.append(min_name)
    name_list.remove(min_name)
print("The names in alphabetical order are:")
for name in sorted_list:
    print(name)

