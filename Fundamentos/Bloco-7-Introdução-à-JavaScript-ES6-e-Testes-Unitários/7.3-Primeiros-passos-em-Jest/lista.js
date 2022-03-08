const techList = (array, string) => {
  const arrayEmOrdem = array.sort();
  const arrayObjetos = [];

  if (array.length === 0) {
    return 'Vazio!'
  }
  for (i = 0; i < arrayEmOrdem.length; i +=1) {
    arrayObjetos.push({
     tech: arrayEmOrdem[i],
     name: string
    })
  }
  
  return arrayObjetos.sort();
}

module.exports = techList;