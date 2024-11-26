/****** Clases necesarias ******/

/**** Clase Empresa ****/
class Empresa {

    /**
     * Clase Empresa que contiene todas la información de la empresa y sus trabajadores.
     * @version 1
     * @author Juan José Ruiz Ferrera <jruizferrera@gmail.com>
     */

    /**
     * @constructor
     * @param {[]} atributos 
     */
    constructor (atributos){

        /**
         * Atributo con el nombre corporativo de la empresa.
         * @type {String}
        */
        this.nom_com = atributos[0];

        /**
         * Atributo con el cif de la empresa.
         * @type {String}
        */
        this.cif = atributos[1];

        /**
         * Atributo con la dirección de la empresa.
         * @type {String}
        */
        this.direccion = atributos[2];

        /**
         * Atributo con el telefono de contacto de la empresa.
         * @type {Number}
        */
        this.tel = atributos[3];

        /**
         * Atributo con el nombre del administrador de la empresa.
         * @type {String}
        */
        this.nom_admin = atributos[4];

        /**
         * Array que contiene los coches de la empresa
         * @type {Array}
        */
        this.vehiculos = new Array();
    }

    /**
     * Metodo para agregar un vehiculo para la empresa
     * @param {Vehiculo} vehiculo
     */
    agregarVehiculo(vehiculo){
        this.vehiculos.push(new Vehiculo(vehiculo));
    }

    /**
     * Método que elimina a un trabajador de la empresa.
     * @param {String} matricula 
     */
    eliminarVehiculo(matricula){

        this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.matricula != matricula);

    }

    
    /**
     * Metodo que retorna un objeto vehiculo
     *
     * @param {string} matricula
     * @returns {Vehiculo}
     */
    obtenerVehiculo(matricula){
        return this.vehiculos.find(element => element.matricula == matricula);
    }

    /**
     * Metodo que lista los vehiculos de la empresa
     * 
     * @returns {String}
     * 
     */
    imprimeVehiculos(){

        let impresion = "";
        let sumatorio = 0;

        for(let i=0;i<this.vehiculos.length;i++){
            let vehiculo = this.vehiculos[i];
            
            impresion += (i+1)+
            ". Matrícula: "+vehiculo.matricula+
            ", Modelo: "+vehiculo.modelo+
            ", Año Fabricación: "+vehiculo.a_fabricacion.getDate()+"/"+vehiculo.a_fabricacion.getMonth()+"/"+vehiculo.a_fabricacion.getFullYear()+
            ", Kilómetros: "+vehiculo.kilometros+".\n";
            sumatorio+=vehiculo.kilometros;
        }

        impresion += "\n Media: "+sumatorio/this.vehiculos.length;

        return impresion;

    }

    /**
     * Método que busca un trabajador y modifica el puesto
     * @param {String} matricula 
     * @param {Number} kilometros 
     */
    actualizarKilometros(matricula,kilometros){

        let vehiculo = this.vehiculos.find(element => element.matricula == matricula);
        vehiculo.kilometros = kilometros;

    }

    /*** Metodos añadidos ***/

    /**
     * Metodo que comprueba que existe el vehiculo en la empresa
     *
     * @param {String} matricula
     * @return Boolean
     */
    existeVehiculo(matricula){
        return this.vehiculos.some(element => element.matricula == matricula);
    }

    
    /**
     * Metodo que lista los atributos de la empresa
     *
     * @returns {String}
     */
    listarEmpresa() {
        
        return "Nombre Corpotativo: "+this.nom_com+
        ", CIF: "+this.cif+
        ", Dirección: "+this.direccion+
        ", Telefono: "+this.tel+
        ", Administrador: "+this.nom_admin+".";

    }

}

/**** Clase Vehiculo ****/
class Vehiculo{

    
    /** Correcto
     * Clase Coche contiene todas la información deL COCHE.
     * @version 1
     * @author Juan José Ruiz Ferrera <jruizferrera@gmail.com>
     */

    /**
     * Creates an instance of Vehiculos.
     *
     * @constructor
     * @param {Array} atributos
     */
    constructor(atributos){

        /**
         * Atributo matricula del vehiculo
         *
         * @type {String}
        */
        this.matricula = atributos[0];
        
        /**
         * Atributo modelo del vehiculo
         *
         * @type {String}
        */
        this.modelo = atributos[1];

        /**
         * Atributo año de fabricacion del vehiculo
         *
         * @type {Date}
        */
        this.a_fabricacion = atributos[2];

        /**
         * Atributo kilometros del vehiculo
         *
         * @type {Number}
        */
        this.kilometros = atributos[3];

    }

}

/******* Menu *******/

let empresas = new Array();

menu();

/**Correcto
 * Metodo que muestra el menu en el prompt
 */
