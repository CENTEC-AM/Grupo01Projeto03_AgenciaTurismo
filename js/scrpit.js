const form = document.getElementById("formOrcamento");
const mensagemSucesso = document.getElementById("mensagemSucesso");
form.addEventListener("submit", function (event) {
 event.preventDefault();
 if (!form.checkValidity()) {
 event.stopPropagation();
 form.classList.add("was-validated");
 return;
 }
 form.classList.add("was-validated");
 mensagemSucesso.classList.remove("d-none");
 form.reset();
 form.classList.remove("was-validated");
});