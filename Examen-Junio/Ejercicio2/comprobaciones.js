function pulsar_enviar(){

    //Reseteamos los errores

    document.getElementById("errores").innerHTML='';

    let errores = "";

    /**
     * Si el Nombre no es vacío
     */
    if(document.getElementById("name").value!=''){

        let nombre = document.getElementById("name").value;

        if(validarPalabra(nombre)){

            document.getElementById("name").className="";

        }
        else{
            document.getElementById("name").className="error";

            let parrafo = document.createElement("p");
            parrafo.textContent = "- El nombre no esta en un formato válido.";
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

        let error = comprobarApellidos(surname);

        if(error!=''){

            document.getElementById("surname").className="error";

            let parrafo = document.createElement("p");
            parrafo.textContent = error;
            document.getElementById("errores").appendChild(parrafo);
        }
        else{

            document.getElementById("surname").className="";

        }

    }
    else{
        document.getElementById("surname").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido los Apellidos.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si el genero no es vacío
     */
    if(document.getElementById("genero").value!=''){

        let genero = document.getElementById("genero").value;

        genero = genero.toLowerCase();

        if(genero == "masculino" || genero == "femenino"){
            document.getElementById("genero").className="";
        }
        else{
            document.getElementById("genero").className="error";

            let parrafo = document.createElement("p");
            parrafo.textContent = "- El genero introducido no es valido.";
            document.getElementById("errores").appendChild(parrafo);
        }

    }
    else{
        document.getElementById("genero").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido el Genero.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si la estatura no es vacía
     */
    if(document.getElementById("estatura").value!=''){

        let estatura = document.getElementById("estatura").value;

        estatura = parseInt(estatura);

        if(isNaN(estatura)){
            document.getElementById("estatura").className="error";

            let parrafo = document.createElement("p");
            parrafo.textContent = "- No es un valor valido la estatura.";
            document.getElementById("errores").appendChild(parrafo);
        }
        else{

            if(estatura>=160 && estatura<=230){
                document.getElementById("estatura").className="";
            }
            else{
                document.getElementById("estatura").className="error";

                let parrafo = document.createElement("p");
                parrafo.textContent = "- La estatura sale del rango permitido.";
                document.getElementById("errores").appendChild(parrafo);
            }
            
        }

    }
    else{
        document.getElementById("estatura").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido la Estatura mínima.";
        document.getElementById("errores").appendChild(parrafo);
    }
    
    /*
     * Si la edad no es vacía
     */
    if(document.getElementById("edad").value!=''){

        let edad = document.getElementById("edad").value;

        edad = parseInt(edad);

        if(isNaN(edad)){
            document.getElementById("edad").className="error";

            let parrafo = document.createElement("p");
            parrafo.textContent = "- No es un valor valido la Edad.";
            document.getElementById("errores").appendChild(parrafo);
        }
        else{

            if(edad>=18 && edad<=40){
                document.getElementById("edad").className="";
            }
            else{
                document.getElementById("edad").className="error";

                let parrafo = document.createElement("p");
                parrafo.textContent = "- La edad no cumple con el rango.";
                document.getElementById("errores").appendChild(parrafo);
            }
            
        }

    }
    else{
        document.getElementById("edad").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido la Edad.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si la desempleo no es vacío
     */
    if(document.getElementById("desempleo").value!=''){

        let desempleo = document.getElementById("desempleo").value;

        desempleo = desempleo.toLowerCase();

        if(desempleo=='si' || desempleo=='no'){
            document.getElementById("desempleo").className="";
        }
        else{
            document.getElementById("desempleo").className="error";

            let parrafo = document.createElement("p");
            parrafo.textContent = "- El valor de Desempleo no es Válido.";
            document.getElementById("errores").appendChild(parrafo);
        }

    }
    else{
        document.getElementById("desempleo").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido si esta en Desempleo.";
        document.getElementById("errores").appendChild(parrafo);
    }

    /**
     * Si el titulacion no es vacío
     */
    if(document.getElementById("titulacion").value!=''){

        let titulacion = document.getElementById("titulacion").value;

        titulacion = titulacion.toLowerCase();

        if(titulacion.length!=5){
            document.getElementById("titulacion").className="error";

            let parrafo = document.createElement("p");
            parrafo.textContent = "- La Titulación no contiene 5 caracteres.";
            document.getElementById("errores").appendChild(parrafo);
        }
        else{

            let letras = titulacion.substring(0,3);
            
            if(letras=='uni' || letras=='bac' || letras=='fps'){

                let numeros = titulacion.substring(3,titulacion.length);

                numeros = parseInt(numeros);

                if(isNaN(numeros)){
                    document.getElementById("titulacion").className="error";

                    let parrafo = document.createElement("p");
                    parrafo.textContent = "- No se han introducido los digitos válidos en la Titulacion.";
                    document.getElementById("errores").appendChild(parrafo);
                }
                else{
                    document.getElementById("titulacion").className="";
                }

            }
            else{
                document.getElementById("titulacion").className="error";

                let parrafo = document.createElement("p");
                parrafo.textContent = "- No se han introducido los 3 caracteres válidos en la Titulacion.";
                document.getElementById("errores").appendChild(parrafo);
            }

        }

    }
    else{
        document.getElementById("titulacion").className="error";

        let parrafo = document.createElement("p");
        parrafo.textContent = "- No se ha introducido la Titulación.";
        document.getElementById("errores").appendChild(parrafo);
    }


    /**
     * Controlaremos los campos que son dependientes los unos de los otros
     */

    if(document.getElementById("genero").value!='' &&document.getElementById("estatura").value!=''){
        
        switch(genero){

            case 'masculino':

                if(estatura<165){
                    document.getElementById("estatura").className="error";

                    let parrafo = document.createElement("p");
                    parrafo.textContent = "- No cumnple el minimo de estatura siendo varón.";
                    document.getElementById("errores").appendChild(parrafo);
                }
                else{
                    document.getElementById("estatura").className="";
                }

                break;

            case 'femenino':

                if(estatura<160){
                    document.getElementById("estatura").className="error";

                    let parrafo = document.createElement("p");
                    parrafo.textContent = "-No cumnple el minimo de estatura siendo mujer.";
                    document.getElementById("errores").appendChild(parrafo);
                }
                else{
                    document.getElementById("estatura").className="";
                }

                break;

        }
    }
    else{
        
    }

    if(document.getElementById("desempleo").value=='si'){
        alert("Se han introducido los valores de forma correcta. DEBERA ABONAR  0€");
    }
    else if(document.getElementById("desempleo").value=='no'){
        alert("Se han introducido los valores de forma correcta. DEBERA ABONAR  35€");
    }

    this.event.preventDefault();
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

/**
 * Correcto
 * @param {string} cadena 
 * @returns 
 */
function comprobarApellidos(cadena){

    let cadena_aux = cadena.trim(), error="";
    cadena_aux = cadena_aux.split(' ');

    /**
     * Si hay dos elementos en el array
     */
    if(cadena_aux.length==2){


        let band = true;
        for(let i=0;i<cadena_aux.length;i++){
            band = validarPalabra(cadena_aux[i]);
        }

        /**
         * Si band es false
         */
        if(band==false){
            error = "- Los Apellidos no cumplen el formato."
        }

    }
    else{
        error = "- No se han introducido dos Apellidos.";
    }

    return error;
}