//VARIABLES GLOBALES
var coders = [];
//FUNCIONES
function Coder(name, photo){
  this.name = name;
  this.photo = photo;
}
function loadCoders () {
  coders.push(new Coder("Fiorella Quispe", "assets/img/students/1.png"));
  coders.push(new Coder("Lourdes Vilchez", "assets/img/students/2.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/3.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/4.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/5.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/6.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/7.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/8.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/9.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/10.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/11.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/12.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/13.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/14.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/15.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/16.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/17.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/18.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/19.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/20.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/21.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/22.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/23.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/24.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/25.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/26.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/27.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/28.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/29.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/30.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/31.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/32.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/33.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/34.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/35.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/36.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/37.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/38.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/39.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/40.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/41.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/42.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/43.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/44.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/45.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/46.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/47.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/48.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/49.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/50.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/51.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/52.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/53.png"));
  coders.push(new Coder("Leydi Maldonado", "assets/img/students/54.png"));
}
function createCoderFigure(parent, photoName, urlImage){
  var figure = document.createElement("figure");
  var img = document.createElement("img");
  var figcaption = document.createElement("figcaption");
  var span = document.createElement("span");
  figcaption.setAttribute("class", "center");
  img.setAttribute("class", "img-box");
  img.setAttribute("src",urlImage);
  img.setAttribute("alt",photoName);
  span.appendChild(document.createTextNode(photoName));
  figcaption.appendChild(span);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  parent.appendChild(figure);
}
function printAllCoderFigure(container){
  coders.forEach(function(coder){
      createCoderFigure(container, coder.name, coder.photo);
  });
}
