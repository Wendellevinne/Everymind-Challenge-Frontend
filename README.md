# Everymind-Challenge-Backend

Parte do front-end da aplicação requisitada pelo processo seletivo "Programa Best Minds 2024 - Pessoa Desenvolvedora Trainee". Resolvi dividir o back-end do front-end para deixar as duas aplicações relativamente independentes e permitir com que pudessem ser acopladas em outros projetos.

A aplicação é um site que recebe entradas de produtos de um banco de dados e as renderiza como linhas para uma tabela. Nessa tabela, o usuário é capaz de verificar os dados dos produtos, criar novos produtos, editar e deletar produtos já
existentes na tabela. A tabela exibe quatro informações em relação aos produtos, que são código, nome, descrição e preço.

Utilizei o framework Angular na versão 17 para realizar a construção dessa aplicação, em conjunto com HTML, CSS, Javascript e Typescript. 

## Como executar a aplicação

**Pré-requisitos:** Node.js versão equivalente ou acima da 18.13.0

Baixe ou copie este repositório para a sua máquina local, acesse a pasta da aplicação e rode o comando **npm run start**. A rota para acessar a aplicação é a *http://localhost:4200*.

O comando acima é diferente do *ng serve* pelo fato de eu estar usando um proxy para permitir que a aplicação consiga interagir com aplicações de outros domínios, interação que seria barrada por CORS. Resolvi testar esse método nesse projeto, ao invés de configurar um WebConfig no back-end. O proxy está configurado com o endereço *http://localhost:8080/*

Na tela da aplicação, o botão em verde escrito "Novo Produto" abre um formulário em que é possível cadastrar e salvar um novo produto no banco de dados, ao fornecer os dados requisitados no mesmo. O ícone do lápis permite a edição da entrada da tabela e a lixeira permite a deleção da entrada da tabela. As opções de edição e deleção só ficarão disponíveis caso o Front-end consiga requisitar informações do Back-end.

O site possui algumas mensagens de erro, para caso ocorram problemas durante a execução de suas operações, e um gif de carregamento, para caso o sistema demore para retornar os dados requisitados pelo Front-end.

## Como realizar a integração entre os sistemas

Basta rodar este e o sistema Everymind-Challenge-Backend simultaneamente em uma mesma máquina. As rotas dos projetos já estão configuradas para se integrarem.

## TO-DO LIST
- Colocar uma caixa de diálogo para a operação de deleção;
- Terminar de ajustar as cores da aplicação;
- Colocar validações nos formulários.
