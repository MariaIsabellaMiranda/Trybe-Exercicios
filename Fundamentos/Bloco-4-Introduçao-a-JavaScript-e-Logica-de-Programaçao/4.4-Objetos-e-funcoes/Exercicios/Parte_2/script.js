function verificaPalindromo(text){
    let invertida = text.split('').reverse().join('')
    if (invertida === text) {
        return true;
    } else {
        return false;
    }
}
 console.log(verificaPalindromo('cachorro'));