/// <reference types="cypress" />
export class MenuElement {
  comprobarElements(num) {
    cy.get("ul").find("li").should("have.length", num);
  }
}
