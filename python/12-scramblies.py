from collections import Counter
"""
    Scramblies - returns true if a portion of str1 
                characters can be rearranged to match
                str2, otherwise returns false.
    @s1: string arg
    @s2: string arg
    return: True if a portion of str1 can be rearranged
            to match str2, otherwise returns false
"""

def scramble(s1,s2):
    counter_s1 = Counter(s1)
    counter_s2 = Counter(s2)

    for char, count in counter_s2.items():
        if counter_s1[char] < count:
            return False

    return True