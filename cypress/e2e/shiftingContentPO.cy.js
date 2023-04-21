/// <reference types="cypress" />
import { MainPage } from "../page-objects/main-page";
import { ShiftingContent } from "../page-objects/shifting-content-page";
import { MenuElement } from "../page-objects/menu-element";

describe("pruebas-shiftingContent", () => {
  const mainPage = new MainPage();
  const shiftingContent = new ShiftingContent();
  const menuElementPage = new MenuElement();
  beforeEach(() => {
    mainPage.visitarMainPage();
    mainPage.clicarShiftingContent();
    shiftingContent.clicarMenuElement();
  });
  it("The user proves the elements", () => {
    menuElementPage.comprobarElements(5);
  });
});
