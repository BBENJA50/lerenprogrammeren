
let total = 0;

document.getElementById("calculate").onclick = function() {
    let x= document.getElementById("number").value;
    total = total + Number(x);
    document.getElementById("result").innerHTML = Number(total);
}
