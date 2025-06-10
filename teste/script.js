const text = "Museu Virtual da Computação";
const binary = "01001101 01110101 01110011 01100101 01110101";

const element = document.getElementById("typing-text");

function typeText(message, delay = 100, callback) {
    let i = 0;
    const interval = setInterval(() => {
    if (i < message.length) {
        element.textContent += message[i];
        i++;
    } else {
        clearInterval(interval);
        setTimeout(callback, 1000);
    }
    }, delay);
}

function deleteText(delay = 50, callback) {
    const interval = setInterval(() => {
    if (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1);
    } else {
        clearInterval(interval);
        setTimeout(callback, 500);
    }
    }, delay);
}

function loopTyping() {
    typeText(text, 100, () => {
    deleteText(50, () => {
        typeText(binary, 40, () => {
        deleteText(30, loopTyping);
        });
    });
    });
}

loopTyping();

const curiosidades = [
    "O primeiro programador da história foi Ada Lovelace.",
    "O ENIAC, de 1946, ocupava 167 m² e pesava 27 toneladas.",
    "Em 1969 foi criado o ARPANET, a 'avó' da internet.",
    "A linguagem C foi criada em 1972 e ainda é amplamente usada.",
    "Alan Turing ajudou a quebrar o código Enigma na Segunda Guerra Mundial."
];

const elemento = document.getElementById("curiosidade");
let indiceAnterior = -1;

function trocarCuriosidade() {
    let novoIndice;
    do {
      novoIndice = Math.floor(Math.random() * curiosidades.length);
    } while (novoIndice === indiceAnterior);
    
    indiceAnterior = novoIndice;
    elemento.textContent = curiosidades[novoIndice];
}

  // mostra a primeira curiosidade imediatamente
trocarCuriosidade();

  // depois atualiza a cada 6 segundos
setInterval(trocarCuriosidade, 6000);