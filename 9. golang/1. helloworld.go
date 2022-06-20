package main

import "fmt"

func main() {
	type NoKTP string;
	type Married bool;

	var MarriedStatus Married = true;
	var Ktp NoKTP = "asdasdasd";

	fmt.Println("Hello World")
	fmt.Println(MarriedStatus)
	fmt.Println(Ktp)
}