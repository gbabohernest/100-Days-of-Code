"""
    pig_it - creates a string of pig latin
    @text: string arg
    return: A pig latin string
"""


def pig_it(text):
    pig_latin = []
    words = text.split()

    for word in words:
        if word.isalpha():
            pig_latin.append(word[1:] + word[0] + 'ay')
        else:
            pig_latin.append(word)

        return ' '.join(pig_latin)
