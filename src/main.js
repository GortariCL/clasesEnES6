import Cliente from './cliente.js';
import Impuestos from './impuestos.js';


let impuestos = new Impuestos(10000, 250); 
let cliente = new Cliente ("Juan", impuestos);

console.log(`Nombre Cliente: ${cliente.getNombre}`)
cliente.calculoImpuesto();