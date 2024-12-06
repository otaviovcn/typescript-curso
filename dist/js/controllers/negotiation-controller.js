import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsView } from "../views/negotiations-view.js";
/* Na arquitetura MVC, a camada Controller é responsvel por intermediar
  o acesso entre a View e a Model */
export class NegociacaoController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView("#negotiationsView");
        this.dateInput = document.querySelector('#data');
        this.quantityInput = document.querySelector('#quantidade');
        this.valueInput = document.querySelector('#valor');
        this.negotiationsView.update();
    }
    adds() {
        const negotiation = this.createsNegotiation();
        this.negotiations.adds(negotiation);
        this.negotiationsView.template();
        this.clearEntries();
    }
    createsNegotiation() {
        const exp = /-/g;
        const date = new Date(this.dateInput.value.replace(exp, ','));
        const quantity = parseInt(this.quantityInput.value);
        const value = parseFloat(this.valueInput.value);
        return new Negotiation(date, quantity, value);
    }
    clearEntries() {
        this.dateInput.value = '';
        this.quantityInput.value = '';
        this.valueInput.value = '';
        // Moves focus to the date field
        this.dateInput.focus();
    }
}
