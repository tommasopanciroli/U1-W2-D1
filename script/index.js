console.log('Hello World!')

console.log(10 + 5)

//OPERATORI DI ASSEGNAZIONE

let myFantasticDog

myFantasticDog = 'pluto'

let myAmazingCat = 'Tom'

let age = 25

console.log('age prima', age)

age = 50

console.log('age dopo', age)

let stringexample = 'ciao'

let numberExample = 145

let booleanExample = false

//OPERAZIONI MATEMATICHE

let sum = 40 + 10
console.log('il valore di sum è', sum)

let anotherSum = '40' + '10'
console.log('somma di due stringhe', anotherSum)

let first = 10
let second = first
let total = first + second
console.log('somma di più valori è', total)
let superTotal = total + first
console.log('somma ulteriore', superTotal)

let subtraction = superTotal - 12
console.log('dopo la sottrazione...', subtraction)

let multiplication = first * 5
console.log('moltiplicazione', multiplication)

let division = superTotal / 7
console.log('divisione', division)

//OPERATORE MODULO

let resto = superTotal % 7
console.log('resto della divisione', resto)
let anotherResto = 29 % 3
console.log('altro resto', anotherResto)

//window.alert('CIAONE') //oppure soltanto alert

//concatenazione di stringhe con uno scopo

let myName = 'Tommaso'
let myRegion = 'Italy'
let myAge = 21

let person = myName * myRegion * myAge // 'TommasoItaly19'
let betterPerson =
  'Io mi chiamo, ' +
  myName +
  ', vivo in ' +
  myRegion +
  ', ho ' +
  myAge +
  ' anni '
console.log(betterPerson)

myName = 'Aldo'
myRegion = 'Lombardia'
myAge = 66

console.log(myName)
console.log(typeof myRegion)
console.log(typeof myAge)

//tipi di dati primitivi
//stringhe
//numeri
//booleani
//undefined----> il valore di una variabile definita ma senza assegnazione
let boh
console.log('valore di boh', boh)
//null----> null è un valore, rappresenta l'ESPLICITA ASSENZA di un valore
let empty = null
console.log('valore di empty', empty)

//ULTERIORE MODO DI CREARE UNA VARIABILE: la keyword CONST

const URL = 'www.epicode.com'
//url = 'ciao' //ERRORE! stai cercando di ri-assegnare il valore a una costante
//le costanti si usano per creare delle assgnazioni in memoria NON RIASSEGNABILI
//il valore INIZIALE sarà lo stesso fino al momento dell'esecuzione

//OPERATORI LOGICI
// <, >, <=, >=, ===, !==, !
console.log(5 < 10) // entra in gioco la variabile booleana

console.log(5 > 32) // ->false

const boolean1 = 6 < 8 // true
const boolean2 = 80 > 81 //false
console.log('boolean1', boolean1)
console.log('boolean2', boolean2)

const boolean3 = 8 <= 8 // true
const boolean4 = 6 >= 8 // false
console.log('boolean3', boolean3)
console.log('boolean4', boolean4)

const boolean5 = 'tommaso' === 'tommaso' // true, COMPARAZIONE
console.log('boolean5', boolean5)
const boolean6 = 101 === 101 // true
console.log('boolean6', boolean6)
const boolean7 = 101 === 300 // false
console.log('boolean7', boolean7)
const boolean8 = 'tommaso' === 'TOMMASO' // false -> uguaglianza
console.log('boolean8', boolean8)
const boolean9 = 'tommaso' !== 'TOMMASO' // true -> disuguaglianza
console.log('boolean9', boolean9)
const boolean10 = !(6 < 8) // false, INVERTE il signifcato di 6 < 8
console.log('boolean10', boolean10)

// è possibile concatenare anche diversi valori booleani, diversi risultati di espressioni
// AND OR

const anotherBoolean1 = 5 < 10 // true
const anotherBoolean2 = 5 > 10 // false

//AND && 
const result1 = anotherBoolean1 && anotherBoolean2 // false

// OR ||
const result2 = anotherBoolean1 || anotherBoolean2 


