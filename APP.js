
let opcion;

do {
    opcion = parseInt(prompt('(1) DIVISA (ARS -> USD)\n(2) SALIR\n\nElige la acción que desea realizar (1-2):'));

    switch (opcion) {
        case 1: 
            let pesos = parseFloat(prompt('Ingrese la cantidad de pesos que desea pasar a dólares:')); 
            let dolar = 1300;

            function convertCurrency(pesos, dolar) {
                return pesos / dolar;
            }

            let resultado = convertCurrency(pesos, dolar);

            let conversion = {
                tipo: 'Divisa',
                Entrada: pesos + ' ARS',
                resultado: resultado.toFixed(2) + ' USD',
                fecha: new Date().toLocaleDateString(),
                
                
                 
                 
            };

            alert('CONVERSIÓN: ' + resultado.toFixed(2) + ' USD');
            console.log('Detalles de la conversión:', JSON.stringify(conversion, null, 2));
            break;

        case 2:
            alert('Saliendo del programa...');
            break;

        default:
            alert('Opción no válida. Por favor, elija 1 o 2.');
            break;
    }
} while (opcion !== 2);
        

    
      
       

      

