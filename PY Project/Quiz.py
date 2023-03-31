#Quiz
# Define the quiz questions and answers
questions = [
    {
        "question": "Who is the Father of our Nation?",
        "choices": ["A) Subhash Chandra Bose", "B) Mahatma Gandhi", "C) Bhagat Singh", "D) Shastri"],
        "answer": "B"
    },
    {
        "question": "Which is the longest river in India?",
        "choices": ["A) Gangas", "B) Yamuna", "C) Indus", "D) Narmada"],
        "answer": "C"
    },
    {
        "question": "Who invented Computer?",
        "choices": ["A) Charles Babbage", "B) Gquido van Rossum", "C) James Gosling", "D) Anders Hejlsberg"],
        "answer": "A"
    }
]

def take_quiz(questions):
    score = 0
    for q in questions:
        print(q["question"])
        for c in q["choices"]:
            print(c)
        answer = input("Enter your answer (A/B/C/D): ")
        if answer.upper() == q["answer"]:
            score += 1
            print("Correct!")
        else:
            print(f"Sorry, the correct answer was {q['answer']}.")
        print()
    print(f"Your final score is {score}/{len(questions)}.\n")
    

take_quiz(questions)