function menu(){

    let menu = "¡¡¡¡¡¡ Menu !!!!!!\n\n";
    menu += "  1. Insertar datos automaticamente.\n";
    menu += "  2. Insertar Empresa.\n";    
    menu += "  3. Insertar Vehículo.\n";
    menu += "  4. Mostrar Vehículos.\n";
    menu += "  5. Eliminar Vehículo.\n";
    menu += "  6. Actualizar Kilómetros.\n"
    menu += "  7. Salir.\n\n";
    menu += "Introduzca opción:\n";

    
    do{
        var opcion = prompt(menu);
        
        /**
         * Si opcion es null
         */
        if(opcion!=null){
            
            opcion = parseInt(opcion);

            /**
             * Si la opcion es nan
             */
            if(isNaN(opcion)){
                alert("No se ha seleccionado ninguna opción.");
            }
            else{

                /**
                 * Si la opcion es mayor que 0 y menor que 8
                 */
                if(opcion>0&&opcion<8){

                    switch(opcion){
                        case 1:
                            insertarDatosAutomaticos();
                            break;
                        case 2:
                            insertarEmpresa();
                            break;
                        case 3:
                            insertarVehiculo();
                            break;
                        case 4:
                            mostrarVehiculos();
                            break;
                        case 5:
                            bajaVehiculo();
                            break;
                        case 6:
                            modificarKilometros();
                            break;
                        case 7:
                            opcion = null;
                            alert("... Saliendo ...");
                            break;
                    }

                }
                else{
                    alert("El valor de la opción no es válida.");
                }

            }

        }

    }while(opcion!=null);

}

/**** Metodos principales del menu ****/

/****** Opcion 1 del menu ******/

/** Correcto
 * Método que inserta de foma automática datos
 */
function insertarDatosAutomaticos(){
    
    let fecha = new Date();

    let emp1= new Empresa(["Empresa1","a01012525","AVENIDA EUROPA 5 MADRID",912323234,"LUIS GOMEZ"]);
    let emp2= new Empresa(["Empresa2","a20038915","AVENIDA EUROPA 7 MADRID",912323232,"LAURA SIMOES"]);

    fecha.setDate(1);
    fecha.setMonth(5);
    fecha.setFullYear(2002);
    let coche1 = ["0347-XDW","Barracuda",fecha,1500];

    fecha.setDate(6);
    fecha.setMonth(9);
    fecha.setFullYear(2000);
    let coche2 = ["7592-GPH","Mustang",fecha,200000];

    fecha.setDate(15);
    fecha.setMonth(3);
    fecha.setFullYear(2006);
    let coche3 = ["2483-THP","Punto",fecha,30000];

    emp1.agregarVehiculo(coche1);
    emp1.agregarVehiculo(coche2);
    emp1.agregarVehiculo(coche3);

    fecha.setDate(25);
    fecha.setMonth(10);
    fecha.setFullYear(2014);
    let coche4 = ["4725-LPT","Stilo",fecha,2000];

    fecha.setDate(19);
    fecha.setMonth(6);
    fecha.setFullYear(2001);
    let coche5 = ["9435-PTG","Arona",fecha,15000];

    fecha.setDate(30);
    fecha.setMonth(11);
    fecha.setFullYear(2010);
    let coche6 = ["3756-KLD","A3",fecha,25000];

    emp2.agregarVehiculo(coche4);
    emp2.agregarVehiculo(coche5);
    emp2.agregarVehiculo(coche6);

    empresas.push(emp1);
    empresas.push(emp2);

    alert("Se han añadido 2 empresas y 3 coches por cada una.");
}

/****** Opcion 2 del menu ******/

/**Correcto
 * Metodo que añade una empresa
 */
