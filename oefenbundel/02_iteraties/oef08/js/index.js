let eindgetal = Number(prompt("Geef het getal in:"));

for (let i = 1; i<=eindgetal; i*=2){
    //de komma plaatsen we voor het getal, daarom staat er na het laatste getal geen komma meer.
    //door de if (i>1) te plaatsen zorgen we er voor dat de komma niet geplaatst word voor het 1e getal.
    if (i>1){
        document.write(", ");
    }
    document.write(i);
}
