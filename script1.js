function calculadora(event){
  event.preventDefault()

  let n1= parseFloat(document.getElementById("n1").value)
  let n2= parseFloat(document.getElementById("n2").value)
  let n3= parseFloat(document.getElementById("n3").value)
  let n4= parseFloat(document.getElementById("n4").value)
  result.innerHTML = ``
  min = Math.min(n1,n2,n3,n4);
  max = Math.max(n1,n2,n3,n4);
  result.innerHTML = ` maior valor: ${max} o menor valor: ${min}`
}
addEventListener("submit", calculadora)