function insertarEmpresa(){

    let empresa = [], cancelar = 0, cont = 0;
    
    /**
     * Mientras cancelar no sea null
     */
    do{

        /**
         * Si el contador no es 5
         */
        if(cont!=5){

            /**Correcto
             * Si el cif no se ha almacenado aún
             */
            if(empresa[1]==undefined){
            
                let cif_emp = prompt(listarEmpresas()+"\nIntroduzca el CIF de la nueva empresa:");
                
                /**
                 * Si no se ha pulsado cancelar
                 */
                if(cif_emp!=null){
                    
                    cif_emp = validarCIF(cif_emp);

                    /** Si la empresa existe */
                    if(existeEmpresa(cif_emp)){
                        alert("Ya existe la empresa.");
                        cancelar = null;
                    }
                    else{
        
                        /** Si es válido el cif */
                        if(cif_emp!=""){
                            empresa[1]=cif_emp;
                            cont++;
                        }
        
                    }
                }
                else{
                    cancelar = null;
                }
            }
    
            /**Correcto
             * Si no se ha introducido el mombre de la empresa, 
             * ni se ha pulsado cancelar 
             * y ya se ha introducido el primer valor
             */
            if(empresa[0]==undefined&&cont==1&&cancelar!=null){
                
                let nom_emp = prompt("Introduzca el nombre corporativo (10 a 20 caracteres):");
        
                if(nom_emp!=null){

                    if(nom_emp.length>9&&nom_emp.length<21){
                        empresa[0]=nom_emp;
                        cont++;
                    }
                    else{
                        alert("El tamaño no cumple con el tamaño.");
                    }

                }
                else{
                    cancelar = null;
                }
            }
            
            /**Correcto
             * Si no se ha introducido la direccion, 
             * ni se ha pulsado cancelar 
             * y ya se ha introducido los dos valores anteriores
             */
            if(empresa[2]==undefined&&cont==2&&cancelar!=null){
                
                let dir_emp = prompt("(Tipo y nombre de Vía, Número, Piso y puerta (opcional), Código Postal, Localidad, Provincia)\n\nIntroduzca la dirección de la empresa:");
        
                if(dir_emp!=null){

                    let error = validarDireccion(dir_emp);
                    if(error==""){
                        empresa[2]=dir_emp;
                        cont++;
                    }
                    else{
                        alert(error);
                    }
                    
                }
                else{
                    cancelar = null;
                }
            }
    
            /**Correcto
             * Si no se ha introducido el telefono, 
             * ni se ha pulsado cancelar 
             * y ya se ha introducido los tres valores anteriores
             */
            if(empresa[3]==undefined&&cont==3&&cancelar!=null){
                let tel_emp = prompt("Introduzca el nombre teléfono (9 dígitos):");
        
                /**
                 * Si no se ha pulsado cancelar
                 */
                if(tel_emp!=null){

                    let error = validarTelefono(tel_emp);

                    /**
                     * Si no hay errores de la validacion
                     */
                    if(error==""){
                        empresa[3]=tel_emp;
                        cont++;
                    }
                    else{
                        alert(error);
                    }
                    
                }
                else{
                    cancelar = null;
                }
            }
            
            /**Correcto
             * Si no se ha introducido el mombre del administrador, 
             * ni se ha pulsado cancelar 
             * y ya se ha introducido los cuatro valores anteriores
             */
            if(empresa[4]==undefined&&cont==4&&cancelar!=null){
                let nom_admin_emp = prompt("Introduzca el nombre del administrador (1 nombre y 1 apellido):");
        
                /**
                 * Si no se ha pulsado cancelar
                 */
                if(nom_admin_emp!=null){

                    let error = validarNombre(nom_admin_emp);

                    /**
                     * Si no hay errores
                     */
                    if(error==""){
                        empresa[4]=nom_admin_emp;
                        cont++;
                    }
                    else{
                        alert(error)
                    }

                }
                else{
                    cancelar = null;
                }
            }

        }
        else{
            empresas.push(new Empresa(empresa));
            alert("Se ha añadido la empresa.");
            cancelar = null;
        }
        
    }while(cancelar!=null);
}

/****** Opcion 3 del menu ******/

/**Correcto
 * Metodo que añade un vehiculo a una empresa existente
 */
function insertarVehiculo(){
    
    /**
     * Si no hay empresas
     */
    if(empresas.length==0){
        alert("No existen empresas, no se puede añadir ningun vehiculo");
    }
    else{

        let cif_emp = prompt(listarEmpresas()+"\nIntroduzca el CIF de la empresa:");

        /**
         * Si no existe la empresa con el cif dado
         */
        if(!existeEmpresa(cif_emp)){
            alert("No existe la empresa.\n\n...Volviendo al menu...");
        }
        else{

            let cancelar = 0, cont=0, vehiculo = [];            

            do{

                /**
                 * Si cont no es 3
                 */
                if(cont!=4){

                    /**
                     * Si es con 0 y cancelar no es null
                     */
                    if(cont==0&&cancelar!=null){
                        
                        let matricula = prompt("Introduzca matricula (X-DDDD-X, X-DDDD-XX, XX-DDDD-X, XX-DDDD-XX o DDDD-XXX):");
                        
                        /**
                         * Si no pulsa cancelar
                         */
                        if(matricula!=null){

                            let error = validarMatricula(matricula);
                        
                            /**
                             * Si error es ""
                             */
                            if(error==""){

                                let empresa = obtenerEmpresa(cif_emp);
                                matricula = crearMatricula(matricula);

                                if(empresa.existeVehiculo(matricula)){
                                    alert("El vehiculo ya existe.");
                                }
                                else{
                                    vehiculo[0]=matricula;
                                    cont++;
                                }

                            }
                            else{
                                alert(error);
                            }

                        }
                        else{
                            cancelar=null;
                        }

                        
        
                    }
        
                    /**
                     * Si es con 1  y cancelar no es null
                     */
                    if(cont==1&&cancelar!=null){

                        let fecha = prompt("Introduzaca la fecha de adquisición (DD/MM/YYYY):");

                        /**
                         * Si no se pulsa cancelar
                         */
                        if(fecha!=null){

                            let error = validarFecha(fecha);

                            /**
                             * Si la fecha es valida
                             */
                            if(error==""){
                                        
                                let band = false, aux_fecha = fecha.split("/");

                                if(vehiculo[0].split("-").length==2){

                                    if(aux_fecha[2]>2000){
                                                band=true;
                                    }
                                }
                                else{
                                    if(aux_fecha[2]<=2000){
                                        band=true;
                                    }
                                }

                                if(band){
                                    fecha = crearFecha(fecha);
                                    vehiculo[2]=fecha;
                                    cont++;
                                }
                                else{
                                    alert("La maticula no coincide con el año de matriculación.");
                                }

                            }
                            else{
                                alert(error);
                            }

                        }
                        else{
                            cancelar=null;
                        }

                    }

                    /**
                     * Si es con 1 y cancelar no es null
                     */
                    if(cont==2&&cancelar!=null){
        
                        let modelo = prompt("Introduzca el modelo del vehiculo:");

                        /**
                         * Si no se pulsa cancelar
                         */
                        if(modelo!=null){

                            if(validarPalabra(modelo)){
                                vehiculo[1]=modelo;
                                cont++;
                            }
                            else{
                                alert("El modelo no cumple con las caracteristicas.");
                            }

                        }
                        else{
                            cancelar=null;
                        }

                    }
        
                    /**
                     * Si es con 2 y cancelar no es null
                     */
                    if(cont==3&&cancelar!=null){
        
                        let kilometraje = prompt("Introduzca el kilometraje del vehiculo:");

                        /**
                         * Si no se pulsa cancelar
                         */
                        if(kilometraje!=null){

                            if(!isNaN(kilometraje)){
                                vehiculo[3]=kilometraje;
                                cont++;
                            }
                            else{
                                alert("El modelo no cumple con las caracteristicas.");
                            }

                        }
                        else{
                            cancelar=null;
                        }

                    }
    
                }
                else{

                    let empresa = obtenerEmpresa(cif_emp);
                    empresa.agregarVehiculo(vehiculo);
                    alert("Se ha añadido el vehiculo a la empresa.");
                    cancelar=null;

                }
            }while(cancelar!=null);

        }

    }
}


