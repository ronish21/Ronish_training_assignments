#display common elements in str

#fun to find commoon elements 
def find_common_elements(list1, list2):
    common_elements = []
    for element in list1:
        if element in list2 and element not in common_elements:
            common_elements.append(element)
    return common_elements


#user to enter input for list1 and list2
list1 = input("Enter the first list of numbers separated by space: ").split()
list1 = [int(number) for number in list1]
list2 = input("Enter the second list of numbers separated by space: ").split()
list2 = [int(number) for number in list2]


common_elements = find_common_elements(list1, list2)
print("The common elements between list1 and list2 are :", common_elements)   #res
