var hamburguer = document.getElementById("hamburguer")
var combo = document.getElementById("combo")
var sbf = document.getElementById("sbf") 
var epb = document.getElementById("epb")
var cp = document.getElementById("cp")

function mostrar_hamburguer() {
    sbf.style.display = "flex"
    epb.style.display = "flex"
    cp.style.display = "none"
}

function mostrar_combo() {
    sbf.style.display = "none"
    epb.style.display = "none"
    cp.style.display = "flex"
}

hamburguer.addEventListener("click", mostrar_hamburguer)
combo.addEventListener("click", mostrar_combo)