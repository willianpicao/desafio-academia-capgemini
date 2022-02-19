
//Olha eu não entendi de vdd o que essa questão queria, entao fiz um algoritmo que encontra a quantidade
//de anagramas possiveis a serem formados a partir de determinada palavra usando analise combinatoria
//basicamente implementei a matematica usada neste video: 
//https://www.youtube.com/watch?v=pkcmvxPlMOI&t=135s&ab_channel=Matem%C3%A1ticanoPapel
palavra = "osso" 
let string= {}
let array=[]
let numerador=1
let denominador=1

for (i of palavra){
    string[i] = (string[i] || 0) +1
}

for (i of palavra){
    if ( (string[i] > 1) && string[i][1] != true ){
        array.push(string[i])
        string[i] = true

    }
}

for (i=1; i <= palavra.length; i++){
    numerador = numerador * i
}

for (i=0; i<array.length ; i++){
    for (i of array){
        for (j=1; j<i; j++){
            denominador = denominador * i
        }
    }
}

console.log(`O total de anagramas que podem ser formador apartir da palavra ${palavra} é :`+ Math.ceil(numerador/denominador))




