//Recuperando o elemento do modalBtn
var modal = document.getElementById('simpleModal');

// Abrindo o modalBtn

var modalBtn = document.getElementById('modalBtn');

// Fechando o modalBtn2

// Pegando a primeira posicao do array e selecionando o class
var modalCloseBtn = document.getElementsByClassName('fecharBtn')[0];

// Realizando um evento para capturar o click e abrir
modalBtn.addEventListener('click',openModal);

// Realizando um evento para capturar o click e fechar
modalCloseBtn.addEventListener('click',closeModal);

// Opção para clicar fora do modal(window) é fechar

window.addEventListener('click', outsideClick);

// Criando funcao para abrir e fechar o modal

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
