// any -> invalida la especificidad e indica que una variable puede ser de cualquier tipo
let valor: any;

valor = true;
valor = 35;
valor = "Heisenberg";
valor = [];
valor = {};
valor = Math.random;
valor = null;
valor = undefined;
valor = new TypeError();
valor = Symbol("type");

valor.foo.bar; // -> no existe pero no arroja error, lo hará cuando se ejecute
valor.trim;
valor();
new valor;
valor[0][1];