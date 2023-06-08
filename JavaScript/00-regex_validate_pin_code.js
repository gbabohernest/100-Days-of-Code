/** 
  validatePIN - validate an ATM machine pin
  @Description: ATM machine allows 4 or 6
                digit PIN codes, nothing else
  return: True if PIN is valid
          False if PIN is invalid
*/

function validatePIN (pin) {
  const len = pin.length;
  if (len == 4 || len == 6) {
    if (/^\d+$/.test(pin)) {
      return true;
    }
  }
  return false;
}