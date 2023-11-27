// Solicita ao usuário o nome e a quantidade de experiência do herói
let nomeHeroi = prompt("Digite o nome do Herói:");
let xpHeroi = prompt("Digite a quantidade de experiência do Herói:");

// Converte a entrada do usuário para um número
xpHeroi = parseFloat(xpHeroi);

// Utiliza uma estrutura de decisão para classificar o nível do herói
let nivelHeroi;

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
