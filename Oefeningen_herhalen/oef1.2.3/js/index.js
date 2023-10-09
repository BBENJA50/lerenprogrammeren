let aantalSterren = Number(prompt("Geef een even aantal lijnen in."));

if (aantalSterren % 2 === 0){
    for (let i = 1; i<=(aantalSterren/2);i++){
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
    for (let i = (aantalSterren/2); i>=1;i--){
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}else{
    document.write("Geef een even aantal in!");
}