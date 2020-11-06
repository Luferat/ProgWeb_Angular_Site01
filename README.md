# Site da Web com Angular

Este curso, tem como objetivo descrever todos os passos para a criação de um **aplicativo Web** que é um site informativo bem simples, mas com recursos úteis, usando como base o framework **[Angular](https://angular.io/)** para desenvolver o "front-end" e a **API do [Firebase.com](https://firebase.com/)** no "back-end".

## Formato do curso

Todo o curso está no GitHub.com e é totalmente prático. O conteúdo de cada aula fica armazenado em um "branch" diferente e o "branch master" sempre contém a versão mais recente do aplicativo Web. Neste mesmo "branch da aula", no diretório "aulas", você encontra o documento com os passos desta aula e das anteriores também.

Cada passo no documento da aula indica uma ação, por exemplo, **na aula 3**, aparece:

```• Edite 'app/app.component.ts' → 1 à 5```

Isso indica que você deve abrir o arquivo 'app/app.component.ts' e localizar os comentários. 

> Note que, todos os comentários iniciados com ``3.X)`` são relacionados à **aula 3**.

Neste caso, você deve localizar os comentários '`3.1), 3.2), ..., 3.5)`' para executar as atividades desta ação específica.

Ou seja, todas as explicações necessárias estão nos documentos das aulas e nos comentários dos próprios arquivos (códigos fonte) a serem editados.

## Pré-requisitos

Para fazer este curso, é importante que você tenha algum conhecimento de programação Web (HTML, CSS e JavaScript) e que tenha bastante vontade de pesquisar, tanto nas documentações oficiais dos frameworks e componentes, quanto em outras fontes, além, é claro de um computador conectado à Internet. Ter algum domínio no uso do Git e do GitHub.com, que serão muito importantes e são fundamentais para qualquer programador.

Se quiser aprender a usar o Git e o GitHub.com de forma satisfatória, recomendo o curso abaixo:

&rarr; [Curso de Git e GitHub sem usar comandos do terminal](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)

> Seguindo as dicas do curso acima, nas práticas, usarei o [GitHub Destop](https://desktop.github.com/) para fazer o versionamento do aplicativo, dada a sua "intimidade" com o GitHub.com e também para evita a digitação de comandos no console do Git. Claro que, quem quiser, pode usar a CLI para o Git, sem problemas.

## Sobre o Angular

> *Angular (comumente referido como "Angular 2+" ou "Angular 2") é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu. [Wikipedia](https://pt.wikipedia.org/wiki/Angular_%28framework%29)*

Importante! Durante suas pesquisas, cuidado para não confundir *Angular* com *AngularJS*!

Para saber mais sobre o Angular:

 - [Wikipedia](https://pt.wikipedia.org/wiki/Angular_%28framework%29)
 - [Site oficial, incluindo documentação](https://angular.io/)
 - [Diversos cursos e tutoriais gratuitos no Youtube](https://www.youtube.com/results?search_query=criando%20Sites%20com%20Angular)
 - [Cursos gratuitos de Angular na Udemy](https://www.udemy.com/courses/search/?price=price-free&q=angular&sort=relevance&src=ukw)
 - [Tutoriais completos de Angular na Medium](https://medium.com/search?q=Angular)
 - ...

## Sobre o aplicativo Web

Como vimos, o objetivo é "criar" um site informativo da Web, com uma seção de artigos, notícias atualizadas e um formulário de contados simples.

Também teremos uma área restrita para assinantes cadastrados e logados, para que eles tenham acesso a conteúdos exclusivos.

### Especificações
- Plataforma:
	- Node.js versão 14.15.0 ou superior.
	- Git versão 2.29.2 ou superior;
- Front-end:
	- Framework: Angular CLI versão 10.2.0 ou superior;
	- Linguagens: HTML, CSS e TypeScript.
- Back-end:
	- Google Firebase:
		- Social Login → Firebase Authentication 8.13.1
		- Database → Firebase Cloud Firestore 8.13.1

## Lista de Branches (Aulas)

> As aulas **[01 Visão Geral](https://github.com/Luferat/ProgWeb_Angular_Site01/blob/master/aulas/01_Visao_Geral.md)** e **[02 Preparação do Ambiente](https://github.com/Luferat/ProgWeb_Angular_Site01/blob/master/aulas/02_Preparacao_do_Ambiente.md)** não possuem branchs associados porque não ocorreram edições no código do site, Você pode ver a descrição destas aulas no diretório "aulas" do branch "master".

#### [03_Criando_o_Aplicativo](https://github.com/Luferat/ProgWeb_Angular_Site01/blob/master/aulas/03_Criando_o_Aplicativo.md)

Este branch contém o aplicativo Angular recém criado, sem modificações.

#### [04_Primeiras_Paginas](https://github.com/Luferat/ProgWeb_Angular_Site01/blob/master/aulas/04_Primeiras_Paginas.md)

Neste branch está os primeiros procedimentos de criação do nosso aplicativo, como a criação das primeiras páginas e rotas.

## Contribuindo

Existem várias formas de contribuir, mas, a principal é fazendo um "fork", clonando no seu PC local e testando o aplicativo. Corrija bugs, otimize o código e a documentação, implemente novos recursos...

Melhor ainda se você der um objetivo mais específico para o aplicativo, mostrando que ele tem aplicação prática.

Só não esqueça de compartilhar sua evolução conosco!

## Conclusão

É um formato novo(?). Vamos ver se vai dar certo!

_EOF_