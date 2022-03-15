// Acesse o elemento elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta"));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// document.getElementById("elementoOndeVoceEsta").firstChild.style.backgroundColor = "pink";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById("primeiroFilhoDoFilho").innerText = "Adicionando o texto";

// Acesse o primeiroFilho a partir de pai .
console.log(document.getElementById("primeiroFilho").parentElement);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").children[1]);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById("pai").children[2]);

// Crie um irmão para elementoOndeVoceEsta.
let maisUmFilho = document.createElement("div");
maisUmFilho.innerText = "maisUmFilho";

elementoOndeVoceEsta.parentElement.appendChild(maisUmFilho);

// Crie um filho para elementoOndeVoceEsta .
let oFilhoDoElemento = document.createElement("div");

elementoOndeVoceEsta.appendChild(oFilhoDoElemento);

oFilhoDoElemento.innerText = "oFilhoDoElemento";

// Crie um filho para primeiroFilhoDoFilho .
let primeiroDoPrimeiro = document.createElement("div");

primeiroFilhoDoFilho.appendChild(primeiroDoPrimeiro);

primeiroDoPrimeiro.innerHTML = "primeiroDoPrimeiro";

// A partir desse filho criado, acesse terceiroFilho.

console.log(document.getElementById("primeiroDoPrimeiro").parentElement.nextElementSibling);