/*
 * Author : AdNovum Informatik AG
 */

import * as cypress from 'cypress';

const credential = {
	username: 'trinhltd',
	password: 'Abc123456',
};

const bookinginfo = {
	activity: 'meet_int',
	ticketID: 'EJPDESYSP-295',
	ITCtag: 'AdN/ProjWeb/AMS/Maint - 20032',
	comment: 'Cypress comment'
}

const login = (credential) => {
	cy.visit('/v2/#/weekview');
	cy.get('input[name=isiwebuserid]').type(credential.username);
	cy.get('input[name=isiwebpasswd]').type(credential.password);
	cy.get('input[name=submit]').click();
}

describe('Access Week View', () => {

	before(() => {
		login(credential);
	});

	beforeEach(() => {
		// Cypress.Cookies.preserveOnce('Navajo')

		Cypress.Cookies.defaults({
			preserve: (cookie) => {
			  // implement your own logic here
			  // if the function returns truthy
			  // then the cookie will not be cleared
			  // before each test runs
			  return true;
			}
		  })
	});

	it('Access Week view page successfully', () => {
		cy.contains('trinhltd');
		cy.contains('Trinh Lêeeeeee');
		cy.contains('Bookings');
		cy.contains('Favourites');
		cy.contains('Activity');
	});

	it('Input info then click Insert button', () => {
		// select activity
		cy.get('div[id=activity-dropdown]').click();
		cy.get('div[id=Work]', { timeout: 10000 }).should('be.visible');//TODO: @hoang check the be element assertion
		cy.get('div[id=Work]').click();
		// select Ticket ID & ITC tag
		cy.get('textarea[id=itcTicketIdTypeaheadStandaloneForm]').type(bookinginfo.ticketID).blur();
		// simulate click outside
		cy.wait(10000);
		cy.get('textarea[id=itcTypeaheadStandaloneForm]').click();
		cy.get('textarea[id=itcTypeaheadStandaloneForm]').type(bookinginfo.ITCtag).blur();
		// input comment
		cy.get('textarea[id=commentInput]').type(bookinginfo.comment).blur();
		// click Insert button
		cy.get('button.booking-entry-form-insert-button').click();
	});

	it('check added info',()=>{
		cy.get('div.app-container div.app-content div.weekview-container div.weekview-booking-area:nth-child(2) itc-booking-area-container:nth-child(2) itc-booking-area:nth-child(1) > div.booking-area').should('contain', 'EJPDESYSP-295')
		.and('contain', 'AdN/ProjWeb/AMS/Maint - 20032');

	})
})

// add more cy.contains to check expected results
