declare namespace Cypress {
    interface Chainable<Subject> {
        clickElement(element: any): Chainable<any>
        typeAText(field: any, text: any): Chainable<any>
  }
}