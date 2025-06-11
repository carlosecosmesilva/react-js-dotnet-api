# React JS + .NET API Client

Este projeto é um frontend em React JS que consome uma API desenvolvida em .NET. Ele permite autenticação de usuários, listagem, cadastro e edição de livros.

## Funcionalidades

-   Login com autenticação JWT
-   Listagem de livros paginada
-   Cadastro de novos livros
-   Edição de livros existentes
-   Exclusão de livros
-   Interface responsiva e moderna

## Tecnologias Utilizadas

-   [React JS](https://reactjs.org/)
-   [React Router DOM](https://reactrouter.com/)
-   [Axios](https://axios-http.com/)
-   [Create React App](https://github.com/facebook/create-react-app)
-   [React Icons](https://react-icons.github.io/react-icons/)
-   CSS Modules

## Como rodar o projeto

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd react-js-dotnet-api/client
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Configure a URL da API:**

    Edite o arquivo `src/services/Api.js` e ajuste a URL base para o endereço onde sua API .NET está rodando.

4. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    ```

5. **Acesse a aplicação:**

    Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

> **Atenção:** Certifique-se de que a API .NET esteja rodando e acessível no endereço configurado.

## Scripts Disponíveis

-   `npm start` — Inicia o app em modo desenvolvimento.
-   `npm test` — Executa os testes.
-   `npm run build` — Gera a versão de produção.
-   `npm run eject` — Eject do Create React App (irreversível).

## Estrutura de Pastas

```
src/
  assets/         # Imagens e ícones
  pages/          # Páginas da aplicação (Login, Books, NewBook)
  services/       # Configuração do Axios para requisições HTTP
  App.js          # Componente principal
  routes.js       # Rotas da aplicação
```

## Personalização

-   Para alterar a URL da API, edite o arquivo `src/services/Api.js`.
-   Os estilos podem ser modificados nos arquivos CSS de cada página.

## Contribuição

Pull requests são bem-vindos! Para grandes mudanças, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

Este projeto está sob a licença Apache 2.0.

---

Projeto desenvolvido para fins de estudo e demonstração de integração entre React JS e .NET API.