/****** Opcion 4 del menu ******/

/**Correcto
 * Metodo que muestra los vehiculos de una empresa
 */
function mostrarVehiculos(){

    if(empresas.length==0){
        alert("No existen empresas, no se pueden mostrar vehiculos.");
    }
    else{

        let cancelar = 0;

        do{

            let cif_emp = prompt(listarEmpresas()+"\nIntroduzca el CIF de la nueva empresa:")

            /**
             * Si la empresa no existe
             */
            if(!existeEmpresa(cif_emp)){
                alert("No existe la empresa.");
            }
            else{

                let empresa = obtenerEmpresa(cif_emp);
                alert(empresa.imprimeVehiculos());
                cancelar=null;

            }

        }while(cancelar!=null);

    }

}


/****** Opcion 5 del menu ******/

/**Correcto
 * Metodo que elimina de la empresa el vehiculo
 */
function bajaVehiculo(){

    if(empresas.length==0){
        alert("No existen empresas, no se puede añadir ningun vehiculo");
    }
    else{

        let cancelar = 0;

        do{

            let cif_emp = prompt(listarEmpresas()+"\nIntroduzca el CIF de la nueva empresa:")

            /**
             * Si no existe la empresa
             */
            if(!existeEmpresa(cif_emp)){
                alert("No existe la empresa.");
            }
            else{

                let empresa = obtenerEmpresa(cif_emp);
                let matricula = prompt(empresa.imprimeVehiculos()+"\n\nIntroduce la matricula del vehiculo a dar de baja:");
                
                /**
                 * Si existe el vehiculo
                 */
                if(empresa.existeVehiculo(matricula)){

                    empresa.eliminarVehiculo(matricula);
                    cancelar=null;
                    alert(empresa.imprimeVehiculos());

                }
                else{
                    alert("No existe el vehiculo.");
                }
                
                cancelar=null;
            }

        }while(cancelar!=null);

    }

}


/****** Opcion 6 del menu ******/

/**Correcto
 * Metodo que modifica el kilometraje de un vehiculo
 */
