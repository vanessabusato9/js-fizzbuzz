/*Recupero dati 
Stampare numeri da 1 a 100
Stampare fizz con multipli di 3
Stampare buzz con multipli di 5 
Stampare fizzBuzz con multipli di 3 e 5*/

for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " fizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " fizz");
    } else if (i % 5 === 0) {
        console.log(i + " buzz");
    } else {
        console.log(i);
    }
}
