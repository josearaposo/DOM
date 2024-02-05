
    // Obtener el elemento donde mostraremos la representación del DOM
    var pagina = document.getElementById('dom');

  
    function representarDOM() {
      var documento = document;

      var elementoUl = documento.createElement('ul');

      function agregarNodo(elemento, padre) {
        var elementoLi = documento.createElement('li');
        elementoLi.textContent = elemento.nodeName;
        
        if (elemento.attributes && elemento.attributes.length > 0) {
          var atributosUl = documento.createElement('ul');
          for (var i = 0; i < elemento.attributes.length; i++) {
            var atributoLi = documento.createElement('li');
            atributoLi.textContent = elemento.attributes[i].name + ': ' + elemento.attributes[i].value;
            atributosUl.appendChild(atributoLi);
          }
          elementoLi.appendChild(atributosUl);
        }

        padre.appendChild(elementoLi);

        // Recorrer los hijos
        if (elemento.childNodes && elemento.childNodes.length > 0) {
          var hijosUl = documento.createElement('ul');
          for (var j = 0; j < elemento.childNodes.length; j++) {
            agregarNodo(elemento.childNodes[j], hijosUl);
          }
          elementoLi.appendChild(hijosUl);
        }
      }

      agregarNodo(documento, elementoUl);

      pagina.appendChild(elementoUl);
    }

    // Llamar a la función al cargar la página
    window.onload = function() {
      representarDOM();
    };
