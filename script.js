const txtnum = document.getElementById('txtnum')
const res = document.getElementById('res')
const tabuada = [10]

//função principal
function gerar(){
    if (validar()){
        calcular()
    }
}

//validação
function validar(){
    if(txtnum.value.length == 0){
        alert('[ERRO] Insira um número')
        return false
    }else{
        return true
    }
}

function calcular(){
    res.innerHTML = '' //Zera o select antes de mostrar
    let num = Number(txtnum.value)
    for (let cont = 1; cont <= 10 ; cont ++){
        let itens = document.createElement('option')
        itens.text = `${num} x ${cont} = ${num * cont}`
        itens.value = `res${cont}` //Util para outras linguagens
        res.appendChild(itens)
    }
}