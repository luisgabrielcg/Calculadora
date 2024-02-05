function mostrar(valor){
   document.getElementById('tela').value += valor
}

function resolver(){
    let x = document.getElementById('tela').value
    let y = eval(x)
    document.getElementById('tela').value = y

}

function apagar(){
    document.getElementById('tela').value = ""
}