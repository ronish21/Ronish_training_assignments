#print the count letters

#fun for count_letters
def count_letters(string):
    letter_count = {}
    #iteration
    for letter in string:
        if letter in letter_count:
            letter_count[letter] += 1
        else:
            letter_count[letter] = 1
    return letter_count

#input from user
string = input("Enter a string: ")

letter_count = count_letters(string)
print("The letter count in string is: ",letter_count)  #res
