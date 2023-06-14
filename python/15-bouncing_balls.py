"""
    bouncing_ball - checks the amount of times a
                    ball will bounce after falling
                    from a height
    @h: height
    @bounce: initial bounce
    @window: window height form the ground

    return:  return a positive integer indicating
             the amount of time ball bounces
"""


def bouncing_ball(h, bounce, window):
    if h <= 0 or not (0 < bounce < 1) or window >= h:
        return False
    bounce_count = 1
    while (h * bounce > window):
        bounce_count += 2
        h *= bounce
    return bounce_count
