document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://co-design-919f7.firebaseio.com/')

  let tpName = new TP('template-name')

  let tpHabilidades = new TP('template-habilidades')

  // let tpConhecimentos = new TP('template-conhecimentos')

  let params = new URLSearchParams(window.location.search)

  let course_name=params.get('course')

  let url = '/' + params.get('category') + '/' + course_name + '/'

  db.download(url, function(data) {


    let name = document.querySelector('#name')
    name.innerHTML = course_name

    let semestre = document.querySelector('#semestre')
    semestre.innerHTML = data["semestre"] + semestre.innerHTML

    let obj = document.querySelector('#objetivo')
    obj.innerHTML =  data["objetivo"]

    let conhecimentos = document.querySelector('.list')
    // for (let ce in data["conhecimentos"]){
    //   let l = document.createElement("ul")
    //   l.class="conhecimentos"
    //
    //   for (let item of data["conhecimentos"][ce]){
    //     let inl = document.createElement("li")
    //     inl.innerHTML = item
    //     l.appendChild(inl)
    //   }
    //   conhecimentos.appendChild(l)
    // }

    // conhecimentos.innerHTML = tpConhecimentos.generate({"conhecimentos" : data["conhecimentos"]})

    // let name = document.querySelector('#name')
    // name.innerHTML = tpName.generate({'name': data['name']})

    let habilidades = document.querySelector('.habilidades')
    habilidades.innerHTML = tpHabilidades.generate({'habilidades': data['habilidades']})

  })
})
