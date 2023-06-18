/**
 * past - returns the time since midnight in milliseconds
 * @param h: hour since midnight
 * @param m: minutes since midnight
 * @param s: seconds since midnight
 * @return: time in milliseconds
 */

const past = (h, m, s) => h * 3600 * 1000 + m * 60 * 1000 + s * 1000;
