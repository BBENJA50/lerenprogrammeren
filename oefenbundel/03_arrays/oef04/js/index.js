let arrayNamen = [];
let aantalNamen = Number(prompt("Geef het aantal namen in:"));

for (let i = 1; i <= aantalNamen; i++){
    arrayNamen.push(prompt("Geef de naam in:"));
}

for(let j = 1; j<arrayNamen.length+1; j++){
    if (j%2===0){
        document.write(`&nbsp;${arrayNamen[j-1]} <br>`);
    }else{
        document.write(arrayNamen[j-1] + "<br>");
    }
}
