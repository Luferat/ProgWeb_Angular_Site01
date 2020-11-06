# Site da Web com Angular

Este curso, tem como objetivo descrever todos os passos para a criação de um **aplicativo Web** que é um site informativo bem simples, mas com recursos úteis, usando como base o framework **[Angular](https://angular.io/)** para desenvolver o "front-end" e a **API do [Firebase.com](https://firebase.com/)** no "back-end".

> Os códigos fonte desta aula estão no branch "04_Primeiras_Páginas".

## Antes de Programar...

### Identidade do Site

Para que nosso novo site tenha pelo menos um objetivo mínimo, dê uma identidade para ele. Escolha um nome, um assunto, uma paleta de cores, um slogam e até um objetivo. Isso faz com que, além de ficar mais interessante, o site se torne mais apresentável, podendo assim, ser incluído em um portfólio profissional, por exemplo.

Além disso, faz parte da estratégia deste curso, publicar o site na Internet, tornando-o visível para todo o mundo, e algo muito genérico, pode não chamar a atenção!

> Meu site vai se chamar "O Fuinha"! Por que? Não sei! Gosto do nome  tem um "cunho" jornalístico... Mas, "O Fuinha" é do meu site! Escolha uma identidade "legal" para o seu. Se você não sabe o que é uma fuinha, [clique aqui](https://pt.wikipedia.org/wiki/Fuinha).

### Site Responsivo e Inclusivo

Dentre as melhores práticas no desenvolvimento de um site da Web moderno está a "mobile first". Isso significa que faremos um site responsivo, iniciando o desenvolvimento da interface em telas menores como as de celular, e depois, fazemos ajustes para que o site fique apresentável nas telas maiores, criando assim, um site totalmente responsivo.

Quando o aplicativo abrir no Google Chrome, tecle `[F12]` para entrar nas "Ferramentas do desenvolvedor" e então tecle `[Ctrl]`+`[Shift]`+`[M]` para mostrar a barra de ferramentas responsivas. Ajuste a largura para 320 pixels, que será a menor largura que nosso aplicativo abrirá sem distorções ou barras de rolagem...

### PWA

Outro recurso útil que pode ser implementado diretamente no aplicativo Angular é o PWA (Progressive Web Application) que permite que o aplicativo Web se comporte como um aplicativo "nativo" do dispositivo onde o site está sendo aberto.

### SPA e Roteamento

Outra característica marcante em sites com Angular é que eles são, por padrão, "SPA" (Single Page Application), o que significa que o site, ao ser solicitado é carregado no navegador do usuário e, se ele solicita uma nova página, esta é carregada dentro da estrutura do site, sem a necessidade de recarregar a página toda. Isso faz com o que o site exiba os conteúdos solicitados de forma mais rápida e, ao mesmo tempo, economiza banda de conexão.

Para que isso seja possível o Angular trabalha com o conceito de "rotas, onde, basicamente, o endereço do navegador é o endereço de um componente do site e não de uma página.

## Criando o Branch da Aula

Vamos criar o "branch" desta aula:

- [ ] Abra o GitHub Desktop,;
- [ ] Clique em `Current repository`, e selecione o repositório deste aplicativo;
- [ ] No menu "Branch", clique em `new branch`;
- [ ] Digite o nome (Name) `04_Primeiras_Páginas`;
- [ ] Selecione o branch "03_Criando_o_Aplicativo" como base para este novo branch;
- [ ] Clique em `[Create branch]`;
- [ ] Clique em seguida, em `[Publish branch]` para enviar este novo branch para o GitHub.com.

## Primeiros Ajustes e Testes

Com a base do nosso aplicativo já criada, vamos fazer as primeiras personalizações...

> Para executar os passos desta aula, abra o arquivo indicado no VSCode e localize todos os comentários do código, iniciados com `4.x)`.

### Preparação

> Torne isso uma rotina!

- [ ] Se ainda não o fez, localize e rode duas sessões do "Node.js command prompt";
- [ ] No primeiro prompt, acesse o diretório do aplicativo e inicie o servidor Web, comandando:
```
C:
cd \Projetos\Angular\site01
ng serve --open
```
Lembre-se que o aplicativo pode ser aberto pelo navegador, acessando o endereço `http://localhost:4200`. Abra-o no Google Chrome.

- [ ] No segundo prompt, inicie o VScode, comandando:
```
C:
cd \Projetos\Angular\site01
code .
```
- [ ] No editor, abra o diretório `src` onde todos os arquivos do site ficam. Salvo indicação contrária, você vai localizar todos os arquivos neste diretório.

### Primeiros ajustes

> Observe que, na medida em que salvamos as alterações que fazemos nos códigos o aplicativo é automaticamente recarregado pelo navegador, não sendo necessário teclar [F5] à todo instante para ver as mudanças.

- [ ] Instalação do módulo PWA
	- Se o servidor está ativo, interrompa-o com `[Ctrl]`+`[C]` e `[S]`+`[Enter]`;
	- No mesmo prompt, comande `ng add @angular/pwa`;
	- Inicie o servidor novamente, comandando `ng serve`.

- [ ] Edite "index.html", que é a pagina inicial do aplicativo:
	- Altere `<html lang="en">` para `<html lang="pt-br">`;
	- Altere `<title>Site01</title>` para `<title>O Fuinha</title>`;
*Troque "O Fuinha" pelo nome do seu site!*
	- Adicione as folhas de estilos do "[Font Awesome](https://cdnjs.com/libraries/font-awesome)" na tag `<head>`;
	- Salve e feche o arquivo.

- [ ] Edite "style.css", que é a folha de estilos global do aplicativo:
	- 4.1) Reset básico do CSS
	- Salve e feche o arquivo.
- [ ] Edite "app/app.component.html" que é o conteúdo do `<body>` do aplicativo:
	-  Faça uma cópia deste documento para consultas futuras, usando `[Ctrl]`+`[C]` e `[Ctrl]`+`[V]`;
	- Apague todo o conteúdo do documento (do original, não da cópia);
	- 4.1) Implemente a estrutura básica
	- Observe a presença do seletor `<router-outlet></router-outlet>`, que é onde o conteúdo do site será carregado;
	- Salve e feche o arquivo.

