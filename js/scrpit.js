// Interacao da galeria
const imagensGaleria = document.querySelectorAll(".galeria-img");
imagensGaleria.forEach(function (imagem) {
   imagem.addEventListener("click", function () {
       console.log("Imagem selecionada:", imagem.alt);
   });
});

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