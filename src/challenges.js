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
function checaEspaco(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      return true;
    }
  }
  return false;
}
function splitSentence(string) {
  let array = [];
  if (checaEspaco(string) === true) {
    let palavra = '';
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === ' ') {
        array.push(palavra);
        palavra = '';
      } else if (i === string.length - 1) {
        palavra += string[i];
        array.push(palavra);
      } else {
        palavra += string[i];
      }
    }
  } else {
    array.push(string);
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let string = '';
  string += array[array.length - 1];
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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat2 === distanceCat1) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let retornoArray = [];

  for (let num of array) {
    if (num % 3 === 0 && num % 5 === 0) {
      retornoArray.push('fizzBuzz');
    } else if (num % 3 === 0) {
      retornoArray.push('fizz');
    } else if (num % 5 === 0) {
      retornoArray.push('buzz');
    } else {
      retornoArray.push('bug!');
    }
  }
  return retornoArray;
}

// Desafio 9
function encode(string) {
  let returnString = '';
  for (let letter of string) {
    switch (letter) {
    case 'a':
      returnString += '1';
      break;
    case 'e':
      returnString += '2';
      break;
    case 'i':
      returnString += '3';
      break;
    case 'o':
      returnString += '4';
      break;
    case 'u':
      returnString += '5';
      break;
    default:
      returnString += letter;
      break;
    }
  }
  return returnString;
}
function decode(string) {
  let returnString = '';
  for (let letter of string) {
    switch (letter) {
    case '1':
      returnString += 'a';
      break;
    case '2':
      returnString += 'e';
      break;
    case '3':
      returnString += 'i';
      break;
    case '4':
      returnString += 'o';
      break;
    case '5':
      returnString += 'u';
      break;
    default:
      returnString += letter;
      break;
    }
  }
  return returnString;
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
