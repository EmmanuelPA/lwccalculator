import { LightningElement } from 'lwc';

export default class CoolCalculator extends LightningElement {
	operadorGlobal = "";
	primerOperador;
	segundoOperador;
	vistaPrevia = "";
	resultado = "";
	operador;
	clickedButtonLabel;

	handleClickNumber(event) {
		//console.log(event.target.value);
		this.operadorGlobal = this.operadorGlobal + event.target.value;
		this.vistaPrevia += event.target.value;
		console.log(this.operadorGlobal);
	}

	handleClickOperator(event) {
		this.clickedButtonLabel = event.target.label;
		this.vistaPrevia +=  ' ' + event.target.label + ' ';

		if (this.clickedButtonLabel !== "=") {
			this.primerOperador = this.operadorGlobal;
			this.operadorGlobal = "";
			this.operador = this.clickedButtonLabel;
		} else {
			this.segundoOperador = this.operadorGlobal;
			switch (this.operador) {
				case "+":
					this.resultado += (+this.primerOperador) + (+this.segundoOperador);
					console.log(this.primerOperador + " " + this.segundoOperador + " " + this.operadorGlobal + " " + this.operador);
					break;
				case "-":
					this.resultado = (+this.segundoOperador) - (+this.primerOperador);
					console.log(this.primerOperador + " " + this.segundoOperador + " " + this.operadorGlobal + " " + this.operador);
					break;
				case "x":
					this.resultado = (this.primerOperador) * (this.segundoOperador);
					console.log(this.primerOperador + " " + this.segundoOperador + " " + this.operadorGlobal + " " + this.operador);
					break;
				case "/":
					this.resultado = (+this.primerOperador) / (+this.segundoOperador);
					console.log(this.primerOperador + " " + this.segundoOperador + " " + this.operadorGlobal + " " + this.operador);
					break;
				default:
					"No existe esa operacion";
					break;

			}
		}

	}

	get result() {
		return this.resultado;
	}

	get preview() {
		return this.vistaPrevia;
	}

	handleClickClear(event) {
		this.clickedButtonLabel = event.target.label;
		this.primerOperador = "";
		this.segundoOperador = "";
		this.operadorGlobal = "";
		this.resultado = "";
		this.vistaPrevia = "";
	}
}