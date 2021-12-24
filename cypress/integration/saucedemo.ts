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


const productBoltTshirt ={
  name:'Sauce Labs Bolt T-Shirt',
  info:"Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
  price:'$15.99',
  link:'https://www.saucedemo.com/inventory-item.html?id=1',
}
const productJacket ={
  name:'Sauce Labs Fleece Jacket',
  info:"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
  price:'$49.99',
  link:'https://www.saucedemo.com/inventory-item.html?id=5',
}
const productOnesie ={
  name:'Sauce Labs Onesie',
  info:"Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
  price:'$7.99',
  link:'https://www.saucedemo.com/inventory-item.html?id=2',
}

const productRedTshirt={
  name:'Test.allTheThings() T-Shirt (Red)',
  info:"This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
  price:'$15.99',
  link:'https://www.saucedemo.com/inventory-item.html?id=3',
}
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


// it('check menu',() => {
//     cy.get('button[id=react-burger-menu-btn]').click();
//     //check the name of each value inside this menu
//     cy.get('a[id=inventory_sidebar_link').should('have.text','All Items');
//     cy.get('a[id=about_sidebar_link').should('have.text','About');
//     cy.get('a[id=logout_sidebar_link').should('have.text','Logout');
//     cy.get('a[id=reset_sidebar_link').should('have.text','Reset App State');
//     cy.get('button[id=react-burger-cross-btn]').click();
  
// })

// it('check filter',() =>{
//   cy.get('select.product_sort_container').select('za').get('span.active_option').should('have.text', 'Name (Z to A)');
//   cy.get('select.product_sort_container').select('az').get('span.active_option').should('have.text', 'Name (A to Z)');
//   cy.get('select.product_sort_container').select('lohi').get('span.active_option').should('have.text', 'Price (low to high)');
//   cy.get('select.product_sort_container').select('hilo').get('span.active_option').should('have.text', 'Price (high to low)');
// })
it('getelement',()=>{
  let elements= cy.get('div.inventory_item')

  cy.get('div.inventory_item').then(($selectedElement) => {
    // Debugger is hit after the cy.visit
    // and cy.get command have completed

    console.log($selectedElement);
    for(let i =0; i<$selectedElement.length; i++) {
      if(i==0) {
      const element = $selectedElement[i];
      cy.wrap(element).find('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
      console.log($selectedElement)
      }

    }
  })

  // console.log(elements);
  // for(let element in elements) {
      
  // }
})
// it('Check info of Sauce Labs Backpack',()=>{
//   const productBackpack ={
//     name:'Sauce Labs Backpack',
//     info:'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
//     price:'$29.99',
//     link:'https://www.saucedemo.com/inventory-item.html?id=4',
//   }
//   cy.get('a#item_4_title_link div.inventory_item_name').should('have.text',productBackpack.name);
//   cy.get('a#item_4_title_link + div.inventory_item_desc').should('have.text',productBackpack.info);
//   cy.get('div.inventory_item_label + a.').should('have.text',productBackpack.price);
//   cy.get('a#item_4_title_link div.inventory_item_name').click().url().should('eq',productBackpack.link);

//   // cy.get('a#item_4_title_link div.inventory_item_name').then($selectedElement => {
//   //   debugger;
//   // })


//   // cy.get('#back-to-products').click();
// })
// // it('Check info of Sauce Labs Bike Light',()=>{
// //   const productBikeLight ={
// //     name: 'Sauce Labs Bike Light',
// //     info: "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
// //     price: '$9.99',
// //     link: 'https://www.saucedemo.com/inventory-item.html?id=4',
// //   }
// //   cy.get('div.page_wrapper div.inventory_container div.inventory_list div.inventory_item:nth-child(2) div.inventory_item_description div.inventory_item_label a:nth-child(1) > div.inventory_item_name').parent().should('have.text',productBackpack.name);
// //   cy.get('div.page_wrapper div.inventory_container div.inventory_list div.inventory_item:nth-child(1) div.inventory_item_description div.inventory_item_label > div.inventory_item_desc:nth-child(2)').should('have.text',productBackpack.info);
// //   cy.get('div.page_wrapper div.inventory_container div.inventory_list div.inventory_item:nth-child(1) div.inventory_item_description div.pricebar > div.inventory_item_price').should('have.text',productBackpack.price);
// //   cy.get('div.page_wrapper div.inventory_container div.inventory_list div.inventory_item:nth-child(1) div.inventory_item_description div.inventory_item_label a:nth-child(1) > div.inventory_item_name ').click()//.url().should('eq',productBackpack.link);
// //   cy.get('#back-to-products').click();



//   // a: tag
//   // #: id
//   // .: class
//   // [name='as;d]: property

//})
})
