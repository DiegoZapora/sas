let ip = document.getElementById("num")
let btn = document.getElementById("botao")
let res = document.getElementById("res")
let limpar = document.getElementById("limp")

btn.addEventListener("click", () => {
    let i = Number(ip.value)
    let fat = 1
    let cont = i
    while (cont > 1) {
        fat = fat * cont
        cont--
    }
    res.innerHTML = `O resultado do fatorial de ${i} é ${fat}` 
})

limpar.addEventListener("click", () => {
    if (ip.value != "") {
        ip.value = ""
    }

    res.innerHTML = "O resultado aparecerá aqui..."
})
