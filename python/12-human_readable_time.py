"""
    make_readable - takes a non-negative integer
                    as seconds and return a human
                    readable time format
    @seconds: the number of seconds
    return: A  human readable time format
"""

def make_readable(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = (seconds % 3600) % 60

    return '{:02d}:{:02d}:{:02d}'.format(hours, minutes, seconds)