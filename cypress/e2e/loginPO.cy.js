/// <reference types="cypress" />
import { MainPage } from "../page-objects/main-page";
import { LoginPage } from "../page-objects/login-page";
import { SecureAreaPage } from "../page-objects/secure-area";

describe("pruebas-login", () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();
  const secureAreaPage = new SecureAreaPage();
  beforeEach(() => {
    mainPage.visitarMainPage();
    mainPage.clicarFormAuthentication();
  });

  it("The user is logged correctly", () => {
    loginPage.introducirUsuario("tomsmith");
    loginPage.introducirContrasenia("SuperSecretPassword!");
    loginPage.clicarBotonLogin();
    secureAreaPage.comprobarMesaje("You logged into a secure area");
  });

  it("un usuario con username incorecta no puede hacer el login corretamente", () => {
    loginPage.introducirUsuario("pepe");
    loginPage.introducirContrasenia("SuperSecretPassword!");
    loginPage.clicarBotonLogin();
    secureAreaPage.comprobarMesaje("Your username is invalid!");
  });

  it("un usuario con password no valida no puede hacer el login corretamente", () => {
    loginPage.introducirUsuario("tomsmith");
    loginPage.introducirContrasenia("supersecretpassword");
    loginPage.clicarBotonLogin();
    secureAreaPage.comprobarMesaje("Your password is invalid!");
  });
});
