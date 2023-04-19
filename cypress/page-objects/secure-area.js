/// <reference types="cypress" />

export class SecureAreaPage {
  comprobarMesaje(text) {
    cy.get("#flash").contains(text);
  }
}
