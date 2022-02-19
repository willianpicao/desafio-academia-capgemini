function senhaValida(p){
    var retorno = "Senha Invalida";
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/; 
    var numeros = /[0-9]/;
    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    if(p.length < 6){
        falta= 6 - p.length
        retorno += ` Faltam ${falta} Caracteres`
        return retorno;
    }
    
    var auxMaiuscula = 0;
    var auxMinuscula = 0;
    var auxNumero = 0;
    var auxEspecial = 0;
    for(var i=0; i<p.length; i++){
        if(letrasMaiusculas.test(p[i]))
            auxMaiuscula++;
    else if(letrasMinusculas.test(p[i]))
        auxMinuscula++;
    else if(numeros.test(p[i]))
        auxNumero++;
    else if(caracteresEspeciais.test(p[i]))
        auxEspecial++;
    }
    if (auxMaiuscula > 0){
        if (auxMinuscula > 0){
            if (auxNumero > 0){
                if (auxEspecial) {
                    retorno = "Senha valida";
                }
            }
        }
    }
    return retorno
}

// Passe como parametro para função a senha que deseja testar.
console.log(senhaValida("Ya3&ab"))