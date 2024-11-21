import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, Runnable) => {
  return false;
});

// A user i should be able to make payment with USSD successfully
Given(/^I launch the url$/, () => {
  // cy.clearAllCookies()
  cy.visit('/', { failOnStatusCode: false });
});

When(/^I input amount$/, () => {
  cy.fixture('paymentWidgetLocator.json').then((sel) => {
    cy.typeAText(sel.amountField, sel.amount);
  });
});

When(/^I clicked on Submit button$/, () => {
  cy.fixture('paymentWidgetLocator.json').then((sel) => {
    cy.clickElement(sel.submitBtn)
  })
});

When(/^I click on ussd button$/, () => {
  cy.fixture('paymentWidgetLocator.json').then((sel) => {
    cy.clickElement(sel.payWithUSSDBtn)
  })
});

When(/^II click on i select bank from dropdown list$/, () => {
  cy.fixture('paymentWidgetLocator.json').then((sel) => {
    cy.clickElement(sel.selectBankFromDropDown)
  })
});

When(/^I click on copy ussd button$/, () => {
  cy.fixture('paymentWidgetLocator.json').then((sel) => {
    cy.clickElement(sel.copyBtn)
  })
});

Then(/^ click on i have paid button for ussd$/, () => {
  cy.fixture('paymentWidgetLocator.json').then((sel) => {
    cy.clickElement(sel.iHavePaidBtnUssd)
  })
});
