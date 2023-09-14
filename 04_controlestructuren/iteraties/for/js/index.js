
//---------------------------- FOR LOOP --------------------------------
//
// for(teller;conditie;manipulatie v/d teler){
//     uitvoering van de code;
// }
//3e parameter:
//   optelling: i=i+1; i+=1; i++

//Hier gaan we laten optellen op het scherm tot i = 10
// for(let i=1; i<=10;i++){
//     document.write(i);
// }

let som=0;

for(let i = 1; i<=3;i++){
    let getal = Number(prompt("Geef getal " + i +" in:"));
    som = som + getal;
}

document.write(som);