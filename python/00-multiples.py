"""
  solution - returns the sum of all multiples of 3 or 5
  @number: int args
  Return: sum of all multiples of 3 or 5
          0 if number is negative
"""
def solution(number):
  sum = 0
  if number < 0:
    return (0)
  else:
    for i in range(number):
      if i % 3 == 0 or i % 5 == 0:
        sum = sum + i
      elif i % 3 == 0 and i % 5 == 0:
        sum = sum + i
  return (sum)