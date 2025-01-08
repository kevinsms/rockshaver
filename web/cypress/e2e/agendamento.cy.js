describe('Agendamento', () => {
    it('Deve fazer um novo agendamento', () => {

        cy.dropCollection('agendamentos', { failSilently: 'true' })
            .then(result => {
                cy.log(result);
            });


        const usuario = {
            nome: 'Silva Kevin',
            email: 'silva.msn@hotmail.com',
        }
        cy.iniciarPreCadastro(usuario)
        cy.verificarPreCadastro(usuario)

        cy.contains('a', 'Agendar um horário')
            .click()

        cy.contains('span', 'Membros da Equipe')
            .should('be.visible')

        cy.contains('div', 'Tina')
            .parent()
            .click()

        cy.contains('span', 'Serviços')
            .should('be.visible')

        cy.contains('div', 'Combo')
            .parent()
            .click()

        cy.contains('span', 'Dias Disponíveis')
            .should('be.visible')
        cy.contains('span', 'Horários Disponíveis')
            .should('be.visible')

        cy.contains('.dia-semana', '10')
            .click()

        cy.contains('.hora-opcao', '10:00')
            .click()

        cy.contains('button', 'Confirmar e reservar')
            .click()

        cy.get('h3')
            .should('be.visible')
            .and('have.text', 'Tudo certo por aqui! Seu horário está confirmado.')
    })
})