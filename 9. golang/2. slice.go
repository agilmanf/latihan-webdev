package main

import "fmt"

func main() {
	month := [...]string{"Januari", "Februari", "Maret", "April", "Mei", "Juni"}

	var slice1 = month[1:];
	fmt.Println(slice1[1])

	slice2 := month[0:];
	fmt.Println(slice2)
}