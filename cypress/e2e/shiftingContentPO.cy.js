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
  });
  it("The user click to menu element", () => {
    shiftingContent.clicarMenuElement();
  });
  it("The user proves the element 1", () => {
    menuElementPage.comprobarElement1();
  });
  it("The user proves the element 2", () => {
    shiftingContent.clicarMenuElement();
    menuElementPage.comprobarElement2();
  });
  it("The user proves the element 3", () => {
    shiftingContent.clicarMenuElement();
    menuElementPage.comprobarElement3();
  });
  it("The user proves the element 4", () => {
    shiftingContent.clicarMenuElement();
    menuElementPage.comprobarElement4();
  });
  it("The user proves the element5 ", () => {
    shiftingContent.clicarMenuElement();
    menuElementPage.comprobarElement5();
  });
});
