# Projeto React Testing Library

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  - Nesse projeto foram escritos testes para uma aplicação React que já está criada e configurada, utilizando [`Jest`](https://jestjs.io/) e a biblioteca [`React Testing Library`](https://testing-library.com/).
 
  - A aplicação contém uma implementação completa de todos os requisitos da Pokédex. O desafio foi que, para cada requisito listado, escrever testes que garantam sua corretude. Tomando cuidado com [testes _falsos positivos_](https://talkingabouttesting.com/2015/08/04/falsos-negativos-falsos-positivos-verdadeiros-negativos-e-verdadeiros-positivos/). Falsos positivos seriam desconsiderados na avaliação.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, foi verificado se você o desenvolvedor era/é capaz de:

  * Utilizar os seletores (queries) da React-Testing-Library em testes automatizados;

  * Simular eventos com a React-Testing-Library em testes automatizados;

  * Testar fluxos lógicos assíncronos com a React-Testing-Library;

  * Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados;

  * Testar inputs.
</details>

# Orientações

<details>
  <summary><strong>‼️ Caso queira rodar/editar em sua máquina</strong></summary><br />

1. Clone o repositório

2. Instale as dependências e inicialize o projeto:
    * `npm install`

3. Crie uma branch a partir da branch `main`
  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`
    * Exemplo: `git checkout -b fulano(a)-detal-shopping-cart`

4. Quando fizer mudanças, adicione-as ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer as alterações realizadas em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin fulano(a)-detal-shopping-cart`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-022-a-project-shopping-cart/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
    * Coloque um título para a sua _Pull Request_
    * Exemplo: _"Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />
### ESLint e Stylelint

Para garantir a qualidade do código, utilizou-se neste projeto os linters `ESLint` e `Stylelint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção!

Para poder rodar o `ESLint` e o `Stylelint` certifique-se de ter executado o comando `npm install` dentro do projeto.

Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

Se a análise do `ESLint` e do `Stylelint` encontrarem problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no VSCode. Para isso, basta fazer o download do plugin `ESLint` e instalá-lo.

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Neste projeto vocêfoi desenvolvido os testes de uma aplicação React.

  ### Quem testa os testes?

  O avaliador automatizado **testará os testes!** A ideia dele é a seguinte: o desenvolvedor escreve casos de teste para a aplicação, certo? E esses testes têm que garantir que a aplicação está funcionando, certo? Pois bem! Se é quebrada uma parte da aplicação, fazendo uma alteração no código, os testes devem quebrar, certo? Pois é isso que o avaliador faz!
  
  Pense da seguinte forma: o avaliador vai navegar por toda a aplicação da Pokédex e vai fazer várias mudanças no código **para que ela quebre e pare de funcionar**. Em seguida ele vai rodar seus testes. Caso seus testes não acusem que a aplicação está com problemas, o avaliador não vai aprovar aquele requisito! Se, para todas as alterações que o avaliador fizer no código da aplicação, os seus testes acusarem problemas, tudo será aprovado! O avaliador garante, portanto, que seus testes, de fato, testam a aplicação da Pokédex como se deve.
  
  Na linguagem do avaliador, dizemos que cada mudança que o avaliador faz na sua aplicação é um **mutante**. O avaliador cria vários mutantes e seus testes **devem matar todos!** Se algum mutante sobreviver, temos problemas. Certo? Vamos aos requisitos então!

  ### Executando os testes localmente

  - Há uma pasta chamada `./stryker` com diversos arquivos `nomeArquivo.conf.json`. Cada um deles é a configuração do avaliador para um requisito e ela **não deve ser alterada**. 
  
  - Após finalizar os testes unitários de um arquivo, para testá-lo individualmente, execute o comando abaixo:
  ```bash
  npx stryker run ./stryker/nomeDoArquivo.conf.json
  ```

  - Por exemplo:
    - Passo 1: _"Acabei de fazer os testes unitários do arquivo `PokemonDetails.test.js`!"_
    - Passo 2: _"Vou rodar os meus testes para ver se eles estão todos passando!"_
    - Passo 3: _"Agora vou rodar o comando para o requisito com `npx stryker run ./stryker/PokemonDetails.conf.json`!"_
    * Com o comando acima, ele vai executar o Stryker e verificar se os seus testes unitários estão corretos.

  - Quando o comando `npx stryker run ./stryker/PokemonDetails.conf.json` for executado, com todos os testes passando, o avaliador apresentará uma saída semelhante à abaixo.

    ![image](testepassando.png)
    
  - Uma falha ocorre quando os testes unitários não cobrem 100% de caso de uso gerados pelo Stryker. Nesse caso, algo semelhante à imagem abaixo aparecerá.

    ![image](testefalhando.png)
    
  * Repare que, na tabela, 4 casos de uso constam como `Killed` e 3 constam como `Survived`. Isso significa que **3 casos de uso não foram contemplados pelos seus testes**! Os casos de uso, que geraram os erros, aparecem acima. Na linha verde (ao lado de cada símbolo `+`), o Stryker exibe o erro que ele injetou no teste para testar um caso de uso. Esse erro não foi coberto pelo seu teste.

  ⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**
</details>

# Requisitos

:warning: **PULL REQUESTS COM ERROS DE LINTER NÃO FORAM AVALIADAS.** :warning:

## 1. Teste o componente `<App.js />`

  > Caminho do componente: `src/App.js`

- <details><summary>Teste se o topo da aplicação contém um conjunto fixo de links de navegação:</summary>

  - O primeiro link deve possuir o texto `Home`;

  - O segundo link deve possuir o texto `About`;

  - O terceiro link deve possuir o texto `Favorite Pokémons`.
</details>

- Teste se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação;

- Teste se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação;

- Teste se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação;

- Teste se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `App.test.js` contempla 100% dos casos de uso criados pelo Stryker.
</details>

---

## 2. Teste o componente `<About.js />.`

  > Caminho do componente: `src/pages/About.js`

  - Teste se a página contém as informações sobre a Pokédex;

  - Teste se a página contém um heading `h2` com o texto `About Pokédex`;

  - Teste se a página contém dois parágrafos com texto sobre a Pokédex;

  - Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `About.test.js` contempla 100% dos casos de uso criados pelo Stryker.
  </details>

---

## 3. Teste o componente `<FavoritePokemons.js />`

  > Caminho do componente: `src/pages/FavoritePokemons.js`
  
  - Teste se é exibida na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha pokémons favoritos;

  - Teste se são exibidos todos os cards de pokémons favoritados.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `FavoritePokemons.test.js` contempla 100% dos casos de uso criados pelo Stryker.
  </details>

---

## 4. Teste o componente `<NotFound.js />`

  > Caminho do componente: `src/pages/NotFound.js`

  - Teste se a página contém um heading `h2` com o texto `Page requested not found 😭`;

  - Teste se a página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `NotFound.test.js` contempla 100% dos casos de uso criados pelo Stryker.
  </details>

---

## 5. Teste o componente `<Pokedex.js />`

  > Caminho do componente: `src/pages/Pokedex.js`

  - Teste se a página contém um heading `h2` com o texto `Encountered pokémons`;

  - <details><summary>Teste se é exibido o próximo pokémon da lista quando o botão <code>Próximo pokémon</code> é clicado:</summary>

    - O botão deve conter o texto `Próximo pokémon`;

    - Os próximos pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;

    - O primeiro pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último pokémon da lista.
  </details>

  - Teste se é mostrado apenas um pokémon por vez;

  - <details><summary>Teste se a Pokédex tem os botões de filtro:</summary>

    - Deve existir um botão de filtragem para cada tipo de pokémon, sem repetição;

    - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;

    - O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`;

    - O botão `All` precisa estar **sempre** visível.
  </details>

  - <details><summary>Teste se a Pokédex contém um botão para resetar o filtro:</summary>

    - O texto do botão deve ser `All`;

    - A Pokedéx deverá mostrar os pokémons normalmente (sem filtros) quando o botão `All` for clicado;

    - Ao carregar a página, o filtro selecionado deverá ser `All`.
  </detail>

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `Pokedex.test.js` contempla 100% dos casos de uso criados pelo Stryker.
  </details>

---

## 6. Teste o componente `<Pokemon.js />`

  > Caminho do componente: `src/components/Pokemon.js`

  - <details><summary>Teste se é renderizado um card com as informações de determinado pokémon:</summary>

    - O nome correto do pokémon deve ser mostrado na tela;

    - O tipo correto do pokémon deve ser mostrado na tela;

    - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida;

    - A imagem do pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon.
  </details>

  - Teste se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do pokémon exibido;

  - Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon;
  
  - Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do pokémon cujos detalhes se deseja ver;

  - <details><summary>Teste se existe um ícone de estrela nos pokémons favoritados:</summary>

    - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;

    - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do pokémon exibido.
  </details>

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `Pokemon.test.js` contempla 100% dos casos de uso criados pelo Stryker.
  </details>

---

## 7. Teste o componente `<PokemonDetails.js />`

  > Caminho do componente: `src/pages/PokemonDetails.js`

  - <details><summary>Teste se as informações detalhadas do pokémon selecionado são mostradas na tela:</summary>

    - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do pokémon;

    - **Não** deve existir o link de navegação para os detalhes do pokémon selecionado;

    - A seção de detalhes deve conter um heading `h2` com o texto `Summary`;

    - A seção de detalhes deve conter um parágrafo com o resumo do pokémon específico sendo visualizado.
  </details>

  - <details><summary>Teste se existe na página uma seção com os mapas contendo as localizações do pokémon:</summary>

    - Na seção de detalhes deverá existir um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do pokémon exibido;

    - Todas as localizações do pokémon devem ser mostradas na seção de detalhes;

    - Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;

    - A imagem da localização deve ter um atributo `src` com a URL da localização;

    - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do pokémon.
  </details>

  - <details><summary>Teste se o usuário pode favoritar um pokémon através da página de detalhes:</summary>

    - A página deve exibir um `checkbox` que permite favoritar o pokémon;

    - Cliques alternados no `checkbox` devem adicionar e remover respectivamente o pokémon da lista de favoritos;

    - O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`.
  </details>
  
  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `PokemonDetails.test.js` contempla 100% dos casos de uso criados pelo Stryker.
  </details>

---

# Requisitos não avaliativos

O que temos a seguir não são requisitos bônus - são ideias para você se aprofundar mais no projeto e **aprender mais!** Que tal trabalhar neles? Começamos com algo bem direto:

  <details>
  <summary><strong>A cobertura de testes deve ser 100%</strong></summary>

  - Para ver a cobertura de testes, execute no terminal o comando `npm run test-coverage`.
  </details>

Além disso, a Pokédex é uma aplicação estática, com seus dados pré-definidos. Utilizando a [PokéAPI](https://pokeapi.co/), é possível deixá-la mais dinâmica e realista.

Implemente os requisitos propostos a seguir e escreva testes para eles. Tente manter sempre a cobertura de testes em 100%, garantindo assim que não há código ou fluxos lógicos não testados. Para um desafio adicional, tente utilizar TDD - escreva os testes à medida que for implementando os requisitos.

  - <details><summary>Adicione uma rota para exibir uma lista de localizações</summary>

    - A URL da rota deve ser `/locations`;

    - A página deve exibir uma lista com as localizações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2#locations-section) como utilizar a PokéAPI para buscar uma lista de localizações.
  </details>

  - <details><summary>Adicione na barra de navegação um link para a lista de localizações</summary>

    - O link deve conter o texto `Locations`;

    - Ao clicar no link, a página com a lista de localizações deve ser exibida.
  </details>

  - <details><summary>Adicione botões de paginação na lista de localizações.</summary>

    Por padrão, os _endpoints_ da PokéAPI retornam no máximo 20 resultados. Utilizando os parâmetros `limit` e `offset`, você pode especificar qual página deseja buscar e qual seu tamanho. Veja [aqui](https://pokeapi.co/docs/v2#resource-lists-section) como utilizar estes parâmetros.

    - Adicione dois botões "Anterior" e "Próxima" que permitam navegar entre as página da lista de localizações;

    - Na primeira página, o botão "Anterior" deve ser desabilitado. Da mesma forma, ao alcançar a última página, o botão "Próximo" deve ser desabilitado.
  </details>

  - <details><summary>Adiciona uma rota para exibir uma lista de gerações.</summary>

    - A URL da rota deve ser `/generations`;

    - A página deve exibir uma lista com as gerações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2#generations) como utilizar a PokéAPI para buscar uma lista de gerações.
  </details>

  - <details><summary>Adicione na barra de navegação um link para a lista de gerações</summary>

    - O link deve conter o texto `Generations`;

    - Ao clicar no link, a página com a lista de gerações deve ser exibida.
  </details>

  - <details><summary>Adicione uma rota para exibir informações sobre uma geração</summary>

    - A URL da rota deve ser `/generations/<id>`, onde `<id>` é o id da geração exibida;

    - A página deve exibir, após buscar na PokéAPI, o nome da geração e uma lista com os nomes dos pokémons introduzidos nesta geração.
  </details>

  - <details><summary>Adicione a cada geração na lista de gerações um link para a página de detalhes desta geração</summary>

    - Ao clicar no link, a página com informações sobre a geração clicada deve ser exibida.
  </details>
