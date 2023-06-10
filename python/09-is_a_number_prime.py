"""
    is_prime - checks if a number is a prime number
    @num: number to check
    return: True if num is prime otherwise false
"""

def is_prime(num):
    if num < 0 or num < 2:
        return False
    for n in range(2, int(num ** 0.5) + 1):
        if num % n == 0:
            return False
    return True