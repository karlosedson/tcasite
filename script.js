let avaliacaoEscolhida = '';
let relatorio = '';

function avaliar(avaliacao) {
    avaliacaoEscolhida = avaliacao;
    document.getElementById("relatorio").style.display = "block";
}

function enviarAvaliacao() {
    relatorio = document.getElementById("relatorio").value;
    
    // Verificar se o relatório tem pelo menos 100 caracteres
    if (relatorio.length < 100) {
        alert("O relatório deve ter pelo menos 100 caracteres.");
        return;
    }

    // Enviar os dados para o /admin ou servidor (aqui simulado como um alerta)
    alert(`Avaliação enviada: ${avaliacaoEscolhida}\nRelatório: ${relatorio}`);
    
    // Redirecionar para a página de agradecimento ou reiniciar a avaliação
    window.location.href = "index.html";
}
