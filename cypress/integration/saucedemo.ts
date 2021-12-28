// saucedemo.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


const credential = {
  username: 'standard_user',
  password: 'secret_sauce',
};

// Create product array

let products = [{
  name: 'Sauce Labs Backpack',
  info: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
  price: '$29.99',
  link: 'https://www.saucedemo.com/inventory-item.html?id=4',
}, {
  name: 'Sauce Labs Bike Light',
  info: "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
  price: '$9.99',
  link: 'https://www.saucedemo.com/inventory-item.html?id=0',
}, {
  name: 'Sauce Labs Bolt T-Shirt',
  info: "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
  price: '$15.99',
  link: 'https://www.saucedemo.com/inventory-item.html?id=1',
}, {
  name: 'Sauce Labs Fleece Jacket',
  info: "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
  price: '$49.99',
  link: 'https://www.saucedemo.com/inventory-item.html?id=5',
}, {
  name: 'Sauce Labs Onesie',
  info: "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
  price: '$7.99',
  link: 'https://www.saucedemo.com/inventory-item.html?id=2',
}, {
  name: 'Test.allTheThings() T-Shirt (Red)',
  info: "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
  price: '$15.99',
  link: 'https://www.saucedemo.com/inventory-item.html?id=3',
}]


const login = (credential) => {
  cy.visit('/')
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


  xit('check menu', () => {
    cy.get('button[id=react-burger-menu-btn]').click();
    //check the name of each value inside this menu
    cy.get('a[id=inventory_sidebar_link').should('have.text', 'All Items');
    cy.get('a[id=about_sidebar_link').should('have.text', 'About');
    cy.get('a[id=logout_sidebar_link').should('have.text', 'Logout');
    cy.get('a[id=reset_sidebar_link').should('have.text', 'Reset App State');
    cy.get('button[id=react-burger-cross-btn]').click();

  })

  xit('check filter', () => {
    cy.get('select.product_sort_container').select('za').get('span.active_option').should('have.text', 'Name (Z to A)');
    cy.get('select.product_sort_container').select('lohi').get('span.active_option').should('have.text', 'Price (low to high)');
    cy.get('select.product_sort_container').select('hilo').get('span.active_option').should('have.text', 'Price (high to low)');
    cy.get('select.product_sort_container').select('az').get('span.active_option').should('have.text', 'Name (A to Z)');

  })
  xit('check info and behavior of all product', () => {
    //get inventory_item array

    cy.get('div.inventory_item').then(($selectedElement) => {
      //loop to get each product from the arrat
      for ( let i= 0; i < $selectedElement.length; i++) {
        const element = $selectedElement[i];
        //check info

        cy.wrap(element).find('.inventory_item_name').should('have.text', products[i].name);
        cy.wrap(element).find('.inventory_item_description').should('contains.text', products[i].info);
        cy.wrap(element).find('.inventory_item_price').should('have.text', products[i].price)
        // cy.wrap(element).find('.inventory_item_name').click().url().should('eq',products[i].link);
        // cy.get('#back-to-products').click();
      }
    })
  })
  it('Check content of empty cart', () => {
    // cy.pause();
    cy.visit(
      '/?/cart.html' 
    );
    //cy.visit('/inventory-item.html?id=4');
    // debugger;
    cy.get('div[id=shopping_cart_container]').click();
    cy.get('.cart_item').should('not.exist');
    cy.get('button[id=continue-shopping]').click();
  })
  it('in main page, check cart number when add/unadd to cart for each product', () => {
    cy.get('button[id=add-to-cart-sauce-labs-backpack]').click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('button[id=remove-sauce-labs-backpack]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
    cy.get('button[id=add-to-cart-sauce-labs-bike-light]').click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('button[id=remove-sauce-labs-bike-light').click();
    cy.get('.shopping_cart_badge').should('not.exist');
    cy.get('button[id=add-to-cart-sauce-labs-bolt-t-shirt]').click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('button[id=remove-sauce-labs-bolt-t-shirt]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
    cy.get('button[id=add-to-cart-sauce-labs-fleece-jacket]').click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('button[id=remove-sauce-labs-fleece-jacket]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
    cy.get('button[id=add-to-cart-sauce-labs-onesie]').click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('button[id=remove-sauce-labs-onesie]').click();
    cy.get('.shopping_cart_badge').should('not.exist');

    cy.get('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)').click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('button[id=remove-test.allthethings()-t-shirt-(red)]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  })
})