"""
    comp - checks whether two arrays have the same elements
    @arr1 - first array
    @arr2 - second array
    return: True if they are the same and False if not
"""

def comp(arr1, arr2):
    if None in [arr1, arr2] or len(arr1) != len(arr2):
        return False
    
    try:
        sorted_a = sorted(arr1)
        sorted_b = sorted(arr2)

        for item in range(len(sorted_a)):
            if sorted_a[item] **2 != sorted_b[item]:
                return False
        return True
    except TypeError:
        return False