# Rockshaver Automated Tests

Este repositório contém testes automatizados para a aplicação Rockshaver, utilizando o framework Cypress. Os testes cobrem funcionalidades críticas da aplicação, garantindo a qualidade e a confiabilidade do sistema.

## Estrutura do Projeto

- **cypress/e2e**: Contém os testes de ponta a ponta.
- **cypress/fixtures**: Contém dados fictícios usados nos testes.
- **cypress/support**: Contém comandos personalizados e configurações globais para os testes.
- **cypress/support/pages**: Contém objetos de página para facilitar a interação com a interface do usuário durante os testes.

## Como Executar os Testes

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/rockshaver-automated-tests.git
   cd rockshaver-automated-tests/web
   ```

2. Instale as dependências:
   ```sh
   yarn install
   ```

3. Execute os testes:
   ```sh
   yarn run cypress open
   ```

## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **Docker**: Utilizado para configurar e gerenciar os serviços necessários para a aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.