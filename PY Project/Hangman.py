#Hangman
import random
# List of words to choose from
list = ['DSA']

def choose_word(list):
    return random.choice(list)

def check_guess(guess, word, correct_guesses):
    if guess in word:
        correct_guesses.add(guess)
    else:
        return False
    return True

def get_guess(incorrect_guesses):
    while True:
        guess = input("Guess a letter: ").lower()
        if not guess.isalpha() or len(guess) != 1:
            print("Invalid input, please enter a single letter.")
            print("---------------------------------------------")
        elif guess in incorrect_guesses:
            print("You've already guessed that letter, try again.")
            print("------------------------------------------------")
        else:
            return guess

def display_word(word, correct_guesses):
    for letter in word:
        if letter in correct_guesses:
            print(letter, end=' ')
        else:
            print('_', end=' ')
    print()

def play_hangman():
    word = choose_word(list).lower()
    correct_guesses = set()
    incorrect_guesses = set()

    while len(incorrect_guesses) < 3:
        display_word(word, correct_guesses)
        guess = get_guess(incorrect_guesses)
        if not check_guess(guess, word, correct_guesses):
            incorrect_guesses.add(guess)
            
            print("Incorrect guess!")
            print("--------------------------------------------------")
            print(f"You have {3-len(incorrect_guesses)} guesses left.")
            print("------------------------------------------------------")
        else:
            print("Correct guess!")
            print("-----------------------------------------------")
            if len(correct_guesses) == len(set(word)):
                print("Congratulations, you guessed the word!")
                print("-------------------------------------------------")
                return

    print(f"Sorry, you failed. The word was {word}.")
    print("----------------------------------------------------")

play_hangman()
