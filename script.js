/*Recupero dati 
Stampare numeri da 1 a 100
Stampare fizz con multipli di 3
Stampare buzz con multipli di 5 
Stampare fizzBuzz con multipli di 3 e 5*/

for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        //console.log(i + " FizzBuzz") In questo caso viene stampato il numero e FizzBuzz
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
