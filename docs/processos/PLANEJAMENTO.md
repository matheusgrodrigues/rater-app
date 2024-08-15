# Resumo de Como me Organizei

Abaixo, um resumo das etapas, e prints de como me organizei para este teste.

-  [Processos](#processos)
-  [Analise dos Requisitos](#analise-dos-requisitos)
-  [Especificação dos Requisitos](#especificacao-dos-requisitos)
-  [Projeto](#projeto)
-  [Testes](#testes)
-  [Impentação](#implantação)

## Processos

Eu utilizei algumas técnicas e aprendizados de outras experiências e projetos ao qual eu trabalhei, e adaptei para o cenário do teste.

## Analise dos Requisitos

Primeiramente analisei os requisitos do teste, e os critérios de avaliação que são esperados para este teste e criei uma documentação resumida em um projeto no JIRA.

## Especificacao dos Requisitos

Após o entendimento do que seria avaliado, utilizei a técnia BDD (Behavior Driven Development) juntamente com a linguagem Gherkin para especificar as tarefas de uma forma bem resumida, para que tenha um backlog de começo, meio e fim do projeto.

![Rater App](/docs/images/epicos.png "Epicos")

## Projeto

Após especificada as tarefas com BDD, organizei as tarefas em suas respectivas estórias, epicos e subtarefas. E após estar tudo organizado, iniciei a sprint de 7 dias.

![Rater App](/docs/images/listar-2.png "Epicos")

## Testes

Busquei aplicar a técnica de testes TDD (Test Driven Development) de forma bem resumida, sem me aprofundar muito, nos componentes, e telas do projeto, para certificar que está cumprindo o requisito, e também para facilitar manutenções futuras.

![Rater App](/docs/images/testes-fechado.png "Testes Pasta Fechada")
![Rater App](/docs/images/testes-aberto.png "Testes Pasta Aberta")

## Implantação

Para implantação do projeto, utilizei os servidores da vercel, e configurei a pipeline de testes para executar os testes do projeto a cada merge nas branchs, main e develop. Assim, o projeto possui uma pipeline de CI/CD.

![Rater App](/docs/images/pull-requests.png "Pipeline")
