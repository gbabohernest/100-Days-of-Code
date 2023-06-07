"""
  spin_words - reversed a string of 5 or more words
  @sentence: a string of one or more words
  Return: same string.
          If the string contain 5 or more letter words
          reverse the string and return it
"""

def spin_words(sentence):
  list_of_words = sentence.split()
  result = []
  for word in list_of_words:
    len_of_word = len(word)
    if len_of_word >=5:
      word = word[::-1]
    result.append(word)
  return ' '.join(result)