let data = ["Tom","Tim",1980,1973,"Bart","Els"];

for (index in data){
    if (typeof data[index]!=="string") break;
    document.write(data[index] + "<br>");
}

//door de break gaan we testen tot het gevraagde is gevonden en dan zal het afgebroken worden.