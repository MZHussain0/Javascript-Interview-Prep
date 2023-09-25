﻿/**
 * You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 */

function shuffledString(str, indices) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[indices.indexOf(i)];
  }
  return result;
}

console.log(shuffledString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
