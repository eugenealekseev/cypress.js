

    
describe('Формы логина и пароля', function () {
      it('Успешная авторизация с верным логином и паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Логика востановления пароля', function () {
      cy.reload();

      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('12345@mail.ru').should('be.visible');
      cy.get('#restoreEmailButton').click()
      cy.contains('Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
})


    it('Авторизация с неверным логином и верным паролем', function () {
      cy.reload(); 

      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('12345@mail.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');      

    })


    it('Валидация логина', function () {
        cy.reload(); 
  
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('12345');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');      
  
      })

      it('Приведение к строчным буквам в логине', function () {
        cy.reload(); 
  
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');      
  
      })
})
