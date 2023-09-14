let data = ["Tom","Tim",1980,1973,"Bart","Els"];

for (index in data){
    if (typeof data[index]==="string") continue;
    document.write(data[index] + "<br>");
}

//door de continue gaan we de onderstaande code overslaan en naar de volgende for loop gaan