// Desafio 10
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");
function techList(array, name) {
  let sortedArray = array.sort();
  let returnArray = [];
  if (array.length == 0){
    return 'Vazio!';
  } else {
    for (let item of sortedArray) {
      let object = {
        "tech": item,
        "name": name
      };
  
      returnArray.push(object);
    }
    return returnArray;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
