function hasUniqueCharacters(palabra){
    var arrayAux = []
    var aux = true;
     palabra.split('').forEach((elementPalabra, index) => {
        if(aux){
            if(arrayAux.length!=0){
               arrayAux.forEach(element => {
                  if(element==elementPalabra){
                      callback(true)
                  }
              });
            }
        }
        
      arrayAux.push(elementPalabra)
    });
}
function callback (valor) { console.log(valor)}
hasUniqueCharacters("StringS")



