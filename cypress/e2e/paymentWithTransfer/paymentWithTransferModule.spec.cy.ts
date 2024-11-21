import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Runnable } from "mocha";

Cypress.on("uncaught:exception", (err, Runnable) => {
  return false;
});

// A user i should be able to make payment with transfer successfully
Given(/^I launch the url$/, () => {
  // cy.clearAllCookies()
  cy.visit('/', { failOnStatusCode: false });
});

When(/^I input amount$/, () => {
  cy.fixture('paymentWidgetLocator').then((sel) => {
    cy.typeAText(sel.amountField, sel.amount);
  });
});

When(/^I clicked on Submit button$/, () => {
  cy.fixture('paymentWidgetLocator').then((sel) => {
    cy.clickElement(sel.submitBtn)
  })
});

When(/^I click on pay with transfer$/, () => {
  cy.fixture('paymentWidgetLocator').then((sel) => {
    cy.get('object').click()
    //cy.clickElement(sel.payWithTransfer).should('have.class', 'active')
    //cy.wait(10000);
    cy.contains("Account generated successfully").should("be.visible");
    //cy.get('object')
    //cy.wait(5000)
  })
});

When(/^I click on copy button$/, () => {
  cy.fixture('paymentWidgetLocator').then((sel) => {
    cy.clickElement(sel.copyField);
    cy.contains("Account number copied successfully").should("be.visible");
  })

});

When(/^I click on i have paid button$/, () => {
  cy.fixture('paymentWidgetLocator').then((sel) => {
    cy.clickElement(sel.iHavePaidBtn)
    //cy.wait(5000)
  })
  //cy.wait(5000)
});