## Criando as Páginas e Rotas

A ideia inicial é termos uma estrutura de navegação bem simples, com apenas 5 páginas no começo:
| Página | Função |
|--|--|
| home | Página inicial do aplicativo. |
| news | Página com notícias atualizadas.|
| contacts | Página com informações de contatos, incluindo um formulário. |
| about | Informações sobre o site, sobre o autor, políticas de privacidade, etc. |
| e404 | Página de "Erro 404", exibida quando acessamos um componente inexistente. |

O menu principal "linkará" diretamente cada uma das páginas, com exceção da página "e404".

### Criando as Páginas

- [ ] No "Node.js command prompt", que está disponível, comande:
```
ng generate component pages/home
ng generate component pages/news
ng generate component pages/contacts
ng generate component pages/about
ng generate component pages/e404
```

Observe que, seguindo o modelo [MVC](https://pt.wikipedia.org/wiki/MVC), cada "componente" é composto de 4 arquivos. Por exemplo, para o componente 'home', temos:
- `home.component.css` &rarr; Folhas de estilo desta página;
- `home.component.html` &rarr; Arquivo HTML com a "view" da página;
- `home.component.spec.ts` &rarr; Arquivo de teste unitário do componente;
- `home.component.ts` &rarr; Arquivo com o TypeScript (control) da página.

> *Como, à princípio, não faremos testes unitários neste aplicativo, os arquivos "spec.ts" podem ser removidos para "economia de espaço", mas isso não é nada recomendado...*

Criamos as "rotas" para cada página de forma que possamos acessá-las pelo endereços:
- [ ]  Edite "app/app-routing.module.ts" que é o arquivo responsável pelo registro das rotas:

	- 4.1) Importe os componentes
	- 4.2) Adicione as rotas para cada "página" na constante "Routes";
	- 4.3 à 4.7) Rotas para as páginas internas do aplicativo;
	- 4.8) Página de erro para rotas inválidas (deve ser sempre a última rota)
Esta rota é carregada se nenhuma outra for encontrada. Observe que essa rota deve ser sempre a última a ser listada;
	- Salve e feche o arquivo.

Cada rota na "constante *Rotas*" recebe, à princípio, 3 valores:

- `path` &rarr; é o caminho (endereço) usado para acessar este componente;
- `component` &rarr; é o componente que vai ser carregado pela rota;
- `data` &rarr; Algumas informações adicionais que serão passadas para o aplicativo quando esta rota for carregada. Aqui, no caso, usaremos futuramente,  para alterar o título da página (`title`) de forma dinâmica, tornando o site mais [SEO Friendly](https://www.intermidias.com.br/seo-otimizacao-de-sites/seo-friendly/).

	- [ ] Teste o funcionamento das rotas, acessando cada uma pelo navegador:
	- `http://localhost:4200/` &rarr; redireciona para `http://localhost:4200/home`;
	- `http://localhost:4200/home` &rarr; Exibe "home works!";
 	- `http://localhost:4200/news` &rarr; Exibe "news works!";
 	- `http://localhost:4200/contacts` &rarr; Exibe "contacts works!";
 	- `http://localhost:4200/about` &rarr; Exibe "about works!";
 	- `http://localhost:4200/abc` &rarr; Exibe "e404 works!";

Com as rotas funcionando, podemos criar um "Menu principal".

- [ ] Edite "app/app.componente.html" e inclua os links dentro do seletor `<nav>`:

	- 4.2) Menu principal
