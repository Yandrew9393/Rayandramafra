const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav")
const botao_formulario = document.querySelector("#botao-form")


//Menu hamburger
menu.addEventListener("click", ()=>{

    nav.classList.toggle("desbloquear-menu");

    console.log(nav)

})


botao_formulario.addEventListener("click", ()=>{

const nome = document.querySelector("#nome.value");
const email = document.querySelector("#email.value");
const tel  = document.querySelector("#tel.value");
const msg = document.querySelector("#text.value")



if(nome == null || email == null || tel== null || msg == null ){

    window.alert("Preencha todo o formulário");
    
}


})



