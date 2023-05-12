5 - 06
// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Janet Do
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function does multiplication.
 */
function calculate() {
  const numA = parseFloat(document.getElementById("firstInputedNumber").value)
  const product = 0
  const counter = 0

  while (counter <= numA) {
    product = product + counter
    counter++
  }

  document.getElementById("product").innerHTML = "The product is: " + product
}