Observe que usamos o atributo `routerLink=""` para apontar para a rota, por se tratar de uma "rota interna" e não de um endereço de Internet ([URL](https://pt.wikipedia.org/wiki/URL)) válido, onde usaríamos `href=""`, por padrão.
	- Salve e feche o arquivo.

Teste o funcionamento do menu para verificar se as rotas / componentes corretos são carregados.

## Adicionando Conteúdo

Vamos editar cada componente/página para exibir um conteúdo melhor, apenas para melhorar o visual do que estamos "vendo":

- [ ] Edite "app/pages/home/home.component.html":
	- 4.1) Conteúdo responsivo em 1/2 colunas;
	- Salve e feche o arquivo.

- [ ] Edite "app/pages/news/news.component.html":
	- 4.1) Conteúdo responsivo em 1/2 colunas;
	- Salve e feche o arquivo.

- [ ] Edite "app/pages/contacts/contacts.component.html":
	- 4.1) Conteúdo responsivo em 1/2 colunas;
	- Salve e feche o arquivo.

- [ ] Edite "app/pages/about/about.component.html":
	- 4.1) Conteúdo responsivo em 1/2 colunas;
	- Salve e feche o arquivo.

- [ ] Edite "app/pages/e404/e404.component.html":
	- 4.1) Conteúdo responsivo em 1/2 colunas;
	- Salve e feche o arquivo.

- [ ] Edite "style.css" para tornar a view mais apresentável:
	- 4.2) Páginas responsivas com 1/2 colunas
	- 4.2) Botões
	- Salve e feche o arquivo.

Teste o aplicativo e faça alterações à seu gosto.

## Enviando para a Nuvem

Com o aplicativo testado, vamos atualizar o repositório dele no GitHub.com.

- [ ] Encerre o aplicativo, teclando no prompt a sequencia `[Ctrl]`+`[C]` e, em seguida, responda à pergunda `Deseja finalizar o arquivo em lotes (S/N)?` teclado `[S]` e `[Enter]`.
- [ ]  Abra o GitHub Desktop e verifique se está no repositório correto;
- [ ] Na coluna da esquerda, onde vemos as alterações feitas no branch, logo abaixo, em "Summary", escreva "Aula 04 concluída";
- [ ] Clique em `[Commit 04_Primeiras_Paginas]`;
- [ ] Na coluna da direita, clique em `[Publish branch]` para concluir.

Você pode acessar seu GitHub.com e verificar se está tudo ok com o novo repositório, localizando o novo branch "04_Primeiras_Paginas".

### Merge com o Branch Master

Vamos fazer com que o "branch master" tenha a versão mais recente dos códigos:

- [ ]  Abra o GitHub Desktop e verifique se está no repositório correto;
- [ ] Clique na guia "Current branch" e clique no branch "master" para chavear o ambiente para esta versão;
- [ ] Abra o menu "Branch" e selecione "Merge into current branch...";
- [ ] Selecione o branch "04_Primeiras_Paginas";
- [ ] Clique em `[Merge 04_Primeiras_Paginas into master]`;
- [ ] Clique em `[Push origin]` para publicar as atualizações no GitHub.com.

Ainda no branch "master", inicie a aplicação, comandando `ng serve` no prompt de comandos e teste a aplicação novamente.

## Conclusão

Mesmo trabalhando com recursos modernos como Angular, MVC, TypeScript, roteamento, PWA e outros, o bom e velho conhecimento profundo de HTML e CSS é essencial para o front-end. Continue se aprimorando, mas sem desfocar dessas linguagens.

> Uma sugestão, seria usar aqui algum framework CSS como "[Bootstrap](https://getbootstrap.com/)" ou "[Materialize](https://materializecss.com/)", mas, **não vou fazer isso**. Vamos escrever HTML e CSS "na unha" e aproveitar para revisar antigas e aprender novas práticas dessas linguagens, integrando-as à ambientes JavaScript modernos.

Na próxima, vamos estilizar mais "profundamente" nossa aplicação Web, para que ela pareça minimamente com um site da Web visitável.

*EOF*