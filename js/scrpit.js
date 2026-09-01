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

// Luiz - pesquisa e filtro dos destinos ==================

<input
    type="search"
    id="pesquisaDestino"
    class="form-control"
    placeholder="Ex.: Manaus, Rio de Janeiro, Salvador...">

<button
    type="button"
    id="btnPesquisar"
    class="btn btn-primary w-100">

    Pesquisar destinos

</button>
</input>

// ========================================================

// Interacao dos botoes dos pacotes
document.querySelectorAll(".btn-pacote").forEach(function (botao) {
botao.addEventListener("click", function () {
const destino = botao.dataset.destino;
alert(`Pacote selecionado: ${destino}`);
});
});