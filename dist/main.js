"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestos = new _impuestos["default"](10000, 250);
var cliente = new _cliente["default"]("Juan", impuestos);
console.log("Nombre Cliente: ".concat(cliente.getNombre));
cliente.calculoImpuesto();