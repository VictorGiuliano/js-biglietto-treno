/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

/*
1.Chiedo all'utente quanti km deve percorrere
2.Chiedo all'utente età del passeggero 
3.Calcolare prezzo del biglietto base
4.Calcolo dello prezzo finale
*/


const totalElement = document.getElementById('information');
const message = 'Il totale del tuo biglietto è :';
//1.
const kmUser = parseInt(prompt('Quanti km devi percorrere?').trim());
//console.log(kmUser);

//2.
const ageUser = parseInt(prompt('Quanti hanni hai?', 23).trim());
//console.log(ageUser);
const tariffa = 0.21;

//3.
let costo = kmUser * tariffa;
//console.log(costo);

//4.
let costoScontato;
let sconto = (costo * 20 ) /100;

if(isNaN(kmUser) || isNaN(ageUser)){
    alert ("Devi inserire un numero");
} else {
    if(ageUser < 18){
        costo = costo - sconto;
    }else if(ageUser > 65){
        sconto = (costo * 40) /100;
        costo = costo - sconto;
    }   
    console.log(costoScontato);
}

totalElement.innerText = message + costo.toFixed(2) + '€ ' ;


