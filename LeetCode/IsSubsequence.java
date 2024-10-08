//Leetcode392: https://leetcode.com/problems/is-subsequence/description/

class Solution {
    public boolean isSubsequence(String s, String t) {
        char[] sc = s.toCharArray();
        char[] tc = t.toCharArray();
        int i=0;
        for (char c: tc){
            if (i<sc.length && c == sc[i]) i++;
        }
        return i==sc.length;
    }
}
