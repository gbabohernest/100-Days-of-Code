"""
   solution - takes an integer and return a string containing
              the roman numeral representation of that integer
   @n: integer arg
   return: a roman number string
"""

def solution(n):
    symbols = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    
    result = ''

    for value, symbol in sorted(symbols.items(), reverse=True):
        while n >= value:
            result += symbol
            n -= value
    return result