/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/
const divWrap = document.querySelector("div.wrap");

divWrap.classList.add('d-flex')

for (let i = 0; i <= 100; i++) {
    let resto3 = (i % 3);
    let resto5 = (i % 5);
    let resto2 = (i % 2);
    // creo div 
    const div = document.createElement('div.card');
    div.classList.add('d-flex')
    div.classList.add('card')
    if(resto2 == 0){
        div.classList.add('bg-black')
    }
    else{
        div.classList.add('bg-white')
    }
    if(resto3 == 0 && resto5 == 0){
        console.log("FizzBuzz");
        // creo span
        const text = document.createElement('span');

        // appendo contenuto span
        text.append('FizzBuzz');

        // appendo span a div
        div.append(text);
    }
    else if(resto3 == 0){
        console.log("Fizz");
        const text = document.createElement('span');
        text.append('Fizz');
        div.append(text);
    }
    else if(resto5 == 0){
        console.log("Buzz");
        const text = document.createElement('span');
        text.append('Buzz');
        div.append(text);
    }
    else{
        console.log(i);
        const text = document.createElement('span');
        text.append(i);
        div.append(text);
    }
    divWrap.append(div);
  }
  
