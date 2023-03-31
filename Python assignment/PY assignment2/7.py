#find prime number in list

#fun for prime num
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

#fun to find prime num
def find_primes(numbers):
    primes = []
    for num in numbers:
        if is_prime(num):
            primes.append(num)
    return primes

#user to enter input
numbers = input("Enter a list of numbers separated by space: ").split()
numbers = [int(num) for num in numbers]

prime_numbers = find_primes(numbers)
print("The prime numbers  are:" ,prime_numbers)   #res