function modificarKilometros(){

    if(empresas.length==0){
        alert("No existen empresas, no se puede añadir ningun vehiculo");
    }
    else{

        let cancelar = 0,cont=0, datos = [];

        do{

            /**
             * Si el cont es 0
             */
            if(cont==0){

                let cif_emp = prompt(listarEmpresas()+"\nIntroduzca el CIF de la nueva empresa:")

                /**
                 * Si no se ha pulsado cancelar
                 */
                if(cif_emp!=null){

                    /**
                     * Si no existe la empresa
                     */
                    if(!existeEmpresa(cif_emp)){
                        alert("No existe la empresa.");
                    }
                    else{
                        datos[0]=obtenerEmpresa(cif_emp);
                        cont++;
                    }
                }
                else{
                    cancelar=null;
                }

            }

            /**
             * Si el cont es 1
             */
            if(cont==1&&cancelar!=null){
                
                let matricula = prompt(datos[0].imprimeVehiculos()+"\n\nIntroduce la matricula del vehiculo para actualizar:");
                
                /**
                 * Si no se ha pulsado cancelar
                 */
                if(matricula!=null){

                    /**
                     * Si existe el vehiculo
                     */
                    if(datos[0].existeVehiculo(matricula)){
        
                        datos[1]=datos[0].obtenerVehiculo(matricula);
                        cont++;
        
                    }
                    else{
                        alert("No existe el vehiculo.");
                    }
                }
                else{
                    cancelar=null;
                }

            }

            /**
             * Si el cont es 2
             */
            if(cont==2&&cancelar!=null){

                let kilometraje = prompt("Introduzca el valor nuevo de kilometraje (debe ser mayor al que ya tiene):");
                            
                kilometraje = parseInt(kilometraje);

                /**
                 * Si kilometraje es nan
                 */
                if(isNaN(kilometraje)){
                    alert("El valor introducido no es un numero.");
                }
                else{

                    /**
                     * Si el kilometraje es mayor que los kilometros del vehiculo
                     */
                    if(datos[1].kilometros<kilometraje){
                        datos[0].actualizarKilometros(datos[1].matricula,kilometraje);
                        alert("Se ha actualizado el kilometraje.");
                        cancelar=null;
                    }
                    else{
                        alert("Los kilometros que se desean introducir son menos de los que el vehiculo ya tiene.");
                    }
                }
            }

        }while(cancelar!=null);
    }

}


/**** Métodos de control de los objetos ****/

/** Correcto
 * Metodo que comprueba si la empresa existe en el sistema
 * 
 * @param {String} cif 
 * @returns Boolean
 */
function existeEmpresa(cif){
    return empresas.some((element) => element.cif == cif);
}

/**Correcto
 * Metodo que busca la empresa con un cif especifico
 * 
 * @param {string} cif 
 * @returns {Empresa} 
 */
function obtenerEmpresa(cif){
    return empresas.find(element => element.cif == cif);
}

/** Correcto
 * Metodo que comprueba que el primer caracter es una letra y el resto son numeros
 *
 * @param {String} cif
 * @returns String
 */
function validarCIF(cif){

    let organización  = "abcdefghklmnpqs";

    /** Si cumple con el tamaño */
    if(cif.length==9){
        let letra = cif.charAt(0);
        let numeros = cif.substring(1,cif.length);

        /** Si el primer valor es una letra */
        if(isNaN(parseInt(letra))){

            /** Si es una letra válida */
            if(organización.includes(letra.toLowerCase())){

                /** Si los 8 últimos valores son numeros */
                if(!isNaN(parseInt(numeros))){
                    return letra.toLowerCase()+numeros;
                }
                else{
                    alert("Los 8 últimos valores no son numeros.");
                }

            }
            else{
                alert("El primer valor no es una letra válida.");
            }

        }
        else{
            alert("El primer valor no es una letra.");
        }

    }
    else{
        alert("Tamaño del cif erroneo.");
    }

    return "";
}

/**Correcto
 * Metodo que comprueba cada campo de la direccion
 *
 * @param {string} direccion
 * @returns {string}
 */
function validarDireccion(direccion){

    let dir_aux = direccion.trim(), error = "";
    dir_aux  = dir_aux.split(',');

    /**
     * Si se han introducido 5 campos
     */
    if(dir_aux.length==5){
        
        for(let i=0;i<dir_aux.length;i++){

            let parte_dir = dir_aux[i].trim();

            /**
             * Comprobamos si es el campo 1 (posicion 0)
             */
            if(i==0){
                
                error += validarVia(parte_dir);

            }

            /**
             * Comprobamos si es el campo 2 (posicion 1)
             */
            if(i==1){
                
                if(isNaN(parseInt(parte_dir))){
                    error += "No se ha introducido numero de portal.\n";
                }

            }

            /**
             * Comprobamos si es el campo 3 (posicion 2)
             */
            if(i==2){
                
                if(parte_dir.length!=5){
                    error += "El formato de codigo postal.\n";
                }
                else if(isNaN(parseInt(parte_dir))){
                    error += "El codigo postal no es numero.\n";
                }

            }

            /**
             * Comprobamos si es el campo 4 (posicion 3)
             */
            if(i==3){
                
                if(!validarPalabra(parte_dir)){
                    error += "La localidad no cumple el formato.\n";
                }

            }

            /**
             * Comprobamos si es el campo 5 (posicion 4)
             */
            if(i==4){
                
                if(!validarPalabra(parte_dir)){
                    error += "La provincia no cumple el formato.\n";
                }

            }

        }

    }
    /**
     * Si se han introducido 6 campos
     */
    else if(dir_aux.length==6){

        for(let i=0;i<dir_aux.length;i++){

            let parte_dir = dir_aux[i].trim();

            /**
             * Comprobamos si es el campo 1 (posicion 0)
             */
            if(i==0){
                
                error += validarVia(parte_dir);

            }

            /**
             * Comprobamos si es el campo 2 (posicion 1)
             */
            if(i==1){
                
                if(isNaN(parseInt(parte_dir))){
                    error += "No se ha introducido numero de portal.\n";
                }

            }

            /**
             * Comprobamos si es el campo 3 (posicion 2)
             */
            if(i==2){
                error += validarPiso(parte_dir);
            }

            /**
             * Comprobamos si es el campo 4 (posicion 3)
             */
            if(i==3){
                
                if(parte_dir.length!=5){
                    error += "El formato de codigo postal.\n";
                }
                else if(isNaN(parseInt(parte_dir))){
                    error += "El codigo postal no es numero.\n";
                }

            }

            /**
             * Comprobamos si es el campo 5 (posicion 4)
             */
            if(i==4){
                
                if(!validarPalabra(parte_dir)){
                    error += "La localidad no cumple el formato.\n";
                }

            }

            /**
             * Comprobamos si es el campo 6 (posicion 5)
             */
            if(i==5){
                
                if(!validarPalabra(parte_dir)){
                    error += "La provincia no cumple el formato.\n";
                }

            }

        }

    }
    else{
        error = "No contiene los campos necesarios.";
    }

    return error;

}

