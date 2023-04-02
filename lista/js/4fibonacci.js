//4. Exibir em uma página html os 10 primeiros números da sequência de Fibonacci, apresentando uma imagem sobre a série.

document.write("<section class='sec2'><h1>Fibonacci</h1><button class='btn'>Aperta em mim!</button><p>1,3,5,8,13,21,34,55,89,144</p><img src='../images/fibonacci.jpg'></section>"); // foto, textos e botao
let button = document.querySelector('button'); //encontra aonde no documento tem uma tag button

let penultimo=0, ultimo=1;
let numero;
button.addEventListener('click', function(){ //quando a pessoa clicar, vai abrir um alert com o numero
        numero = ultimo + penultimo
        penultimo = ultimo
        ultimo = numero
        alert(numero);
});