// Obtener el elemento Input

const input = document.getElementById('image-input'); 

// Obtener el elemento div para mostrar!

const fileImageDiv = document.getElementById('file-image');

// Obtener el elemento div para mostrar informacion!

const fileInfoDiv = document.getElementById('file-info');

// Agregar un evento para llamar a la funcion cuando se selecciona 
// un archivo!

input.addEventListener('change', function() {
    // Limpiar los divs
    fileImageDiv.innerHTML = '';
    fileInfoDiv.innerHTML = '';

    // Verificar si se ha seleccionado un archivo

    if(input.files.length > 0){
        // Obtener el primer archivo
        
        const file = input.files[0];

        // Crear elementos TAGS HTML para mostrar la informacion!
        const fileNameParagraph = document.createElement('p');
        fileNameParagraph.textContent = 'Nombre del archivo: ' + file.name;

        const fileTypeParagraph = document.createElement('p');
        fileTypeParagraph.textContent = 'Tipo del archivo: ' + file.type;

        const fileSizeParagraph = document.createElement('p');
        fileSizeParagraph.textContent = 'Tamaño del archivo: ' + file.size + ' bytes';

        // Agregar los elementos al div informacion file-info!

        fileInfoDiv.appendChild(fileNameParagraph);
        fileInfoDiv.appendChild(fileTypeParagraph);
        fileInfoDiv.appendChild(fileSizeParagraph);

        // Verificar si el archivo es una imagen

        if(file.type.startsWith('image/')){
            // Crear un objeto FileReader para leer el contenido de la
            // imagen
            const reader = new FileReader();

            // Configurar la accion que se realizara cuando se complete

            reader.onload = function(e){
                // crear un elemento TAG HTML imagen!
                const imageElement = document.createElement('img');
                // Colocar la URL de la imagen
                imageElement.src = e.target.result;
                // Agregar la clase img / Para los estilos!
                imageElement.classList.add('img');
                // Agregar la imagen al DIV
                fileImageDiv.appendChild(imageElement); 
            };

            // Leer el contenido como una URL de datos
            reader.readAsDataURL(file);
        }

    } else {
        // Si no se ha seleccionado algun archivo, mostrar el mensaje!
        fileInfoDiv.textContent = 'No se selecciono ningun archivo.';
    }

});