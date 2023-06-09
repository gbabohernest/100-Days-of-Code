"""
  duplicate_count - Return the number of times 
                    a distinct case-insensitive
                    alphabetic character and numeric
                    digits occur in an input string
  @text: string arg
  return: total count
  
"""

def duplicate_count(text):
  count = 0
  values = set()
  
  if text == '':
      return (count)
  
  text = text.lower()
  
  for char in range(0, len(text)):
    for ch in range(char+1, len(text)):
      if (text[char] == text[ch] and text[char].isalnum()):
        if text[char] not in values:
          values.add(text[char])
          count = count + 1
  return (count)