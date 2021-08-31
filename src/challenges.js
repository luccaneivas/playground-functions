// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  if (checaEspaco(string) === true) {
    let palavra = '';
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] == ' ') {
        array.push(palavra);
        palavra = '';
      } else if (i == string.length-1) {
        palavra += string[i];
        array.push(palavra);
      } else {
        palavra += string[i];
      }
    }
  } else {
    array.push(string);
  }
  console.log(array);
  return array;
}

function checaEspaco(string) {
  for (let i = 0; i < string.length; i += 1){
    if (string[i] === ' ') {
      return true;
    }
  }
  return false;
}

// Desafio 4
function concatName(array) {
  let string = '';
  string += array[array.length -1];
  string += ', ';
  string += array[0];

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contador = 0;

  for (let num of array) {
    if (num > maior) {
      maior = num;
      contador = 1;
    } else if (num === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
