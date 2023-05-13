// Created by: Janet Do
// Created on: May 2023
// This file contains the JavaScript functions for index.html

"use strict"

/**
 * This function adds up all the numbers from 1 to the input value.
 */
function calculate() {
  const numA = parseFloat(document.getElementById("firstInputedNumber").value)
  let sum = 0

  for (let counter = 1; counter <= numA; counter++) {
    sum += counter
  }

  document.getElementById("sum").innerHTML = "The sum is: " + sum
}
