// let a;
document.addEventListener('DOMContentLoaded', function() {
  let db = connect('https://co-design-919f7.firebaseio.com/')


  let params = extract()

  let course_name = params['course']

  let path = '/'

  db.download(path, function(data) {
    // console.log(data);
    // a=data;



    mat = data[params['category']][course_name]
    replace('body', {
      'name': course_name,
      'semestre': mat['semestre'],
      'objetivo': mat['objetivo'],

      'conhecimentos': mat['conhecimentos'],
      'habilidades': mat['habilidades'],
      'category': data
    })
    replace('head', {
      'name': course_name
    })

    let but=document.querySelector(".dropbtn-inside")
    console.log(but.innerText)
    but.addEventListener('mouseover', function() {
      but.style.setProperty('--open', 'flex') })
  })
})
