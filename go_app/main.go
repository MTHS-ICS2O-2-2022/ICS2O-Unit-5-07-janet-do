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

	for counter := 1; counter <= input; counter++ {
		product += counter
		equation += fmt.Sprintf("%d", counter)

		if counter != input {
			equation += "+"
		}
	}

	fmt.Printf("%s=%d\n", equation, product)
	fmt.Println("\nDone.")
}