class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
         const stack = []; // stack of indices, heights are increasing
    let maxArea = 0;

    // Add sentinel 0 height to flush the stack at the end
    const h = heights.concat(0);

    for (let i = 0; i < h.length; i++) {
      // If current bar is lower, it becomes the "right boundary"
      // for bars taller than it.
      while (stack.length > 0 && h[i] < h[stack[stack.length - 1]]) {
        const topIndex = stack.pop();
        const height = h[topIndex];

        // right boundary is i (exclusive), because h[i] is smaller
        const rightLess = i;

        // left boundary is the new top of stack after pop
        // if stack empty => leftLess = -1 (means nothing smaller on the left)
        const leftLess = stack.length > 0 ? stack[stack.length - 1] : -1;

        const width = rightLess - leftLess - 1;
        const area = height * width;

        if (area > maxArea) maxArea = area;
      }

      // push current index as a candidate to be extended later
      stack.push(i);
    }

    return maxArea;
    }
}
