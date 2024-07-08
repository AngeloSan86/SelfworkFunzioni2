let numeriTotali = prompt(`Dimmi fino a che numero devo contare, partendo da 1`);


console.log(`Hai scelto di contare fino al numero ${numeriTotali}.\nTutti i numeri multipli di 3 saranno  sostituiti dalla stringa 'Fizz', tutti i numeri multipli di 5 saranno sostituiti dalla stringa 'Buzz' e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'`);

let numero = 1;

for (let i = 0; i < numeriTotali; i++) {
  sostituzione(numero);
  numero++; 
}

function sostituzione(num) {
  if (num % 15 === 0) {
    num = "fizzBuzz";
  } else if (num % 5 === 0) {
    num = "Buzz";
  } else if (num % 3 === 0) {
    num = "Fizz";
  }
  console.log(`${num}`);
}




