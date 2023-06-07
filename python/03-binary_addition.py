"""
  A function that add two numbers
  @a: integer arg
  @b: integer arg
  @Return: sum in binary
"""

def add_binary(a,b):
  sum = a + b
  bin_result = bin(sum)
  return (bin_result[2:])