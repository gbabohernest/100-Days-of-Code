"""
    find_outlier - finds outlier in a list of integers
    @integers: a list of integers
    return: an outlier in the list of integers
"""

def find_outlier(integers):
    length = len(integers)
    if length > 2:
        odd = []
        even = []

        for num in integers:
            if num % 2 == 0:
                even.append(num)
            else:
                odd.append(num)
            
            if len(odd) == 1:
                return odd[0]
            else:
                return even[0]
    return None