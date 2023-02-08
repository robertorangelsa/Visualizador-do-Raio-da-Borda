/* Seleciona a Div, com a classe "caixa", e atribui á variável */
const caixa = document.querySelector(".caixa");
/* Seleciona um determinado input, com os seus respectivos ID's, e atribui às suas respectivas variáveis */ 
const cssResultante = document.querySelector("#cssResultante"); 
const valorSupEsq = document.querySelector("#valorSupEsq"); 
const valorSupDir = document.querySelector("#valorSupDir"); 
const valorInfEsq = document.querySelector("#valorInfEsq"); 
const valorInfDir = document.querySelector("#valorInfDir");
/* Seleciona o botão, com a ID "alterar", e atribui à variável */
const alterar = document.querySelector("#alterar"); 
/* Adiciona um evento de clique no botão "alterar" */
alterar.addEventListener("click", function() { 
  /* Concatena os valores dos inputs em uma string, separada por espaço, para usar como valor da propriedade border-radius */
  const borderRadius = `${valorSupEsq.value}px ${valorSupDir.value}px ${valorInfEsq.value}px ${valorInfDir.value}px`;
  /* Aplica a string concatenada como valor da propriedade border-radius na div "caixa" */
  caixa.style.borderRadius = bo/* Insere o valor da propriedade border-radius no input "cssResultante" */rderRadius;
  /* Insere o valor da propriedade border-radius no input "cssResultante" */
  cssResultante.value = `border-radius: ${borderRadius};`; 
});