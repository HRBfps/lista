//5. Solicitar ao usuário um número inteiro qualquer e, apresentar em um alert a raiz quadrada, raiz cúbica e a potência do valor.
let raiz = parseInt(prompt("Passa um numero pro pai: "))

let qua = Math.sqrt(raiz)
let cub = Math.cbrt(raiz)
let pot = (raiz * raiz)

alert("Raiz quadrada: "+ qua+" Raiz Cúbica: "+ cub+" Potencia: "+ pot)