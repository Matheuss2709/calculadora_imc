let height = document.querySelector("#height")
let weight = document.querySelector("#weight")

function calculateIMC() {


    var altura = height.value
    var peso = weight.value


    resultado = peso / (altura * altura).toFixed(2)


    document.querySelector("#text_area").innerText = resultado.toFixed(2)
}