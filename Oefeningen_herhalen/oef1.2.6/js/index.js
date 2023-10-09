let ingave = prompt("Geef een woord in.");
let karakter = prompt("Geef een karakter in.");
let aantal = 0;

for (let i = 1; i<= ingave.length; i++){
    if (ingave.charAt(i) === karakter){
        aantal++;
    }
}
document.write(ingave + " heeft " + aantal+" keer het karakter "+karakter);