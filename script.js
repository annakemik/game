"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function () {
  let numberToGuess = Math.floor(Math.random() * 100);

  function guess(userNumber) {
    if (userNumber === null) {
      alert("Игра окончена");
      return;
    } else if (!isNumber(userNumber) || userNumber > 100 || userNumber < 1) {
      alert("Нужно вводить число от 1 до 100!");
      guess(prompt("Введи число от 1 до 100"));
    }

    userNumber == numberToGuess
      ? alert("Поздравляю, вы угадали!")
      : userNumber < numberToGuess
      ? guess(prompt("Загаданное число больше"))
      : guess(prompt("Загаданное число меньше"));
  }

  guess(prompt("Угадай число от 1 до 100"));
};

game();
