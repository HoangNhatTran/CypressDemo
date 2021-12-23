// saucedemo.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
const credential = {
	username: 'problem_user',
	password: 'secret_sauce',
};

const login = (credential) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[id=user-name]').type(credential.username);
    cy.get('input[id=password]').type(credential.password);
    cy.get('input[id=login-button]').click();
};

describe('homepage', () => {
	before(() => {
		login(credential);
	});
    beforeEach(() => {
    Cypress.Cookies.defaults({
    			preserve: (cookie) => {
    			  return true;
    			}
    		  })
});

it('checkmenu',() => {
    cy.get('button[id=react-burger-menu-btn]').click();
    cy.get('a[id=inventory_sidebar_link').should('have.text','all items');
})
})
