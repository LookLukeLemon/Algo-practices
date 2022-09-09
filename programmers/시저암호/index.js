//문자를 옆으로 N만큼 미는 것


function solution(s, n) {
    const strArr = s.split('');

  return strArr
    .map((item) => {
      if (item === ' ') {
        return item;
      }

      const orgStrCode = item.charCodeAt(0);
      const strCode = orgStrCode + n;

      if (orgStrCode >= 65 && orgStrCode <= 90 && strCode > 90) {
        return String.fromCharCode(strCode - 26);
      }

      if (orgStrCode >= 97 && orgStrCode <= 122 && strCode > 122) {
        return String.fromCharCode(strCode - 26);
      }

      return String.fromCharCode(strCode);
    })
    .join('');
}