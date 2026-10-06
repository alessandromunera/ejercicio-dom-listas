let lista = document.getElementById("lista");
let li1 = document.createElement("li");
let texto1 = document.createTextNode("comprar")

li1.appendChild(texto1);

lista.appendChild(li1);

let li2 = document.createElement("li");
let texto2= document.createTextNode("manzana");

li2.appendChild(texto2);

lista.appendChild(li2);

let lista = document.getElementById("lista");

let tareas = ["comprar", "barrer", "alimentar gato", "colada"];

for (let i = 0; i < tareas.length; i++) {

    let li = document.createElement("li");

    let texto = document.createTextNode(tareas[i]);

    li.appendChild(texto);

    lista.appendChild(li);
}


