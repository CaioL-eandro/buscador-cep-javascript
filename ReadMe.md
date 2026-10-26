#  Buscador de CEP

Aplicação web desenvolvida com **HTML, CSS e JavaScript** para consultar endereços brasileiros por meio da API pública ViaCEP.

##  Sobre o projeto

O Buscador de CEP permite consultar informações de endereço a partir de um CEP informado pelo usuário.

O projeto foi desenvolvido para praticar manipulação do DOM, validação de formulários, requisições HTTP e programação assíncrona com JavaScript.

##  Funcionalidades

- Consulta de endereços por CEP.
- Validação de CEP com 8 dígitos numéricos.
- Exibição de logradouro, bairro, cidade, estado e CEP.
- Identificação de CEP inexistente.
- Tratamento de falhas na comunicação com a API.
- Indicador de carregamento durante a consulta.
- Bloqueio do botão de busca durante o carregamento.
- Limpeza dos campos e resultados.

##  Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- ViaCEP

##  API utilizada

O projeto utiliza a API pública [ViaCEP](https://viacep.com.br/) para consultar endereços brasileiros.

## Como executar

1. Clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server.
4. Digite um CEP válido e clique em **Buscar**.

É necessário ter conexão com a internet para realizar as consultas.

##  Aprendizados

Durante o desenvolvimento, foram praticados:

- Manipulação do DOM e eventos.
- Validação de entradas com expressões regulares (Regex).
- Requisições HTTP com `fetch()`.
- Programação assíncrona com `async/await`.
- Tratamento de exceções com `try/catch/finally`.
- Organização e reutilização de funções JavaScript.