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
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('clickElement', (element) => {
  cy.get(element).should('exist').click()
});

Cypress.Commands.add("login", () => {
  cy.visit("/", { failOnStatusCode: false });
  cy.click;
  cy.url().should("include", "/login");
  cy.get('[data-testid="login-email"]').type("admin@xxxx.com");
  cy.get('[data-testid="login-password"]').type("xxxxxxxxxxxx");
  cy.get('[data-testid="login-token"]').type("222222");
  cy.get('[data-testid="submit-button"]').click();
  cy.url().should("contain", "/dashboard");
})


// Main Session
Cypress.Commands.add("loginwithsession", () => {
  const username = "admin@kpmg.com";
  const password = "Password@@1";
  const token = "123456";
  const loginPage = new LoginPage();

  cy.session(
    [username, password, token],
    () => {
      cy.visit("/login", { failOnStatusCode: false });
      cy.url().should("include", "/login");
      loginPage.login(username, password, token);
      cy.url().should("contain", "/dashboard");
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});

// Cypress.Commands.add('typeAText', (field, text) =>{
//     cy.get(field).should('exist').type(text)
// })

