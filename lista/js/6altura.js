/*6. Solicite ao usuário os dados de altura e sexo de 5 pessoas. Exiba no documento da página, 
quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino. 
Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher. */

let pessoas = []
let altFM = []
let F = 0
let M = 0

for(i=0;i<6;i++) { // encher a matriz
    let linha = [] 
    altura = parseInt(prompt("Escreva a altura (Em centimetros): "))
    sexo = prompt("F - Feminino, M- Masculino: ")
    if ((sexo == 'F') || (sexo == 'f')){
        F = F+1 // toda vez que tiver alguém do sexo feminino, vai adicionar um
    } else if ((sexo == 'M') || (sexo == 'm')) {
        M = M+1 // qnd tiver masculino, vai adicionar um
    } else {
        sexo = prompt("F - Feminino, M - Masculino: ") // na tentativa de se errarem, repetir, mas só se repete uma unica vez
    }
    altFM.push(altura) // jogar a altura pra uma lista propria só de alturas, pra poder diferenciar e achar o maior depois
    linha.unshift(sexo) // jogar todos pra uma "linha" que posteriormente será jogada na matriz, a "lista original"
    linha.unshift(altura)
    pessoas.push(linha) // jogar a "linha" pra matriz
}
console.log(pessoas)
console.log(F)
console.log(M)
console.log(altFM)

document.write("<h1>Lista de pessoas</h1>")
for(i=0;i<6;i++){ //aparecer na tela os dados
    document.write("<h2>"
    +
    pessoas[i]
    +
    "</h2>");
}

let maior = 0

for(i=0;i<6;i++){ //achar o maior dentro de um array
    if (altFM[i] > maior) {
        maior = altFM[i]
    }
}
let index = altFM.indexOf(maior) // descobrir a posição do maior dentro da lista de tamanhos
document.write("<h1>"+pessoas[index][0]+"| é a maior altura.</h1>") // escrever no site o mesmo index da pessoa que tem o maior tamanho, usando a lista original 
document.write("<h1> E é do sexo: "+pessoas[index][1]+"</h1>") // usando a lista original ela tambem nos dá o sexo, no index [index][1] (o segundo index)
document.write("<h3>A quantidade de pessoas do sexo Feminino: "+F+"</h3>")
document.write("<h3>A quantida de pessoas do sexo Masculino: "+M+"</h3>")