describe("pruebas de login", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get(":nth-child(21) > a").click();
  });

  it("un usuario valido puede hacer el login corretamente", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("You logged into a secure area!");
  });

  it("un usuario no valido no puede hacer el login corretamente", () => {
    cy.get("#username").type("tomsmithh");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your username is invalid!");
  });

  it("un usuario con password no valida no puede hacer el login corretamente", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("superSecretPassword");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your password is invalid!");
  });
});
