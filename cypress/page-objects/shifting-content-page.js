/// <reference types="cypress" />

export class ShiftingContent {
  clicarMenuElement() {
    cy.get('[href="/shifting_content/menu"]').click();
  }
}
