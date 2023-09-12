
//MEERVOUDIGE SELECTIE ELSE IF --------------------------

// if(conditie){
//
// }else if(conditie){
//
// }else if(conditie){
//
// }else{
//
// }

let naam = prompt("Geef uw naam in:");
let beroep = prompt("Geef uw beroep in: (bediende, arbeider, ambtenaar, student");

if (beroep === 'bediende'){
    console.log("Het beroep van " + naam + " is " + beroep);
}else if (beroep === 'ambtenaar'){
    document.write("Proficiat, U bent " + beroep);
}else if (beroep === 'student'){
    document.write("Niet belastingsplichtig, " + beroep);
}else{
    document.write("Het beroep van " + naam + " is " + beroep);
}

