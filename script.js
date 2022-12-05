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
3.Calcolare prezzo del biglietto
*/

//1.
const kmUser = prompt('Quanti km devi percorrere?').trim();
//console.log(kmUser);

//2.
const ageUser = prompt('Quanti hanni hai?', 23).trim();
//console.log(ageUser);

//3.
