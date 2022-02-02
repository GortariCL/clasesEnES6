export default class Impuestos{
    constructor (montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get getMontoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    set setMontoBrutoAnual(montoBrutoAnual){
        this._montoBrutoAnual = montoBrutoAnual;
    }
    get getDeducciones(){
        return this._deducciones;
    }
    set setDeducciones(deducciones){
        this._deducciones = deducciones;
    }
}