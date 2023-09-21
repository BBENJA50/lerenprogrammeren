let array1 = [];
let array2 = [];
let even = [];
let som = 0;
let max = Number(prompt("Geef het max nummer in: "));

let randomNumber = Math.floor(Math.random()*max);

for (let i = 1; i<=11; i++){
    array1.push(randomNumber);
    randomNumber = Math.floor(Math.random()*max);
    array2.push(randomNumber);
}

document.write(`${array1} <br>`);
document.write(`${array2}<p>`);

for (let j = 0; j < array1.length; j++){
    if (array1[j]%2 ===0){
        even.push(array1[j]);
    }else{
        som+= array1[j];
    }
}
for (let k = 0; k < array2.length; k++){
    if (array2[k]%2 ===0){
        even.push(array2[k]);
    }else{
        som+= array2[k];
    }
}
document.write(even + "<br>");
document.write("De som van de oneven getallen is " + som + "<br>");