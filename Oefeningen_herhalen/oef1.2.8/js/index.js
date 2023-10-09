let ingave = Number(prompt("Geef een getal in."));

for (let i = 1; i<ingave; i+=i){
    if (i===1){
        document.write(i);
    }else{
        document.write(","+i);
    }
}

// const userNumber = Number(prompt("Voer een getal in:"));
//
// let sequence = "";
// for (let currentNumber = 1; currentNumber <= userNumber; currentNumber *= 2) {
//     sequence += currentNumber + ", ";
// }
// sequence = sequence.slice(0, -2); // laatste comma en spatie verwijderen.
// //ES5
// console.log("De volgende reeks is de uitkomst:",sequence);
//
// //ES6
// // console.log(`De volgende reeks is de uitkomst: ${sequence}`);