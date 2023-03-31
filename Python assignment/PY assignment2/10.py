#find palindrime

#fun for find_pal
def find_palindromes(strings):
    palindromes = []
    for string in strings:#itertion
        if string == string[::-1]:
            palindromes.append(string)
    return palindromes

#input from user
input_list = input("Enter a list of strings separated by space: ").split()
palindromes = find_palindromes(input_list)
print("Palindromes:", palindromes) #res
