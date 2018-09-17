/*
  Cria uma conexão com um Realtime Database do Firebase.
*/
let db = connect('https://codesign-classic-7b2bb.firebaseio.com')

/*
  A função db.download recebe dois parâmetros. O primeiro
  é o endereço da parte do banco de dados na qual estamos
  interessados. Só "/" indica que queremos o banco inteiro.
  O segundo parâmetro é uma função. A ideia é que, quando 
  o download terminar, essa função será chamada, recebendo
  os dados que foram baixados como parâmetro.
*/

let path = '/'

db.download(path, function(data) {
  /*
    Para entender exatamente o que estamos imprimindo aqui,
    dê uma olhada no JSON de exemplo que foi dado no material.
    Note que estamos usando "in" em vez de "of", pois data
    é um dicionário. É com "in" que fazemos loop nas chaves.
  */
  for(let key in data) {
    console.log(data[key]['name'])
  }
})
