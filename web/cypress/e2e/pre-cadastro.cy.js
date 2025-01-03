import prereg from '../support/actions/prereg'

describe('Pré-Cadastro', () => {
  it('Deve realizar o pré-cadastro do cliente', () => {
    prereg.start('Kevin Silva', 'kevin.msn@hotmail.com')
    prereg.verify('Kevin','kevin.msn@hotmail.com')
  })

  it('Campos obrigatórios', () => {
    prereg.start()
    prereg.alert('Nome Completo', 'O campo nome é obrigatório.')
    prereg.alert('E-mail', 'O campo e-mail é obrigatório.')
  })
  it('Não deve fazer o pré-cadastro apenas com o primeiro nome', () => {
    prereg.start('Kevin', 'kevin.msn@hotmail.com')
    prereg.alert('Nome Completo', 'Informe seu nome completo.')
  })
  it('Não deve fazer o pré-cadastro com o email incorreto', () => {
    prereg.start('Kevin Silva', 'www.teste.com')
    prereg.alert('E-mail', 'O e-mail inserido é inválido.')
  })
})