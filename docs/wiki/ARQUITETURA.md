## Framework

-  React.js **18.3.1**

## Deploy e Hospedagem

-  Vercel

## Tecnologias

-  HTML5,CSS3
-  Typescript
-  Jira/Notion.
-  Agil/Scrum
-  BDD/TDD
-  DDD
-  Clean Code/Clean Architecture
-  Responsive/Mobile First
-  Fetch API
-  GitFlow
-  Prettier/Eslint
-  [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
-  [Zod](https://zod.dev/)
-  [React Hook Form](https://react-hook-form.com/)
-  [Styled Components](https://styled-components.com/)
-  [Zustand](https://zustand-demo.pmnd.rs/)
-  [TMDB API](https://developer.themoviedb.org/reference/genre-movie-list)
-  [Jest](https://jestjs.io/pt-BR/)
-  [React Testing Library](https://testing-library.com/)
-  [Figma](https://figma.com/)
-  [Git/Github](https://github.com/matheusgrodrigues/rater-app)
-  [React Date Range Picker](https://projects.wojtekmaj.pl/react-daterange-picker/)
-  [React Calendar](https://projects.wojtekmaj.pl/react-calendar/)

## Estrutura de Arquivos e Pastas

| !                                                     |
| ----------------------------------------------------- | ----------------------------------------------------------- |
| ![Pastas Fechadas](/docs/images/estrutura-pastas.png) | ![Pastas Abertas](/docs/images/estrutura-pastas-aberta.png) |

Utilizei Clean Architecture para organizar os arquivos e pastas, separando as responsabilidades, e organizando de uma forma totalmente escalavel e fácil de prestar manutenção pelos membros da equipe. Abaixo um resumo dos arquivos e pastas do projeto.

-  **docs**: Documentações do projeto (este que você está lendo).
-  **public**: Pasta de assets e imagens do projeto (não precisei usar).
-  **src**
   -  \***\*mocks\*\***: Dados utilizados pelos testes para simular a aplicação.
   -  \***\*tests\*\***: Todos os testes do sistema, está replicando a localização de nomes e pastas do seu equivalente.
   -  **app**: Pasta onde está localizado os arquivos relacionados as Paginas da aplicação.
      -  **Actor**: Arquivos responsaveis pela rota de Ator.
      -  **Home**: Arquivos responsaveis pela rota da Home.
      -  **Movie**: Arquivos responsaveis pela rota do Filme
      -  **layout.tsx**: Arquivo de layout global que envolve todo o sistema (menu, footer e meio).
      -  **global-error.tsx**: Arquivo de erro global da aplicação.
      -  **store.ts**: Arquivo do estado global da aplicação (zustand).
   -  **components**: Todos os componentes do sistema, está organizado por pastas representando o **Atomic design**.
   -  **config**: Configurações do sistema, atualmente configurando os design tokens do sistema.
   -  **core**: Arquivos do coração da aplicação (helpers, utils, middlewares).
      -  **middlerare.ts**: Objeto com os middleware, atualmente só possui o responsavel por passar os tokens nas requisições http, utilizada pelos Services.
      -  **utils/format.ts**: Pasta de utilitarios, atualmente exportando um format.ts que possui helpers para filtrar informações do filme, como formatar numeros entre outros.
      -  **utils/test-utils**: Arquivo para facilitar os testes com o jest, envolve todos os testes.
      -  **theme.ts**: Arquivo com as configurações do tema (tamanho de fonts, tipografia, espacamentos, cores, etc....)
   -  **schemas**: Assinaturas da estrutura de dados retornados pelos endpoints de api, e também as interface e types de cada Entidade.
   -  **services**: Serviços de rede, utilizada pelo frontend para realizar solicitações http para api.
   -  **index.css**: CSS global do sistema, aplica o reset e padroniza o tamanho da fonte padrão.
   -  **index.tsx**: Arquivo principal do projeto, é onde o react envolve todos os seus filhos.
   -  **preflight.css**: Arquivo de reset.css, ele remove inconsistencias sutis entre os browsers antigos e novos, mantendo um padrão consistente (não tem nada de mais, apenas zeram margens e coisas do tipo).
   -  **router.tsx**: Arquivo responsavel pela renderização das rotas do sistema e hidratação de dados.
-  **.env.example**: Arquivo de exemplo para configuração dos .env.\* do sistema.
-  **eslint.config.js**: Configurações do eslint.
-  **.prettierrc**: Configurações do formatador prettier.
-  **tsconfig**: Configurações do typescript.
-  **package.json**: Arquivo que possui scripts dos pacotes do projeto, alterei alguns comandos, por exemplo o `npm run test`, irá executar com --verbose e o `npm run build` irá executar o prettier, jest, e depois buildar.

> Caso tenha esquecido de algo ou tenha alguma duvida, estou sempre a disposição : )
