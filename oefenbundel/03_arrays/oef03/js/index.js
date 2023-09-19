let array1 = [];
let array2 = [];
let array3 = [];
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
    array3.push(array1[j] + array2[j]);
    document.write(`${array1[j]} + ${array2[j]} = ${array3[j]}<br>`)
}