module.exports = function isCPF(string) {
  let sum = 0;
  let rest;

  string = string.replace(/[\.\-]/g, '');

  if (string === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(string.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }

  if (rest != parseInt(string.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(string.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }

  if (rest !== parseInt(string.substring(10, 11))) {
    return false;
  }

  return true;
};
