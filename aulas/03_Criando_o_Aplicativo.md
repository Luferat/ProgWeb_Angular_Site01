# Site da Web com Angular

Este curso, tem como objetivo descrever todos os passos para a criação de um **aplicativo Web** que é um site informativo bem simples, mas com recursos úteis, usando como base o framework **[Angular](https://angular.io/)** para desenvolver o "front-end" e a **API do [Firebase.com](https://firebase.com/)** no "back-end".

> Os códigos fonte desta aula estão no branch "03_Criando_o_Aplicativo".

## Criando o Aplicativo

Na aula anterior, preparamos a plataforma para desenvolver nossos aplicativos Web com Angular e outros recursos. Se você ainda não executou as etapas daquela aula, retorne e faça!

Para criar um novo aplicativo em Angular, vamos seguir os passos do "Get Started" do [site oficial](https://angular.io/guide/setup-local).

- [ ] Localize a abra ***duas sessões*** do aplicativo "**Node.js command prompt**";

A primeira sessão ficará "bloqueada" enquanto o aplicativo está rodando, por isso, precisamos de uma segunda sessão, para digitar os comandos necessários. *Torne isso uma rotina!*

> Tecle `[Enter]` após cada linha digitada.

- [ ] Na primeira sessão do "**Node.js command prompt**", acesse o diretório onde o aplicativo vai ser criado. 

```
C:
cd \Projetos\Angular
```

- [ ] Para criar o aplicativo, comande:

```
ng new site01
```

A CLI vai perguntar algumas coisas como:
- `Would you like to add Angular routing? (y/N)`
Tecle `[Y]` para usar roteamento no aplicativo.

- `Which stylesheet format would you like to use? (Use arrow keys)`
Use as setas para selecionar o `CSS` como formato das folhas de estilo.

Agora, aguarde o download dos recursos necessários e a criação do aplicativo...

Para testar o aplicativo criado, iniciamos o servidor Web do Angular, comandando:

```
cd site01
ng ng serve --open
```
O aplicativo será aberto no navegador padrão do sistema e estará acessível pelo endereço `http://localhost:4200/`.

Agora, vamos fazer de outra forma, um pouco diferente:
- [ ] Encerre o aplicativo, teclando no prompt a sequencia `[Ctrl]`+`[C]` e, em seguida, responda à pergunda `Deseja finalizar o arquivo em lotes (S/N)?` teclado `[S]` e `[Enter]`.

- [ ] Saia do diretório do aplicativo e crie outro, comandando:
```
cd ..
ng new site02 --style=css --routing
```
Observe que agora, as perguntas sobre a criação do aplicativo não aparecem, porque elas já foram respondidas no próprio comando de criação do aplicativo. &#128521;

Antes de "rodar" alguma aplicativo, crie mais um, só para treinar e também para ter de "reserva" para testes futuros. Costumo fazer isso e ter sempre "aplicativos em branco" porque o processo de criação é um tanto demorado...
```
cd ..
ng new site03 --style=css --routing
```
"Rode" novamente o primeiro aplicativo, comandando:
```
cd site01
ng ng serve --open
```

## Enviando para a Nuvem

Com ele testado, vamos criar um repositório no GitHub.com para ele.

> *Os procedimentos à seguir usam o GitHub Desktop...*

- [ ] Encerre o aplicativo, teclando no prompt a sequencia `[Ctrl]`+`[C]` e, em seguida, responda à pergunda `Deseja finalizar o arquivo em lotes (S/N)?` teclado `[S]` e `[Enter]`.
- [ ]  Localize e "rode" o *GitHub Desktop*, verificando se ele já está logado na sua conta do GitHub.com (Menu "File" &gt; "Options" &gt; "Accounts");
- [ ]  Clique em "`Current repository`";
- [ ] Clique no botão `[Add ▼]`  e em `Add existing repository...`;
- [ ] Em `Local path`, descreva o caminho do aplicativo, ou use o botão `[Choose]` para localizá-lo: Ex.: `J:\Projetos\Angular\site01`;
- [ ] Clique em `[Add repository]` para que o GitHub Desktop passe a monitorar este repositório;
- [ ] Para criar um novo repositório no GitHub.com, clique em `[Publish repository]`;
- [ ] Dê um nome (Name) e uma descrição (Description) para seu novo repositório;
- [ ] Desmarque `Keep this code private` se desejar criar um repositório público (recomendado);
- [ ] Clique em `[Publish repository]` para concluir.

Você pode acessar seu GitHub.com e verificar se está tudo ok com o novo repositório.
> Observe que nem todos os diretórios e arquivos são enviados para o GitHub.com, principalmente o diretório "node-modules", não aparecerá lá. Isso ocorre porque todo o conteúdo deste diretório já vem do GitHub.com e seria redundante enviar tudo para lá novamente.

## Primeiro Branch

Vamos criar o "branch" desta aula:

- [ ] Volte ao GitHub Desktop,;
- [ ] Clique em `Current repository`, e selecione o repositório deste aplicativo;
- [ ] No menu "Branch", clique em `new branch`;
- [ ] Digite o nome (Name) `03_Criando_o_Aplicativo`;
- [ ] Clique em `[Create branch]`;
- [ ] Clique em seguida, em `[Publish branch]` para enviar este novo branch para o GitHub.com.

## Conclusão

Já temos a base do nosso site pronta para desenvolver e ainda mais duas para experimentação. Nas próximas aulas, vamos personalizar um pouco o aplicativo.

*EOF*