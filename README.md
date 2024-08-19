# Pizzaria Di Nonna

Pizzaria Di Nonna é um projeto FullStack desenvolvido com **Next.js** - frontend e **NestJS** - backend. O projeto utiliza **MongoDB** como banco de dados e **Turborepo** para gerenciar e otimizar o desempenho das builds e execuções de scripts em um monorepo.

## Estrutura do Projeto

- **Frontend**: Localizado na pasta `apps/frontend`, desenvolvido com Next.js.
- **Backend**: Localizado na pasta `apps/backend`, desenvolvido com NestJS.
- **Banco de Dados**: MongoDB.
- **Monorepo**: Gerenciado com Turborepo.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) (utilizado como gerenciador de pacotes)
- [MongoDB](https://www.mongodb.com/) (rodando localmente ou em um serviço na nuvem)

## Instalação

1. Clone o repositório:

    ```bash
    git clone git@github.com-pessoal:MateusGutierrez/pizza-app.git
    cd pizza-app
    ```

2. Instale as dependências do projeto:

    ```bash
    yarn install
    ```

3. Configure as variáveis de ambiente:

    - Crie um arquivo `.env` na raiz dos diretórios `apps/frontend` e `apps/backend`.
    - Adicione as configurações necessárias, como a string de conexão do MongoDB.

## Scripts Disponíveis

No diretório raiz:

- **`turbo dev`**: Inicia o frontend e o backend em modo de desenvolvimento.

## Frontend

Para iniciar o frontend:

1. Navegue até a pasta `apps/frontend`:

    ```bash
    cd apps/frontend
    ```

2. Execute o comando de desenvolvimento:

    ```bash
    yarn dev
    ```

3. Acesse a aplicação em `http://localhost:3000`.

## Backend

Para iniciar o backend:

1. Navegue até a pasta `apps/backend`:

    ```bash
    cd apps/backend
    ```

2. Execute o comando de desenvolvimento:

    ```bash
    yarn dev
    ```

3. A API estará disponível em `http://localhost:4000`.

4. Acesse a documentação da API via Swagger em `http://localhost:4000/api`.

## Tecnologias Utilizadas

### Frontend

- **Next.js**: Framework React para renderização do lado do servidor.
- **React Hook Form**: Gerenciamento de formulários.
- **Zod**: Validação de formulários.
- **Tailwind CSS**: Estilização.

### Backend

- **NestJS**: Framework para construir APIs escaláveis.
- **MongoDB**: Banco de dados NoSQL.
- **Passport**: Autenticação.
- **Swagger**: Documentação da API.

### Monorepo

- **Turborepo**: Gerenciamento e execução de scripts no monorepo.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nome-da-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Autor**: Mateus Gutierrez (<mateusgutierrez9@gmail.com>)
