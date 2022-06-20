package main

import "fmt"

func main() {
	slice := []string{"January","February","March","April","May","June"}

	for i, value := range slice {
		fmt.Println(i, value)
	}

	person:= make(map[string]string)
	person["name"] = "Budi Hermanto"
	person["job"] = "Pemadam Kebakaran"

	for key,value := range person {
		fmt.Println(key, "=", value)
	}
}