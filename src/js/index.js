// TROCANDO O TEMA DARK / LIGHT:

// 1° passo criar uma função com um evento de click, usando o atributo onclick() definido anteriormente no html,
function toggleMode() {
    // 2° passo pegar o documento html e onde a classe light foi atribuida anteriormente,
    const html = document.documentElement
    // 3° passo adicionar um metodo de verificação e a classe que vai ser adicionada ou removida,
    html.classList.toggle('light')

    // TROCANDO A IMAGEM DA LOGO:
    // 1° passo pegar a imagem pelo seletor
    const img = document.querySelector('.logo-dev')
    // 2° passo criar uma condicional para verificar se o tema é o dark ou o light  
    if (html.classList.contains('light')) {
        // 3° passo 
        img.setAttribute('src', 'src/imagens/logos do portifolio/desktop-white.png')
    } else {
        img.setAttribute('src', 'src/imagens/logos do portifolio/desktop-black.png')
    }
}

// CARROSSEL DE SLIDES
const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

function esconderImagens() {
    imagens.forEach(imagem => {
        console.log(imagem.classList.remove('mostrar'))
    });
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
    console.log(imagens[0]);
}

function mostrarOuEsconderSetas() {
    const naoEstaNaPrimeiraImagem = imagemAtual !== 0;

    if (naoEstaNaPrimeiraImagem) {
        setaVoltar.classList.remove("opacidade")
    } else {
        setaVoltar.classList.add("opacidade")
    }

    const EstaNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;

    if (EstaNaUltimaImagem) {
        setaAvancar.classList.add("opacidade")
    } else{
        setaAvancar.classList.remove("opacidade")
    }
}

setaAvancar.addEventListener('click', function () {
    const totalDeimagens = imagens.length - 1;
    if (imagemAtual === totalDeimagens) {
        console.log('não tem como avancar');
        return;
    }
    imagemAtual++;
    console.log(imagemAtual)
    esconderImagens();
    mostrarImagem();

    mostrarOuEsconderSetas()
});

setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        console.log('não tem como voltar')
        return;
    }
    imagemAtual--;
    console.log(imagemAtual);
    esconderImagens();
    mostrarImagem();
mostrarOuEsconderSetas();

});

// passo 1 - selecionar todos personagens no JS atraves de uma variavel const, pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem')

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    if (window.innerWidth < 450) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
    // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
    removerSelecaoDoPersonagem();

    personagem.classList.add('selecionado')

    // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
    // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele

    // passo 2 - alterar a imagem do personagem grande
    alterarImagemPersonagemSelecionado(personagem);
    // passo 3 - alterar o nome do personagem grande
    alterarNomePersonagemSelecionado(personagem);
    // passo 4 - alterar a descrição do personagem grande
    alterarDescriçãoPersonagemSelecionado(personagem);
  })
})

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande');

  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/icons8-${idPersonagem}.png`;
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem');
  nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescriçãoPersonagemSelecionado(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem');
  descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}
