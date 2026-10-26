const inputCep = document.getElementById("input-cep")
const botaoBuscar = document.getElementById("botao-buscar")
const botaoLimpar = document.getElementById("botao-limpar")
const formConsulta = document.getElementById("form-consulta")
const spanLogradouro= document.getElementById("span-logradouro")
const spanBairro =  document.getElementById("span-bairro")
const spanCidade = document.getElementById("span-cidade")
const spanEstado = document.getElementById("span-estado")
const spanCep = document.getElementById("span-cep")
const mensagemStatus = document.getElementById("mensagem-status")

async function buscarCep(event)
{   
    event.preventDefault()
     const cep = inputCep.value.replace("-","")
     if(cep.length != 8)
     {
        alert ("cep deve ter 8 numeros")
        return
     }
     const padrao = /^[0-9]{8}$/
     const resultado  = padrao.test(cep)
     if(!resultado)
     {
        alert("O cep deve conter apenas numeros")
        return
     }
     limparEnderecos()
    try{
        
        mensagemStatus.textContent = "Carregando ..."
        botaoBuscar.disabled= true
        await new Promise(resolve => setTimeout(resolve,2000))
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        
          if(!response.ok)
     {
        throw new Error("Erro na requisição")
     }
    const dados = await response.json();
    if(dados.erro)
    {
        alert("Cep inexistente ou digitado incorretamente")
        return
    }
     spanLogradouro.textContent = dados.logradouro
     spanBairro.textContent = dados.bairro
     spanCidade.textContent = dados.localidade
     spanEstado.textContent = dados.estado
     spanCep.textContent = dados.cep
    }
     catch(erro)
     {
        alert("Não foi possível consultar cep")
     }
     finally{
        mensagemStatus.textContent=""
         botaoBuscar.disabled= false
     }
}
formConsulta.addEventListener("submit",buscarCep)
botaoLimpar.addEventListener("click",function(){
    limparCampos()
})

function limparEnderecos(){
   
    spanCep.textContent ="  "
    spanLogradouro.textContent=""
    spanBairro.textContent=""
    spanCidade.textContent=""
    spanEstado.textContent=""
}
function limparCampos()
{    inputCep.value =""
    limparEnderecos()
}
