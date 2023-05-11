// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

let integer = parseInt(prompt("Enter an integer: "));
let sum = 0

for (let counter = 1; counter <= integer; counter++) {
  sum += counter
}

console.log("The sum of all numbers from 1 to " + integer + " is " + sum);
