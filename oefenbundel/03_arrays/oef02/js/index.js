let array1 = [];
let array2 = [];
let array3 = [];

for (let i = 1; i<=10; i++){
    array1.push(i);
    array2.push(i);

}

for (let j = 0; j < array1.length; j++){
    array3.push(array1[j] + array2[j]);
    document.write(`${array1[j]} + ${array2[j]} = ${array3[j]}<br>`)
}