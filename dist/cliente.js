"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuestos) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuestos = impuestos;
  }

  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      return this._nombre;
    }
  }, {
    key: "setNombre",
    set: function set(nombre) {
      this._nombre = nombre;
    }
  }, {
    key: "getImpuesto",
    get: function get() {
      return this._impuestos;
    }
  }, {
    key: "calculoImpuesto",
    value: function calculoImpuesto() {
      var impuesto = 21 / 100;
      var impuestoAnual = (this._impuestos.getMontoBrutoAnual - this._impuestos.getDeducciones) * impuesto;
      console.log("Monto Bruto Anual: $".concat(this._impuestos.getMontoBrutoAnual));
      console.log("Deducciones: $".concat(this._impuestos.getDeducciones));
      console.log("Impuesto Anual: $".concat(impuestoAnual));
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;