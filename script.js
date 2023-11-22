"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function () {
  let numberToGuess = Math.floor(Math.random() * 100);
  let tryNumber = 10;
  console.log(numberToGuess);

  function guess(userNumber) {
    if (userNumber === null) {
      alert("Игра окончена");
      return;
    } else if (tryNumber < 1) {
      const answer = prompt("Попытки закончились. Хотите сыграть ещё?");
      answer === null ? alert("До свидания") : game();
    } else if (!isNumber(userNumber) || userNumber > 100 || userNumber < 1) {
      alert("Нужно вводить число от 1 до 100!");
      guess(prompt("Введи число от 1 до 100"));
    }

    if (userNumber == numberToGuess) {
      const answer = prompt("Поздравляю, вы угадали! Хотели бы сыграть ещё?");
      answer === null ? alert("До свидания") : game();
    } else if (userNumber < numberToGuess) {
      tryNumber--;
      guess(prompt("Загаданное число больше"));
    } else if (userNumber > numberToGuess) {
      tryNumber--;
      guess(prompt("Загаданное число меньше"));
    }
  }

  guess(prompt("Угадай число от 1 до 100"));
};

game();
