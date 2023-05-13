// Created by: Janet Do
// Created on: May 2023
//
// This program takes a number and adds all the numbers leading to that number
package main

import (
	"fmt"
)

func main() {
	var input int
	fmt.Print("Enter a number: ")
	fmt.Scanln(&input)

	product := 0
	equation := ""

	for i := 1; i <= input; i++ {
		product += i
		equation += fmt.Sprintf("%d", i)

		if i != input {
			equation += "+"
		}
	}

	fmt.Printf("%s=%d\n", equation, product)
	fmt.Println("\nDone.")
}