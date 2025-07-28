/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command for testing accessibility
Cypress.Commands.add("checkA11y", () => {
  cy.injectAxe();
  cy.checkA11y();
});

// Custom command for mobile testing
Cypress.Commands.add("visitMobile", (url: string) => {
  cy.viewport("iphone-6");
  cy.visit(url);
});

declare global {
  namespace Cypress {
    interface Chainable {
      checkA11y(): Chainable<void>;
      visitMobile(url: string): Chainable<void>;
    }
  }
}

export {};
