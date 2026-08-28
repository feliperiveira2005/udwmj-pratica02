// Solicita o nome do usuário através da caixa de diálogo prompt
const nome = prompt("Por favor, digite o seu nome:");

// Seleciona o elemento h1 pelo ID
const elementoSaudacao = document.getElementById("saudacao");

// Verifica se o usuário digitou algo e insere a saudação na página
if (nome && nome.trim() !== "") {
    elementoSaudacao.textContent = `Olá, ${nome.trim()}!`;
} else {
    elementoSaudacao.textContent = "Olá, visitante!";
}
