"""
  valid_braces - takes a string of braces and determine
                 if the order of the braces is valid.
  @string: string input
  Return: True if string is valid, false is it's invalid
"""


def valid_braces(string):
  stack = []
  opening_braces = '([{'
  closing_braces = ')]}'
  matching_braces = {')':'(', ']':'[', '}':'{'}

  for brace in string:
    if brace in opening_braces:
      stack.append(brace)
    elif brace in closing_braces:
      #checks if the stack is empty
      if not stack:
        return False
      top_value = stack.pop()
      if matching_braces[brace] != top_value:
        return False
      
  return len(stack) == 0