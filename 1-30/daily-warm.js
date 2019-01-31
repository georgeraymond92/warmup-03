'use strict';

let numbers = [1,2,3,4,5,6,7,8,9,10];

const people = ['Billy','Rand','Nance'];

const stuff = {
  tv: 'flat',
  radio: 'spotify',
  toothbrush: 'sonicare',
  cars: ['Toyota','Mazda'],
};


function forLoop(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let array = [...arr];
  while( array.length ) {
    console.log(array.shift());
  }
}

function map(arr,cb) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

function filter(arr,cb) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if ( cb(arr[i]) ) { newArray.push(arr[i]); }
  }
  return newArray;
}

function reduce(arr, cb, newThing) {
  for(let i = 0; i < arr.length; i++) {
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}



console.log('forLoop()');
forLoop(numbers);


console.log('whileLoop()');
whileLoop(numbers);


console.log('map()');
let squares = map(numbers, (val=>val * val));
console.log({squares});


console.log('filter()');
let odds = filter(numbers, (val => !!(val % 2)));
console.log({odds});


console.log('reduce()');
let sum = reduce(numbers, (acc,num) => {
  acc += num;
  return acc;
},0);

console.log({sum});


const state = {people,stuff};
let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars:[...stuff.cars, 'GMC']};
let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'GMC']} };

console.log({people});


console.log({newPeople});


console.log({stuff});


console.log({newStuff});


console.log({state});


console.log({newState});
