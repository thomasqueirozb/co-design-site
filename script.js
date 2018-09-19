document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://co-design-919f7.firebaseio.com/')


  let params = extract()
  let len = Object.keys(params).length



  db.download("/", function(data) {

    if (len) {
      mat = data[params['category']][params['course']]
      replace('body', {
        'name': params['course'],
        'semestre': mat['semestre'],
        'objetivo': mat['objetivo'],

        'conhecimentos': mat['conhecimentos'],
        'habilidades': mat['habilidades'],
        'category': data
      })
      replace('head', {
        'name': params['course']
      })
    } else {

      replace('body', {
        'category': data
      })
      replace('head', {
        'name': "INSPER"
      })
    }

  })

})


function aparece(materia) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  document.getElementById(materia).classList.toggle("show");
}




window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
