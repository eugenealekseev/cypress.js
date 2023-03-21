

describe('Формы логина и пароля', function () {
    it('Успешная авторизация с верным логином и паролем', function () {
      cy.visit(' https://testqastudio.me/');
      cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click()

     cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click()
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click()
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click()
      cy.get('.woocommerce-mini-cart__buttons > [href="https://sh3910517.c.had.su/cart/"]').click()
      cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click()
  
      cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click()
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click()

      cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click()
      cy.get('.header-right-items > .header-cart').click()
      cy.get('.checkout').click()
     

      cy.get('#billing_first_name').type('Иван');
      cy.get('#billing_last_name').type('Иванов');
      cy.get('#billing_address_1').type('Кукуево');
      cy.get('#billing_city').type('Кукуев');
      cy.get('#billing_state').type('Кукуевская');
      cy.get('#billing_postcode').type('123456');
      cy.get('#billing_phone').type('1234567');
      cy.get('#billing_email').type('1234@mail.ru');
      cy.get('#place_order').click()

      cy.reload();

      cy.contains('Ваш заказ принят. Благодарим вас').should('be.visible');
  })
})