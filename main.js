
//ESERCIZIO 1
//Scrivere una funzione che prenda in ingresso un array e lo restituisca con gli elementi in ordine invertito


// let arr=[1,2,3,4,5];

// function inversione(numero){
//     arr.reverse();
// }

// inversione();
// console.log(arr);


//FINE ESERCIZIO 1


//ESERCIZIO 2
//Scrivere una funzione che prenda in ingresso una stringa e la restituisca tutta in maiuscolo(.toUpperCase()).


// let stringa= `ciao, mi chiamo alfonso`;

// function maiuscolo(str){
//     console.log(stringa.toUpperCase());
// }

// maiuscolo();


//FINE ESERCIZIO 2



//ESERCIZIO 3
//Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array soltanto con numeri pari

// let arr =[1,2,3,4,5,6,7,8,9,10];

// function numeriPari(){
//     let arr2=[];
//     let pari = arr.filter(number => number % 2 == 0)
//     arr2.push(pari);
//     console.log(arr2);
// }

// numeriPari();


//FINE ESERCIZIO 3


//ESERCIZIO 1 INTERMEDI
//Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array con tutti i numeri dispari moltiplicati * 3

// let numeri = [1,2,3,4,5];


// function dispariMoltiplicati(array){


//Metodo 1
// let dispari = numeri.filter(numero => numero % 2 != 0);
// let finali = dispari.map(x => x * 3);
// console.log(finali);

//Metodo 2
// array.forEach((numero)=> {
//     if(numero % 2 != 0){
//         dispari.push(numero * 3);
//     }
// });
// return dispari;
// }

// console.log(dispariMoltiplicati(numeri));


//ESERCIZIO 2 INTERMEDI
//Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca la somma di tutti i numeri passati.

// let arr=[10,20,30,40,50];

// function sommaNumeri(numeri){
    
//     let somma = arr.reduce((acc, numero) => acc + numero);
//     console.log(somma);
// }

// sommaNumeri();


//FINE ESERCIZIO 2 INTERMEDI









