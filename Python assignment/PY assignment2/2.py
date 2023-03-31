#removing vowel from str

#fun to remove vowel
def remove_vowels(string):
    vowels = "a,e,i,o,u,A,E,I,O,U"
    new_string = ""
    for character in string:
        if character not in vowels:
            new_string += character
    return new_string

# user to enter input
a=input("enter a str:")

new_string = remove_vowels(a)
print("The original string was:", a)
print("The new string with vowels removed is:" ,new_string)
