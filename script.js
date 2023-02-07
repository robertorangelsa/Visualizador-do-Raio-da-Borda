const caixa = document.querySelector(".caixa"); 
const cssResultante = document.querySelector("#cssResultante"); 
const valorSupEsq = document.querySelector("#valorSupEsq"); 
const valorSupDir = document.querySelector("#valorSupDir"); 
const valorInfEsq = document.querySelector("#valorInfEsq"); 
const valorInfDir = document.querySelector("#valorInfDir"); 
const alterar = document.querySelector("#alterar"); 

alterar.addEventListener("click", function() { 
  const borderRadius = `${valorSupEsq.value}px ${valorSupDir.value}px ${valorInfEsq.value}px ${valorInfDir.value}px`; 
  caixa.style.borderRadius = borderRadius; 
  cssResultante.value = `border-radius: ${borderRadius};`; 
}); 
