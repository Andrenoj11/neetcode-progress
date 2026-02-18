class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let l = 0;
    let r = s.length - 1;

    const isAlphaNum = (ch) => {
      const code = ch.charCodeAt(0);
      // 0-9
      if (code >= 48 && code <= 57) return true;
      // A-Z
      if (code >= 65 && code <= 90) return true;
      // a-z
      if (code >= 97 && code <= 122) return true;
      return false;
    };

    while (l < r) {
      while (l < r && !isAlphaNum(s[l])) l++;
      while (l < r && !isAlphaNum(s[r])) r--;

      if (l < r) {
        const left = s[l].toLowerCase();
        const right = s[r].toLowerCase();
        if (left !== right) return false;

        l++;
        r--;
      }
    }

    return true;
    }
}
