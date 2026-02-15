class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // const output = []
        // for (let i = 0; i < nums.length; i++){
        //     let product = 1
        //     for (let j = 0; j < nums.length;j++){
        //         if(i === j) continue
        //         product *= nums[j]
        //     }
        //     output.push(product)
        // }
        // return output
    //     const n = nums.length;
    // const output = new Array(n);

    // // 1) prefix products (produk semua elemen di kiri i)
    // let prefix = 1;
    // for (let i = 0; i < n; i++) {
    //   output[i] = prefix;
    //   prefix *= nums[i];
    // }

    // // 2) suffix products (produk semua elemen di kanan i), lalu kalikan ke output
    // let suffix = 1;
    // for (let i = n - 1; i >= 0; i--) {
    //   output[i] *= suffix;
    //   suffix *= nums[i];
    // }

    // return output;

    const output = Array(nums.length).fill(1)
    let prefix = 1
    for (let i = 0; i < nums.length; i++){
        output[i] = prefix
        prefix *= nums[i]
    }
    console.log(output)
    let postfix = 1
    for (let i = nums.length-1; i >= 0; i--){
        output[i] *= postfix
        postfix *= nums[i]
    }
    console.log(output)
    return output
    }
}
