package main

import "fmt"

func knapsack(w int, profit []int, weight []int) {
	length := len(weight)
	dp := make([][]int, length+1)

	for i := range length {
		dp[i] = make([]int, length)
	}

	fmt.Println("dp", dp)
}

func main() {
	w := 4
	profit := []int{1, 2, 3}
	weight := []int{4, 5, 1}

	fmt.Println("hello world", w, profit, weight)
	knapsack(w, profit, weight)
}
