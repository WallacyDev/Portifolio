// TROCANDO O TEMA DARK / LIGHT:

// 1° passo criar uma função com um evento de click, usando o atributo onclick() definido anteriormente no html,
function toggleMode(params) {
    // 2° passo pegar o documento html e onde a classe light foi atribuida anteriormente,
    const html = document.documentElement
    // 3° passo adicionar um metodo de verificação e a classe que vai ser adicionada ou removida,
    html.classList.toggle('light')

    // TROCANDO A IMAGEM DO PERFIL:
    // 1° passo pegar a imagem pelo seletor
    const img = document.querySelector('.profile img')
    // 2° passo criar uma condicional para verificar se o tema é o dark ou o light  
    if (html.classList.contains('light')) {
        // 3° passo 
        img.setAttribute('src', 'src/imagens/avatar-light.png')
    } else {
        img.setAttribute('src', 'src/imagens/avatar.png')
    }
}