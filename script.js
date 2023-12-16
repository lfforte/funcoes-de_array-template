/* const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
] */

//#---------------prática 01
// a-)
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const multiplicaPorTres = (array) => {
  const novoArray = [];
  for (elem of array) {
    novoArray.push(elem * 3);
  }
  console.log(novoArray);
}
multiplicaPorTres(arrayNumeros);
// b-)
const numerosPares = (array) => {
  const arrayNovo = [];
  for (num of array) {
    num % 2 === 0 && arrayNovo.push(num);// mesma função que o if abaixo
    //if (num % 2 === 0) {
    //  arrayNovo.push(num)
    //}
  }
  console.log(arrayNovo);
}
numerosPares(arrayNumeros); */

/* // c-)
const numerosPares = (array) => {
  const arrayNovoPar = [];
  for (num of array) {
    num % 2 === 0 && arrayNovoPar.push(num);
  }
  return arrayNovoPar;
}

const numerosImpares = (array) => {
  const arrayNovoImpar = [];
  for (num of array) {
    num % 2 > 0 && arrayNovoImpar.push(num);
  }
  return arrayNovoImpar;
}

const multiplicaPorTresPar = (array, funcPar) => { // funcQualquer no caso vai ser numerosPares()
  const novoArray = [];
  for (elem of array) {
    novoArray.push(elem * 3);
  }
  const resultadoArrayPar = funcPar(novoArray);

  return resultadoArrayPar
}
const multiplicaPorTresImpar = (array, funcImpar) => { // funcQualquer no caso vai ser numerosPares()
  const novoArray = [];
  for (elem of array) {
    novoArray.push(elem * 3);
  }
  const resultadoArrayImpar = funcImpar(novoArray);

  return resultadoArrayImpar
}


console.log(multiplicaPorTresPar(arrayNumeros, numerosPares));
console.log(multiplicaPorTresImpar(arrayNumeros, numerosImpares)); */

//##-------------Prática 2
/* const usandoMap = arrayNumeros.map((elem) => { return elem * 3 });

console.log(usandoMap); */

//##-------------Prática 3

/* const arraynovo = [];
const usandoFilter = usandoMap.filter((elem) => {

  elem % 2 === 0 && arraynovo.push(elem)
});

console.log(arraynovo); */


//##-------------Prática extra
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
];

const pokemonsVidaCheia = pokemons.map((elementoVida) => {
  const novoOjbPokemos = {
    ...elementoVida,
    vida: 100
  };
  return novoOjbPokemos;
});
console.log(pokemonsVidaCheia);

const pokemonsDeFogo = pokemons.filter((filtraTipoFogo) =>
  filtraTipoFogo.tipo === 'fogo'
);
console.log(pokemonsDeFogo);