// Desafio 10
function techList(array, name) {
  let sortedArray = array.sort();
  let returnArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let item of sortedArray) {
      let object = {
        tech: item,
        name,
      };
      returnArray.push(object);
    }
    return returnArray;
  }
}

// Desafio 11
function testPhoneNumber(array) {
  if (array.length === 11) {
    for (let i = 0; i < array.length; i += 1) {
      let contador = 0;
      if (array[i] < 0 || array[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let j = 0; j < array.length; j += 1) {
        if (array[j] === array[i]) {
          contador += 1;
        }
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return true;
  } else {
    return 'Array com tamanho incorreto.';
  }
}
function generatePhoneNumber(array) {
  let testResult = testPhoneNumber(array);
  if (testResult === true) {
    let stringResult = '(';
    for (let i = 0; i < array.length; i += 1) {
      if (i === 2) {
        stringResult += ') ';
      } else if (i === 7) {
        stringResult += '-';
      }
      stringResult += array[i];
    }
    return stringResult;
  } else {
    return testResult;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  // código para extrair apenas integers de uma string (utilizada na linha 71) retirada deste link: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string/30607466
  let numbers = string.replace(/\D/g, '');
  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    result += Number(numbers[i]);
  }
  if (result === 1) {
    return `${result} copo de água`;
  } else {
    return `${result} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
