class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

    // kalau minStack kosong, min nya adalah val
    if (this.minStack.length === 0) {
      this.minStack.push(val);
      return;
    }

    // min saat ini = min(val, min sebelumnya)
    const currentMin = this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(val, currentMin));
    }

    /**
     * @return {void}
     */
    pop() {
        // soal menjamin tidak dipanggil saat kosong
    this.stack.pop();
    this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
