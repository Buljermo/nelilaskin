function Laske() {
    var lukua = document.getElementById("lukua").value;
    var lukub = document.getElementById("lukub").value;
    var tulos ="";
    var summa = +lukua + +lukub;
    var ero = +lukua - +lukub;
    var kerto = +lukua * +lukub;
    var jako = +lukua / +lukub;
    if (document.getElementById("plus").checked == true) {
        tulos = "Tulos on "+ summa;
    }

    if (document.getElementById("minus").checked == true) {
        tulos = "Tulos on "+ ero;
    }

    if (document.getElementById("kerto").checked == true) {
        tulos = "Tulos on "+ kerto;
    }

    if (document.getElementById("jako").checked == true) {
        if (lukub !=0 ) {
            tulos = "Tulos on " + jako;
        } else {
            tulos = "Nollalla ei saa jakaa!"
        }
        
    }
    document.getElementById("tulos").innerHTML = tulos;
}