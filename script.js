const form = document.getElementById("formInscricao");
const mensagem = document.getElementById("mensagem");

// Cole aqui a URL do Google Apps Script para enviar as inscrições para planilha.
const GOOGLE_SCRIPT_URL = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = Object.fromEntries(new FormData(form).entries());
  dados.compromisso = form.compromisso.checked ? "Sim" : "Não";
  dados.imagem = form.imagem.checked ? "Sim" : "Não";
  dados.dataEnvio = new Date().toLocaleString("pt-BR");

  if (!GOOGLE_SCRIPT_URL) {
    console.log("Dados da inscrição:", dados);
    mensagem.style.color = "#0d6b32";
    mensagem.textContent = "Inscrição registrada. Agora falta conectar com a planilha.";
    form.reset();
    return;
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
    mensagem.style.color = "#0d6b32";
    mensagem.textContent = "Inscrição enviada com sucesso!";
    form.reset();
  } catch (error) {
    mensagem.style.color = "#b00020";
    mensagem.textContent = "Erro ao enviar. Tente novamente.";
  }
});
