"""
    tower_builder - build a pyramid-shaped tower
    @n_floors: number of floor
"""


def tower_builder(n_floors):
    tower = []
    for floor in range(n_floors):
        spaces = ' ' * (n_floors - floor - 1)
        blocks = '*' * (2 * floor + 1)
        tower.append(spaces + blocks + spaces)
    return tower
