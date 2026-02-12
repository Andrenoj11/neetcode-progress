package main

func validWordSquare(words []string) bool {
	n := len(words)

	for i := 0; i < n; i++ {
		for j := 0; j < len(words[i]); j++ {
			if j >= n || i >= len(words[j]) {
				return false
			}

			if words[i][j] != words[j][i] {
				return false
			}
		}
	}
	return true
}
