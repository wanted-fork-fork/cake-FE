// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import "cypress-localstorage-commands";

// -- This is a parent command --
export const dummyToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
Cypress.Commands.add("login", () => {
  cy.setLocalStorage("accessToken", dummyToken);
});

Cypress.Commands.add("logout", () => {
  cy.clearLocalStorage();
  cy.visit("/");
});

Cypress.Commands.add("checkPath", (pathname: string, chainer?: string) => {
  if (chainer) {
    cy.location("pathname").should(chainer, pathname);
  }
  cy.location("pathname").should("eq", pathname);
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
