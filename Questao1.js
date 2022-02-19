function imprimeEscada(n){
    asterisco='*'
    espaco=' '
    string=''
    for (i=0; i<n; i++){
        string+= `${espaco}`
        for (j=0; j<=i; j++){
            if (j==i){
                string+= `${asterisco}`
            }
        }
        console.log(string)
    }
}
// Passe como parametro a altura da escada.
imprimeEscada(10)