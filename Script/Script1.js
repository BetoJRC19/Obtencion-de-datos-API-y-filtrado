// JavaScript source code
function fnAPI() {
    //filtrar por valor selecionado
    var selector = document.getElementById("selector").value;
    var buscar = document.getElementById("txtsearch").value;
    fetch("https://6490d2e72f2c7ee6c2c7861d.mockapi.io/api/autenticacion/Listado?" + selector + "=" + buscar)
        .then(response => response.json())
        .then(json => {
            //acá es si es exitosa la comunicación
            var tabla = document.getElementById("contTabla")
            tabla.innerHTML = "";
            fnimprimir(json);
            fnrenombrar();
            console.log(json);
        })
      .catch(error => {
            //acá se muestra si da error
            console.log("Error" + error);
        });

}

function fnimprimir(json) {
        var tablaConten = document.getElementById("contTabla");
        var tabla = document.createElement("table");
        tablaConten.appendChild(tabla);
        var encabezado = document.createElement("tr");
        tabla.appendChild(encabezado);
        for (var element in json[0]) {
            var th = document.createElement("th")
            th.textContent = element;
            if (th.textContent !== "id") {
                encabezado.appendChild(th);
            }
        }
        for (var i = 0; i < json.length; i++) {
            //crea la fila y la agrega
            var fila = document.createElement('tr');
            tabla.appendChild(fila);
            //se crea las celdas
            for (var key in json[i]) {
                if (key !== "id") {
                    var celda = document.createElement('td');
                    celda.textContent = json[i][key];
                    //agregamos a la fila
                    fila.appendChild(celda);
                }
            }
        }
    
}

function fnrenombrar() {
    var tabla = document.getElementById("contTabla");
    var encabezado = tabla.getElementsByTagName("th");
    encabezado[4].textContent = "Correo Electr\u00F3nico";
}