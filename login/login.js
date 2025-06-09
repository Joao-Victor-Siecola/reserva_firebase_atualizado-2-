document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const matricula = document.getElementById("matricula").value;

  // Armazena temporariamente os dados no navegador
  localStorage.setItem("nome", nome);
  localStorage.setItem("matricula", matricula);

  // Redireciona direto para a página de reserva
  window.location.href = "reserva_integrado.html";
});