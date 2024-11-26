
//clase para generar inmuebles
class Inmueble {

	//clase para los datos de la inmobiliaria
	constructor (numero, tipo, metros, precio, conservacion) {
		this.numero = numero;
	    this.tipo = tipo;
	    this.metros = metros;
	    this.precio = precio;
		this.conservacion = conservacion;
	}	
}

	
//clase para almacenar las inmobiliarias, simplemente almacena un nombre de la inmo y una lista de inmuebles
class Inmobiliaria {
	constructor (nombre) {
		this.nombre = nombre;
		this.inmuebles = [];
	    
	}
	// método agregar inmueble nuevo
	addInmueble (numero, tipo, metros, precio, conservacion) {	
		var inmueble = new Inmueble (numero, tipo, metros, precio, conservacion);
		this.inmuebles.push(inmueble);	
	}

	
   /* metodo mostrar los inmuebles que son de un tipo. por ejemplo nos puede mostrar viviendas, locales...Retorna un array con todos los inmuebles que cumplen el criterio*/

	mostrarInmuebles(pide_tipo,superficie,precio_min,precio_max) {
		var encontrado = false;
		var datosInmuebles = [];
		if(this.inmuebles.length > 0){
			
			for (var i=0;i<this.inmuebles.length;i++){
				
				if (this.inmuebles[i].tipo == pide_tipo ) {

					if(this.inmuebles[i].metros >= superficie){

						if(this.inmuebles[i].precio >= precio_min || this.inmuebles[i].precio <= precio_max){
							datosInmuebles.push(this.inmuebles[i]);
							encontrado = true;
						}

					}
					
				}
			}
			if (encontrado) {
				return datosInmuebles;
			}
			if (!encontrado) {
                // estos mensaje de alerta perfectamente podían estar fuera del método y tratarlo en el documento html
				alert("No hay inmuebles en la inmo de ese tipo");
			}

		} else {
			alert("La inmo no tiene ningún inmueble agregado");
		}

	}
}