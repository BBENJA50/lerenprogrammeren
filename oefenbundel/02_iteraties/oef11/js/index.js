let aantalGetallen = prompt("Hoeveel getallen wil je weergeven? ");
let resultaat = 0;
let eersteGetal = 0;
let tweedeGetal = 1;

for (let i = 0; i <= aantalGetallen; i++){
    document.write(`${resultaat}, `);        // print 0 -- 1 -- 1 -- 2

    eersteGetal = resultaat + tweedeGetal;  //0 wordt 1 --
    resultaat = tweedeGetal;                //0 wordt 1 --
    tweedeGetal = eersteGetal;              //1 wordt 1 --
    console.log(`${resultaat}, ${eersteGetal}, ${tweedeGetal}`);

}
