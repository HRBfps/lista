//2. Solicitar ao usuário um número inteiro de 1 a 10 e calcular a tabuada deste número na janela do navegador, linha a linha.

let n = parseInt(prompt("Digite o numero da tabuada"))
for(i = 1; i<=10; i++)
    document.write('<section>'+n+' x '+i+' =', n*i +'</section>') //um simples loop