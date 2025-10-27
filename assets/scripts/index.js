const imagem = document.getElementById("imagem");
const btnTras = document.getElementById("btnTras");
const btnFrente = document.getElementById("btnFrente");


const imagens = [
    "./assets/images/silksong.png",
    "./assets/images/snoopy.png"
];

let imagemAtual = 0;

function trocarImagem(direcao) {
    if (direcao === 'frente') {
        imagemAtual = (imagemAtual + 1) % imagens.length;
    } else {
        imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    }
    imagem.src = imagens[imagemAtual];
}

btnFrente.addEventListener("click", () => trocarImagem('frente'));
btnTras.addEventListener("click", () => trocarImagem('tras'));