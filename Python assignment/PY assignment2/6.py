#find longest word

#fun to find longest word
def find_longest_word(list):
    longest_word = ""

    for word in list:    #iteration
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word


list = input("Enter a list of words separated by space: ").split()

longest_word = find_longest_word(list)
print("The longest word in list is:", longest_word) #res
