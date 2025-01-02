class PreRegPage {

    go() {
        cy.visit('/')
        cy.get('header nav a[href="pre-cadastro"]')
            .click()

        cy.get('form h2')
            .should('be.visible')
            .and('have.text', 'Seus dados')
    }

    fillForm(fullname,email) {
        cy.get('input[name="fullname"]')
            .type(fullname)

        cy.get('input[name="email"]')
            .type(email)
    }

    submit() {
        cy.contains('button[type="submit"]', 'Continuar')
            .click()
    }
}

export default new PreRegPage()