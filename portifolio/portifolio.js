//Duas formas de criar uma ação para um 'botão'
//Com function + querySelector
//Ou addcicionando um evento; (addEventListener);


function MudarTema(){
    const portifolio = document.body;

        if (portifolio.classList.contains('dark')){
            portifolio.classList.remove("dark");
        } else {
            portifolio.classList.add("dark");
        }

}

document.querySelector("#botao_tema").onclick = MudarTema;

///////////////////////////////////////////////////////////////////////
    let imagem1 = document.querySelector('#img1');
    let imagem2 = document.querySelector('#img2');
    let imagem3 = document.querySelector('#img3');
    let imagem4 = document.querySelector('#img4');

function laptop(){
    const url_lap1 = './img/lap1.jpg'
    imagem1.style.backgroundImage = `url(${url_lap1})`;
    imagem2.style.background = 'red';
    imagem3.style.background = 'blue';
    imagem4.style.background = 'red';
}

function galeria(){
   
    imagem1.style.background = 'blue';
    imagem2.style.background = 'yellow';
    imagem3.style.background = 'blue';
    imagem4.style.background = 'red';
}

function camera(){
   
    imagem1.style.background = 'black';
    imagem2.style.background = 'red';
    imagem3.style.background = 'blue';
    imagem4.style.background = 'red';
}
