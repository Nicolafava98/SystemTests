/// <reference types="cypress" />
export class MenuElement {
  comprobarElement1() {
    cy.get(":nth-child(1) > a").should("exist");
  }
  comprobarElement2() {
    cy.get(":nth-child(7) > :nth-child(2) > a").should("exist");
  }
  comprobarElement3() {
    cy.get(":nth-child(7) > :nth-child(3) > a").should("exist");
  }
  comprobarElement4() {
    cy.get(":nth-child(7) > :nth-child(4) > a").should("exist");
  }
  comprobarElement5() {
    cy.get(".shift").should("exist");
  }
}
