class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
  // // rows
  // for (let r = 0; r < 9; r++) {
  //   const set = new Set()
  //   for (let c = 0; c < 9; c++) {
  //     const v = board[r][c]
  //     if (v === ".") continue
  //     if (set.has(v)) return false
  //     set.add(v)
  //   }
  // }

  // // cols
  // for (let c = 0; c < 9; c++) {
  //   const set = new Set()
  //   for (let r = 0; r < 9; r++) {
  //     const v = board[r][c]
  //     if (v === ".") continue
  //     if (set.has(v)) return false
  //     set.add(v)
  //   }
  // }

  // // boxes
  // for (let br = 0; br < 9; br += 3) {
  //   for (let bc = 0; bc < 9; bc += 3) {
  //     const set = new Set()
  //     for (let r = br; r < br + 3; r++) {
  //       for (let c = bc; c < bc + 3; c++) {
  //         const v = board[r][c]
  //         if (v === ".") continue
  //         if (set.has(v)) return false
  //         set.add(v)
  //       }
  //     }
  //   }
  // }

  // return true
    const rows = Array.from({ length: 9 }, () => new Set())
  const cols = Array.from({ length: 9 }, () => new Set())
  const boxes = Array.from({ length: 9 }, () => new Set())

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const v = board[r][c]
      if (v === ".") continue

      const box = Math.floor(r / 3) * 3 + Math.floor(c / 3)

      if (rows[r].has(v) || cols[c].has(v) || boxes[box].has(v)) return false

      rows[r].add(v)
      cols[c].add(v)
      boxes[box].add(v)
    }
  }
  return true

    }
}