/**Correcto
 * Metodo que comprueba que se ha introducido el tipo de via
 * 
 * @param {string} cadena 
 * @returns {string}
 */
function validarVia(cadena){

    let via=cadena.split(" "), tipos_via="calle avenida lugar", error="";

    /**
     * Si el campo de direccion tiene mas de 2 palabras
     */
    if(via.length>=2){
        
        let minusculas = via[0].toLowerCase();

        /**
         * Si el campo direccion no contiene alguna de las palabras de tipos_via
         */
        if(!tipos_via.includes(minusculas)){
            error = "No se ha introducido el tipo de via\n";
        }

    }
    else{
        error = "Falta información del tipo de via y nombre\n";
    }

    return error;

}

/**Correcto
 * Metodo que comprueba la cadena de piso y puerta
 *
 * @param {String} cadena
 * @returns {string}
 */
function validarPiso(cadena){
    
    let error = "";

    /**
     * Si la cadena es menos que 3
     */
    if(cadena.length<3){
        error = "El formato del piso es menor de 3 caracteres.\n";
    }
    else{

        let piso = cadena.split('º');

        if(piso.length != 2){
            error = "El formato del piso no tiene planta y puerta.\n";
        }
        else{

            /**
             * Si no es un numero
             */
            if(isNaN(parseInt(piso[0]))){
                error += "La planta no es un numero.\n";
            }

            /**
             * si la puerta es mayor que 1 caracter
             */
            if(piso[1].length!=1){
                error += "La puerta del piso no es valida.\n";
            }
            else{
                let letras = "qwertyuiopasdfghjklzxcvbnm", minuscula = piso[1].toLowerCase();

                /**
                 * Si la letra de la puerta no esta contenida en letras
                 */
                if(!letras.includes(minuscula)){
                    error += "La puerta no es valida.\n";
                }
            }

        }

    }

    return error;

}

/**Correcto
 * Metodo que comprueba que el telefono es correcto
 *
 * @param {string} telefono
 * @returns {string}
 */
function validarTelefono(telefono){

    let error = "", numero = parseInt(telefono);

    /**
     * Si la longitud del telefono es 9
     */
    if(telefono.length==9){

        /**
         * Si no es NaN
         */
        if(!isNaN(numero)){
            
            let char = parseInt(telefono.charAt(0));

            /**
             * Si el primer numero es distionto de 9,8,7,6
             */
            if(char!=9&&char!=7&&char!=8&&char!=6){
                error = "El prefijo no es válido.";
            }

        }
        else{
            error = "No se han introducido numeros.";
        }

    }
    else{
        error = "No tiene 9 digitos.";
    }

    return error;
}

/**Correcto
 * Metodo que comprueba que se han introducido 1 nombre y 1 apellido ()
 *
 * @param {String} cadena
 * @returns {string}
 */
