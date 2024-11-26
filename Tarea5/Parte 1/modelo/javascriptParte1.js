
/**
 * Metodo que nos comprueba
 */
function pulsarEnviar(){
    
    //Reseteamos los errores

    document.getElementById("errores").innerHTML='';

    /**
     * Si el Nombre no es vacío
     */
    if(document.getElementById("name").value!=''){

        let nombre = document.getElementById("name").value;
        let val_nom = validarNombre(nombre);

        alert(val_nom);

        if(val_nom==""){

            document.getElementById("name").className="";

        }
        else{
            document.getElementById("name").className="error";

            let parrafo = document.createElement("p");
            parrafo.textContent = "- "+val_nom;
            document.getElementById("errores").appendChild(parrafo);
        }   

    }
    else{
        document.getElementById("name").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido el Nombre.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si el apellido no es vacío
     */
    if(document.getElementById("surname").value!=''){

        let surname = document.getElementById("surname").value;

        document.getElementById("surname").className="";

    }
    else{
        document.getElementById("surname").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido los Apellidos.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si el dni no es vacío
     */
    if(document.getElementById("dni").value!=''){

        let dni = document.getElementById("dni").value;

        document.getElementById("dni").className="";

    }
    else{
        document.getElementById("dni").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido el DNI.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si la nacionalidad no es vacía
     */
    if(document.getElementById("nacionalidad").value!=''){

        let nombre = document.getElementById("nacionalidad").value;

        document.getElementById("nacionalidad").className="";

    }
    else{
        document.getElementById("nacionalidad").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido la Nacionalidad.";
        document.getElementById("errores").appendChild(parrafo);
    }
    
    /*
     * Si la Titulacion no es vacía
     */
    if(document.getElementById("titulacion").value!=''){

        let nombre = document.getElementById("titulacion").value;

        document.getElementById("titulacion").className="";

    }
    else{
        document.getElementById("titulacion").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido la Titulación.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si la fecha no es vacío
     */
    if(document.getElementById("fecha").value!=''){

        let fecha = document.getElementById("fecha").value;

        document.getElementById("fecha").className="";

    }
    else{
        document.getElementById("fecha").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido la Fecha.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si el Telefono no es vacío
     */
    if(document.getElementById("telefono").value!=''){

        let nombre = document.getElementById("telefono").value;

        document.getElementById("telefono").className="";

    }
    else{
        document.getElementById("telefono").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido el Teléfono.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si el Email no es vacío
     */
    if(document.getElementById("email").value!=''){

        let email = document.getElementById("email").value;

        document.getElementById("email").className="";

    }
    else{
        document.getElementById("email").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido el Email.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si el Curso no es vacío
     */
    if(document.getElementById("curso").value!=''){

        let curso = document.getElementById("curso").value;

        document.getElementById("curso").className="";

    }
    else{
        document.getElementById("curso").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido el Curso.";
        document.getElementById("errores").appendChild(parrafo);
    }
    
    /**
     * Si no hay erroes
     */
    
    
    this.event.preventDefault();
}

/*function resetearFormulario(){
    let formulario = document.getElementsByTagName("form");
    alert();
}*/

/**** Metodos de control de los datos ****/

/**Correcto
 * Metodo que comprueba que el nombre tiene de 2 a 20 caracteres
 *
 * @param {String} cadena
 * @returns {string}
 */
function validarNombre(cadena){
    
    let cadena_aux = cadena.trim(), error="";
    
    cadena_aux = cadena_aux.split(' ');

    cadena_aux = new String(cadena_aux);
    /**
     * Si hay de 2 a 20 caracteres 
     */
    if(cadena_aux.length>=2||cadena_aux.length<=20){


        let band = validarPalabra(cadena_aux);

        /**
         * Si band es false
         */
        if(band==false){
            error = "El nombre no contiene vocales."
        }

    }
    else{
        error = "El tamaño del nombre no es válido.";
    }

    return error;

}

/**Correcto
 * Metodo que comprueba si una palabra tiene 3 o mas caracteres y al menos 1 vocal
 *
 * @param {String} cadena
 * @returns {boolean}
 */
function validarPalabra(cadena){
    let vocales = "aeiou";

    /*Eliminamos los espacios de los extremos*/
    cadena = cadena.trim();

    /**
     * Si la longitud es mayor o igual a 2
    **/
    if(cadena.length >= 2){

        cadena = cadena.toLowerCase();

        for(let caracter of cadena){

            /**
             * Si vocales contiene el caracter
            **/
            if(vocales.search(caracter)>-1){
                return true;
            }
        }
    }
    return false;
}