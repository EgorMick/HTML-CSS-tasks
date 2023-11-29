//функция проверки на палиндром
function FindOutPalindrome(str) {
  let check = "";
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str == check;
}

//функция для изъятия цифр из строки
function FoundDigits(str) {
  const digits = str.match(/\d/g);
  if (digits === null) {
    return NaN;
  } else {
    const number = parseInt(digits.join(""));
    return number;
  }
}

//функция для добавления символа в строку с ограничением
function AddPadding(str, minLength, paddingString) {
  if (str.length >= minLength) {
    return str;
  } else {
    const paddingLength = minLength - str.length;
    const changedstr = str.padStart(paddingLength + 1, paddingString);
    return changedstr;
  }
}

//функция для проверки длины строки
function CheckString(str, maxLength) {
  return str.length <= maxLength;
}