function validarNombre(cadena){
    
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
            error = "El nombre y apellidos del administrador se ha introducido no cumple con los requisitos."
        }

    }
    else{
        error = "No se han introducido un nombre y un apellido.";
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
     * Si la longitud es mayor o igual a 3
    **/
    if(cadena.length >= 3){

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

/**Correcto
 * Metodo que comprueba si la matricula introducida cumple las caracteristicas
 *
 * @param {string} matricula
 * @returns {string}
 */
function validarMatricula(matricula){

    let error="", letras_validas="WERTYPLKJHGFDSZXCVBNM";

    /**
     * Si la matricula es de 8 a 10 caracteres
     */
    if(matricula.length>7&&matricula.length<11){
        
        let mat_aux = matricula.split("-");

        /**Correcto
         * Si al comprobar los separadores
         */
        if(mat_aux.length==2){

            /**
             * Si los numeros de la matricula son 4
             */
            if(mat_aux[0].length==4){
                
                /**
                 * Si no es un numero
                 */
                if(isNaN(parseInt(mat_aux[0]))){
                    error+="Los 4 digitos no son numeros\n";
                }
                else{

                    /**
                     * Si las letras de las matriculas son 3
                     */
                    if(mat_aux[1].length==3){
                
                        let letras = mat_aux[1].toUpperCase(), band=false;
        
                        for(let i=0;i<letras.length;i++){
        
                            band = letras_validas.includes(letras[i]);
        
                        }
                        
                        /**
                         * Si la comprobacion es true
                         */
                        if(!band){
                            error += "Contiene caracteres no permitidos.\n";
                        }
                    }
                    else{
                        error+="Las letras no cumplen el tamaño.\n";
                    }

                }

            }
            else{
                error+="Los digitos no cumplen el tamaño.\n";
            }

        }
        /**
         * Si la matricula se compone de 3 partes
         */
        else if(mat_aux.length==3){

            /**
             * Dependiendo del tamaño de la matricula
             */
            if(matricula.length==8){

                /**
                 * Si la primera parte tiene 1 caracter
                 */
                if(mat_aux[0].length==1){

                    let mayusculas = mat_aux[0].toUpperCase();

                    /**
                     * Si el primer caracter no es valido
                     */
                    if(!letras_validas.includes(mayusculas)){
                        error+= "La primera parte contiene un caracter no valido.\n";
                    }

                }
                else{
                    error+="La primera parte de la matricula no tiene 1 caracater.\n";
                }

                /**
                 * Si la segunda parte tiene 4 caracter
                 */
                if(mat_aux[1].length==4){
                    
                    let numero = parseInt(mat_aux[1]);

                    /**
                     * Si el conjunto no es un numero
                     */
                    if(isNaN(numero)){
                        error+="La segunda parte de la matricula no es un numero.\n";
                    }

                }
                else{
                    error+="La segunda parte de la matricula no tiene 4 caracateres.\n";
                }

                /**
                 * Si la tercera parte tiene 1 caracter
                 */
                if(mat_aux[2].length==1){ 
                    let mayusculas = mat_aux[2].toUpperCase();

                    /**
                     * Si el tercer caracter no es valido
                     */
                    if(!letras_validas.includes(mayusculas)){
                        error+= "La primera parte contiene un caracter no valido.\n";
                    }

                }
                else{
                    error+="La tercera parte de la matricula no tiene 1 caracater.\n";
                }

            }
            else if(matricula.length==9){

                /**
                 * Si la primera parte son 2 caracteres y la tercera 1
                 */
                if(mat_aux[0].length==2&&mat_aux[2].length==1){

                    /**
                     * Si la primera parte son 2 caracteres
                     */
                    if(mat_aux[0].length==2){

                        let mayusculas = mat_aux[0].toUpperCase(), band = false;
    
                        for(let i=0;i<mayusculas.length;i++){
        
                            band = letras_validas.includes(letras[i]);
        
                        }
                        
                        /**
                         * Si la comprobacion es true
                         */
                        if(!band){
                            error += "Contiene caracteres no permitidos.\n";
                        }
    
                    }
                    else{
                        error+="La primera parte de la matricula no tiene 1 caracater.\n";
                    }
    
                    /**
                     * Si La segunda parte de lña matricula tiene 4 caracteres
                     */
                    if(mat_aux[1].length==4){
                        
                        let numero = parseInt(mat_aux[1]);
    
                        /**
                         * Si no es un numero
                         */
                        if(isNaN(numero)){
                            error+="La segunda parte de la matricula no es un numero.\n";
                        }
    
                    }
                    else{
                        error+="La segunda parte de la matricula no tiene 4 caracateres.\n";
                    }
    
                    /**
                     * Si la tercera parte de la matricula tiene 1 caracter
                     */
                    if(mat_aux[2].length==1){
    
                        let mayusculas = mat_aux[2].toUpperCase();
                        
                        /**
                         * Si el caracter  no es valido
                         */
                        if(letras_no_validas.includes(mayusculas)){
                            error+= "La tercera parte contiene un caracter no valido.\n";
                        }
    
                    }
                    else{
                        error+="La tercera parte de la matricula no tiene 1 caracater.\n";
                    }

                }
                /**
                 * Si la primera parte son 1 caracteres y la tercera 2
                 */
                else if(mat_aux[0].length==1&&mat_aux[2].length==2){

                    

                }
                else{
                    error+="La primera y la tercera parte de la matricula no coinciden.\n";
                }

            }
            else{

                /**
                 * Si la primera parte son 2 caracteres
                 */
                if(mat_aux[0].length==2){

                    let mayusculas = mat_aux[0].toUpperCase(), band = false;

                    for(let i=0;i<mayusculas.length;i++){
        
                        band = letras_validas.includes(mayusculas[i]);
    
                    }
                    
                    /**
                     * Si la comprobacion es true
                     */
                    if(!band){
                        error += "Contiene caracteres no permitidos.\n";
                    }

                }
                else{
                    error+="La primera parte de la matricula no tiene 1 caracater.\n";
                }

                if(mat_aux[1].length==4){
                    
                    let numero = parseInt(mat_aux[1]);

                    /**
                     * Si no es numero
                     */
                    if(isNaN(numero)){
                        error+="La segunda parte de la matricula no es un numero.\n";
                    }

                }
                else{
                    error+="La segunda parte de la matricula no tiene 4 caracateres.\n";
                }

                if(mat_aux[2].length==2){

                    let mayusculas = mat_aux[2].toUpperCase(), band=false;

                    for(let i=0;i<mayusculas.length;i++){
        
                        band = letras_validas.includes(mayusculas[i]);
    
                    }
                    
                    /**
                     * Si la comprobacion es true
                     */
                    if(!band){
                        error += "Contiene caracteres no permitidos.\n";
                    }

                }
                else{
                    error+="La tercera parte de la matricula no tiene 2 caracater.\n";
                }

            }

        }
        else{
            error = "El formato de la matricula es erroneo.\n";
        }

    }
    else{
        error = "El tamaño de la matricula no es valida.\n";
    }

    return error;

}

/**Correcto
 * Metodo que pone en mayusculas los caracteres de la matricula
 *
 * @param {string} matricula
 * @returns {string}
 */
function crearMatricula(matricula){

    let aux_matricula = matricula.split('-');

    if(aux_matricula.length==2){
        aux_matricula = aux_matricula[0]+'-'+aux_matricula[1].toUpperCase();
    }
    else{
        aux_matricula = aux_matricula[0].toUpperCase()+'-'+aux_matricula[1]+'-'+aux_matricula[2].toUpperCase();
    }

    return aux_matricula;
}

/**Correcto
 * Metodo que comprueba la fecha se ha introducido correctamente
 * 
 * @param {string} cadena 
 * @returns {string}
 */
function validarFecha(cadena){

    let error = "";

    /**
     * Si la cadena de la fecha no es 10
     */
    if(cadena.length!=10){
        error+="El tamaño de la fecha no cumple los requisitos.\n";
    }
    else{

        let fecha = cadena.split('/');

        /**
         * Si al comprobar los separadores son hay 3 valores
         */
        if(fecha.length==3){

            /**
             * Si el dia tiene dos caracteres
             */
            if(fecha[0].length==2){

                let dia = parseInt(fecha[0]);

                /**
                 * Si el dia es un numero
                 */
                if(isNaN(dia)){
                    error+="El dia no es un numero.\n";
                }
                else{

                    /**
                     * Si el dia esta entre 1 y 31
                     */
                    if(dia<1||dia>31){
                        error += "El dia no es un numero valido.\n";
                    }

                }

            }
            else{
                error+="El dia no cumple el tamaño.\n";
            }

            /**
             * Si el mes tiene dos caracteres
             */
            if(fecha[1].length==2){

                let mes = parseInt(fecha[1]);

                /**
                 * Si el mes es un numero
                 */
                if(isNaN(mes)){
                    error+="El mes no es un numero.\n";
                }
                else{
                    
                    /**
                     * Si el mes esta entre 1 y 12
                     */
                    if(mes<1||mes>12){
                        error += "El mes no es un numero valido.\n";
                    }

                }

            }
            else{
                error+="El mes no cumple el tamaño.\n";
            }

            /**
             * Si el año tiene 4 caracteres
             */
            if(fecha[2].length==4){

                let anio = parseInt(fecha[2]);

                /**
                 * Si el año es un numero
                 */
                if(isNaN(anio)){
                    error+="El año no es un numero.\n";
                }
                else{

                    /**
                     * Si el año es igual o menor al actual
                     */
                    if((new Date()).getFullYear()<anio){
                        error += "El año no es un numero valido.\n";
                    }
                    else{

                        /**
                         * Si el coche tiene mas de 30 años
                         */
                        if((new Date()).getFullYear()-anio>30){
                            error += "El vehiculo es demasiado antiguo";
                        }
                    }

                }

            }
            else{
                error+="El año no cumple el tamaño.\n";
            }

        }
        else{
            error+="Los separadores de la fecha son incorrectos.\n";
        }

    }

    return error;
}

/**Correcto
 * Metodo que crea la fecha tipo date
 *
 * @param {String} fecha
 * @returns {Date}
 */
function crearFecha(fecha){

    let aux_fecha = new Date();
    fecha = fecha.split('/');

    aux_fecha.setDate(fecha[0]);
    aux_fecha.setMonth(fecha[1]-1);
    aux_fecha.setFullYear(fecha[2]);

    return aux_fecha
}

/**** Metodos de listado de los objetos ****/

/** Correcto
 * Método que muestra los atributos de las empresas
 *
 * @returns {String}
 */
function listarEmpresas(){
    let listaempresa = "No existen empresas añadidas.\n";

    if(empresas.length>0){
        listaempresa = "";
        for(let i=0;i<empresas.length;i++){
            listaempresa += (i+1)+". "+empresas[i].listarEmpresa()+"\n\n";
        }
    }

    return listaempresa;
}