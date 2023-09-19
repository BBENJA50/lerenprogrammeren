let eindGetal = Number(prompt("Geef een eindgetal in:"));

for (let i = 2; i<= eindGetal; i++){
    let isPriemGetal = true;
    for (let j = 2; j<i; j++){
        if (i%j===0){
            isPriemGetal = false;
            break;
        }
    }
    if (isPriemGetal){
        document.write(i+", ");
    }
}