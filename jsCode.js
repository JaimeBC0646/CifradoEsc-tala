function encryptWord() {
    // Se obtiene el texto a cifrar
    var text = document.getElementById("txtWordEncrypt").value;
    // Se obtiene el número de filas y columnas
    var rows = parseInt(document.getElementById("rowsEncrypt").value);
    var columns = parseInt(document.getElementById("columnsEncrypt").value);

    if ((rows * columns) < text.length) { document.getElementById("txtAlert").innerHTML = "Es posible que no se muestre el cifrado completo <br> El producto de las filas * columnas es inferior a la longitud del texto introducido"; }
    else { document.getElementById("txtAlert").innerHTML = ""; }

    // Declaración de la matriz (texto cifrado)
    var matriz = new Array(rows); // Filas
    for (var i = 0; i < rows; i++) {
        matriz[i] = new Array(columns);
    }

    // Llenado del texto en la matriz (cifrado)
    var position = 0; // Posición actual, incrementará para recorrer caracteres del texto a cifrar
    for (var column = 0; column < matriz[0].length; column++) {
        for (var row = 0; row < matriz.length; row++) {
            if (position < text.length) {
                matriz[row][column] = text[position]; // Se guarda el valor del carácter del texto
                position++;
            }
        }
    }

    // Recorrer matriz (Cifrado)
    var cad = "";
    for (var row = 0; row < matriz.length; row++) {
        for (var column = 0; column < matriz[0].length; column++) {
            cad += matriz[row][column];
        }
    }

    document.getElementById("txtEncrypt").innerHTML = "Texto cifrado: " + cad;
}





function dcryptWord() {
    // Se obtiene el texto a cifrar
    var text = document.getElementById("txtWordDecrypt").value;
    // Se obtiene el número de filas y columnas
    var rows = parseInt(document.getElementById("rowsDecrypt").value);
    var columns = parseInt(document.getElementById("columnsDecrypt").value);

    if ((rows * columns) < text.length) { document.getElementById("txtAlert2").innerHTML = "Es posible que no se muestre el mensaje completo <br> El producto de las filas * columnas es inferior a la longitud del texto introducido"; }
    else { document.getElementById("txtAlert2").innerHTML = ""; }

    // Declaración de la matriz (texto cifrado)
    var matriz = new Array(columns); // Filas
    for (var i = 0; i < columns; i++) {
        matriz[i] = new Array(rows);
    }

    // Llenado del texto en la matriz (Descifrado)
    var position = 0; // Posición actual, incrementará para recorrer caracteres del texto a cifrar
    for (var column = 0; column < matriz.length; column++) {
        for (var row = 0; row < matriz[0].length; row++) {
            if (position < text.length) {
                matriz[column][row] = text[position]; // Se guarda el valor del carácter del texto
                position++;
            }
        }
    }

    // Recorrer matriz (Texto)
    var cad = "";
    for (var row = 0; row < matriz[0].length; row++) {
        for (var column = 0; column < matriz.length; column++) {
            cad += matriz[column][row];
        }
    }
    
    document.getElementById("txtDecrypt").innerHTML = "Texto descifrado: " + cad;
}