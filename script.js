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

  var dropdowns = document.querySelectorAll(".dropdown-content");

  for (let i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  document.getElementById(materia).classList.toggle('show');
}




window.onclick = function(event) {
  // console.log(event.target);

  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll(".dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    if (!event.target.matches('.material-icons')) {
      document.querySelector("#dropdown_slide").style.width = "0";
    }
  }
}

function openNav() {
  // console.log(document.querySelector("#dropdown_slide"));
  document.querySelector("#dropdown_slide").style.width = "10rem";
}

function closeNav() {
  document.querySelector("#dropdown_slide").style.width = "0";
}
