function isTriangle(a, b, c) {
  if (c > a + b || b > c + a || a > b + c) {
    return false;
  } else {
    return true;
  }
}
