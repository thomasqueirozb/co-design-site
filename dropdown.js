var jsondata = {
  "Disciplinas": {
    "Estudo Direcionados": ["Projeto final de Modelagem e Simulação", "Projeto Final de Matemática da variação", "Projeto Final de Matemática Multivariada"],
    "Eletrônica": ["Projeto Final de Modelagem e Controle", "Projeto Final de Acionamentos Elétricos", "Estação Metereológica"],
    "Computação": ["Projeto Final de Design de Software", "Projeto Final de Co-Design de Aplicativos"],
    "Inovadores": ["Inovação incremental para empresa existente", "Melhoria para carroças de catadores"],
    "Materiais": ["Projeto Final de Desconstruindo a Matéria"],
    "Administração": ["Modelo de negócio para startup nova"],
    "Design": ["Girafa do Job Rotation"],
    "Desafios": ["Cases de Grandes Desafios de Engenharia"],
    "Análise de Dados": ["Projeto Final de Ciência dos Dados"]
  }
};

jsondata = jsondata["Disciplinas"]


// function preload() {
// jsondata = loadJSON("codesign.json");
// jsondata = jsondata["Disciplinas"];

//
//     console.log("Loaded");
// // );
//
// }
// }
// function setup() {
document.addEventListener("DOMContentLoaded", done);

function done() {


for (var item in jsondata) {

  var d = document.createElement("DIV");
  d.setAttribute("class", "dropdown-inside");


  var btn = document.createElement("BUTTON");
  btn.setAttribute("class", "dropbtn-inside");
  btn.appendChild(document.createTextNode(item));


  var d2 = document.createElement("DIV");
  d2.setAttribute("class", "dropdown-content-inside");


  for (var value of jsondata[item]) {
    var a = document.createElement('a');
    a.appendChild(document.createTextNode(value));
    a.setAttribute("href", value + ".html");
    d2.appendChild(a);
    // document.body.appendChild(a);
  }
  btn.appendChild(d2);
  d.appendChild(btn);
  document.getElementsByClassName('dropdown-content')[0].appendChild(d);

}
}


// noCanvas();
// noLoop();
// }
