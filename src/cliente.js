export default class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get getNombre() {
        return this._nombre;
    }
    set setNombre(nombre) {
        this._nombre = nombre;
    }
    get getImpuesto() {
        return this._impuestos;
    }
    calculoImpuesto() {
        const impuesto  = 21/100;
        let impuestoAnual = ((this._impuestos.getMontoBrutoAnual - this._impuestos.getDeducciones) * impuesto);
        console.log(`Monto Bruto Anual: $${this._impuestos.getMontoBrutoAnual}`);
        console.log(`Deducciones: $${this._impuestos.getDeducciones}`);
        console.log(`Impuesto Anual: $${impuestoAnual}`);
    }
}

