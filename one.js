function distinctChars(m) {
  let freq = [];
  for (let i = 0; i < 26; i++) freq.push(0);
  let count = 0;
  for (let i = 0; i < m.length; i++) freq[m.charCodeAt(i) - 97]++;
  for (let i = 0; i < 26; i++) {
    if (freq[i] > 0) count++;
  }
  return count;
}
function solution(s) {
  let n = s.length;
  let answer = 0;
  for (let i = 1; i < n; i++) {
    let left = s.substr(0, i);
    let right = s.substr(i, n - i);

    if (distinctChars(left) == distinctChars(right)) answer++;
  }
  return answer;
}
let s = "ababa";
console.log(solution(s));
