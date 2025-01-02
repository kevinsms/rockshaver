import preRegPage from '../support/pages/pre-reg.page'

describe('Pré-Cadastro', () => {
  it('Deve realizar o pré-cadastro do cliente', () => {

    preRegPage.go()
    preRegPage.fillForm('Kevin Silva', 'kevin.msn@hotmail.com')
    preRegPage.submit()

    cy.get('.user-name')
      .should('be.visible')
      .and('have.text', 'Olá, Kevin')

    cy.get('.user-email')
      .should('be.visible')
      .and('have.text', 'kevin.msn@hotmail.com')
  })

  it('Campos obrigatórios', () => {

    preRegPage.go()
    preRegPage.submit()


    cy.contains('label', 'Nome Completo')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'O campo nome é obrigatório.')

    cy.contains('label', 'E-mail')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'O campo e-mail é obrigatório.')
  })
  it('Não deve fazer o pré-cadastro apenas com o primeiro nome', () => {
    preRegPage.go()
    preRegPage.fillForm('Kevin', 'kevin.msn@hotmail.com')
    preRegPage.submit()


    cy.contains('label', 'Nome Completo')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'Informe seu nome completo.')

  })
  it('Não deve fazer o pré-cadastro com o email incorreto', () => {
    preRegPage.go()
    preRegPage.fillForm('Kevin Silva', 'www.teste.com')
    preRegPage.submit()


    cy.contains('label', 'E-mail')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'O e-mail inserido é inválido.')

  })
})