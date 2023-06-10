"""
    likes - implement the like  system from fb or other pages
            using python list data structure
    @names: Names of people that like an item
    return: a text representation of people that like an item
"""

def likes(names):
    length = len(names)

    if length == 0:
        return f'no one likes this'
    elif length == 1:
        return f'{names[0]} likes this'
    elif length == 2:
        return f'{names[0]} and {names[1]} like this'
    elif length == 3:
        return f'{names[0]} , {names[1]} and {names[2]} like this'
    else:
        return f'{names[0]}, {names[1]} and {length - 2} others like this'