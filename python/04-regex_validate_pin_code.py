"""
  validate_pin : validates an ATM machine pin code
  @pin: Pin string
  Return: True if PIN string is Valid
          False if Not
"""

def validate_pin(pin):
  pin_len = len(pin)
  if pin_len == 4 or pin_len == 6:
    if pin.isdigit():
      return True
  return False