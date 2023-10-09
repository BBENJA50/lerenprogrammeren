let ingave = Number(prompt("Geef de tafel die je wil zien."));
let eindgetal = Number(prompt("Geef het eindgetal in."));
let som = ingave;

for (let i = 1; i<=eindgetal; i++){
    som=i*ingave;
    if (i%3===0){
        document.write(ingave+"x"+i+"="+som+" <br>");
    }else{
        document.write(ingave+"x"+i+"="+som+" ");
    }
}