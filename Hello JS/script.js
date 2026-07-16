var themeBtn = document.getElementById("themeBtn")
var body = document.body;
var form = document.getElementById("contactForm")

// Alternar tema
themeBtn.addEventListener("click", function () {
    body.classList.toggle("dark")
    body.classList.toggle("light")

    var isDark = body.classList.contains("dark")
    themeBtn.textContent = isDark ? "🌔 Tema Escuro" : "☀️ Tema Claro"
})

// Validar o formulário
form.addEventListener("submit", function (e) {
    e.preventDefault()

    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var assunto = document.getElementById("assunto").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !telefone || !assunto || !mensagem) {
        alert("Por favor, preencha todos os campos.")
        return
    }

    alert("Mensagem enviada com sucesso!")
    form.reset()
})