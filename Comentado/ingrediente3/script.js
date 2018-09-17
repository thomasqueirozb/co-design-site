/*
  Se não sabe o que é isto, volte para os vídeos de JavaScript.
*/
document.addEventListener('DOMContentLoaded', function() {
  /*
    Se não sabe o que é isto, volte ao ingrediente 2.
  */
  let db = connect('https://codesign-classic-7b2bb.firebaseio.com')

  /*
    Compare esta chamada de db.download com a chamada de
    db.download no ingrediente 2. Lá o primeiro parâmetro
    era "/", indicando que queríamos o banco inteiro.
    Aqui o primeiro parâmetro é "/design/courses/natdes".
    Ele representa um "caminho" de chaves de dicionário que
    percorremos no banco de dados. Dê uma olhada no JSON de
    exemplo que foi dado no material para entender para onde
    exatamente esse caminho nos leva.
  */

  let path = '/design/courses/natdes'

  db.download(path, function(data) {
    /*
      A função replace procura por símbolos especiais no
      innerHTML de um elemento da página e substitui esses
      símbolos por outras coisas que você é quem escolhe.

      O elemento é selecionado pelo primeiro parâmetro, que
      é a string que você passaria para um querySelector.

      Os símbolos especiais são facilmente reconhecíveis no
      HTML pela sintaxe de {{chaves duplas}}.

      O segundo parâmetro é um dicionário que define as
      substituições. No exemplo abaixo:

        - {{name}} é substituído pelo valor em data['name']

        - todo o trecho de {{#each...}} até {{/each}} é
          substituído pelos elementos de data['goals'],
          através de uma sintaxe muito parecida com loop.

      Para outras opções de símbolos especiais, consulte a
      documentação da Handlebars: https://handlebarsjs.com/.
    */
    replace('body', {
        'name': data['name'],
        'goals': data['goals'],
    })
  })
})
