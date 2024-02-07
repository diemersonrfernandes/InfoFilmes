const nomeBusca = document.querySelector(".imput");
const mensagemErro = document.querySelector("#mensagemErro");
const botaoBuscar = document.querySelector("#botaoBuscar");
const titulo = document.querySelector("#titulo");
const ano = document.querySelector("#ano");
const duracao = document.querySelector("#duracao");
const sinopse = document.querySelector("#sinopse");
const genero = document.querySelector("#genero");
const atores = document.querySelector("#atores");
const poster = document.querySelector(".poster");
const diretor = document.querySelector("#diretor");

const apiKey = "8b0b59cb";
const imgDefault = "./default_image.png";

async function buscaFilme(nomeBusca){
     const resposta = await fetch(`http://www.omdbapi.com/?t=${nomeBusca}&apikey=${apiKey}`);
     return resposta.json();
}


botaoBuscar.addEventListener("click", ()=>{
limparCampos();
core();
})

async function core(){
     try{
          const filme = await buscaFilme(nomeBusca.value);
          validaDados(filme);
          defineValores(filme);
     }catch(erro){
          console.log(erro);
          mensagemErro.textContent = `${erro}`
     }
     
}

function defineValores (filme){
     titulo.textContent = filme.Title;
     sinopse.textContent = filme.Plot;
     ano.textContent = `Year: ${filme.Year}`;
     duracao.textContent = `Run time: ${filme.Runtime}`;
     genero.textContent = `Genre: ${filme.Genre}`;
     atores.textContent = `Actors: ${filme.Actors}`;
     diretor.textContent = `Director: ${filme.Director}`;
    poster.setAttribute = ("src",filme.Poster);
}

function limparCampos(){
     titulo.textContent = "";
     sinopse.textContent = "";
     ano.textContent = "";
     duracao.textContent = "";
     genero.textContent = "";
     atores.textContent = "";
     diretor.textContent = "";
    poster.setAttribute = ("src",imgDefault);
}

function validaDados (filme){
     if(filme.Plot === undefined || filme.Year === undefined || filme.Actors === "N/A"){
          throw new Error("Filme não encontrado!!!");
     }
}