class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         // format: <len>#<string><len>#<string>...
    let out = "";
    for (const str of strs) {
      out += str.length + "#" + str;
    }
    return out;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
         const res = [];
    let i = 0;

    while (i < str.length) {
      // 1) parse length until '#'
      let j = i;
      while (str[j] !== "#") j++;

      const len = Number(str.slice(i, j)); // length as number
      // 2) take next len characters as the string
      const start = j + 1;
      const end = start + len;

      res.push(str.slice(start, end));
      // 3) move i to next chunk
      i = end;
    }

    return res;
    }
}
