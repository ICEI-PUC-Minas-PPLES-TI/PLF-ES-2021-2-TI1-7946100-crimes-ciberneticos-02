# Avaliação da Aplicação

<span style="color:red">Pré-requisitos: <a href="6-Implementação.md"> Projeto da Solução</a></span>


Este documento evidencia os Teste de usabilidade realizado por usuários potenciais da plataforma de quiz Lockey.

## Plano de Testes

Para elaboração dos testes foram definidos usuários potenciais para realizar testes na plataforma à primeira vista. O perfil do usuário foi definido conforme o público alvo do projeto:

>Brasileiros.

>A partir de 12 anos de idade.

>Com acesso a Internet (mobile; desktop).

>Sejam usuários ativos de: Redes Sociais, Sites, E-mails, Salas de bate papo, Usuário de aplicativos.

Então, a equipe de desenvolvimento selecionou os próprios familiares para realizarem os testes iniciais com o objetivo de representar o público alvo do projeto. 
Para os testes cada desenvolvedor selecionou um familiar para realizar um teste de usabilidade e fornecer os feedbacks necessários. 

Os requisitos do projeto testados foram:

REQUISITOS FUNCIONAIS:

>Página inicial;

>Quiz funcional;

>Pontuação do quiz e orientações para gaps de conhecimento;

>Página de notícias;

>Página de membros (equipe);

>Página de dicas;

>Recursos adicionais(eliminado).

>Página de Administrador*

*item incluído durante o desenvolvimento do projeto.



REQUISITOS NÃO FUNCIONAIS:

>Site publicado em plataformas acessíveis;

>Site responsivo;

>Compatibilidade com navegadores



ARTEFATOS:

>Layout, HTML, CSS, ID Visual

>Código em JS do quiz

>Gráfico de comparação das respostas do usuário com a média das respostas globais do site

>CRUD gestão de perguntas do quiz

>CRUD gestão de Notícia ou API (News API)

>CRUD gestão de dicas

>API GitHub no HTML da equipe

>Integração CRUD de perguntas com código quiz

>Integração CRUD de notícias com HTML

>Integração Gráfica com resultado do quiz




TESTES

Neste tópico listamos os resultados dos testes dos requisitos e seus respectivos artefatos.

TESTES REQUISITOS FUNCIONAIS:

Neste tópico para atender os requisitos funcionais foram utilizados os artefatos da lista acima. 

Página inicial:

>A página inicial foi acessada através do link pelos usuários e não foram relatados problemas.
>
>Feedback: Problemas com rodapé sobrepondo a logo inicial.
>
>Autor do Feedback: Equipe desenvolvimento.
>
>Ação/correção: Revisão do CSS e HTML

 
Quiz funcional:

>A página do Quiz foi acessada através do botão na página inicial. 

>Feedback: Faltou a integração gráfica da plataforma
>
>Autor do Feedback: Equipe desenvolvimento.
>
>Ação/correção: Revisão do código

.

>Feedback: Erros ortográficos nas perguntas do quiz
>
>Autor do Feedback: v
>
>Ação/correção: Revisão ortográfica

.

>Feedback: Logo do menu não retorna para página inicial
>
>Autor do Feedback: Usuários de teste
>
>Ação/correção: Revisão HTML

		    

Pontuação do quiz e orientações para gaps de conhecimento;

>A pontuação retornou os dados de maneira correta após a finalização do quiz, nenhuma adversidade foi relatada. 
 
Página de notícias;

>Página estática estática. 



Página de membros (equipe);

>Funcional


Página de Dicas;

>Funcional

Página Administrador;

>Funcional

## Avaliação

> Os teste ocorreram relaticamente bem. Alguns bugs que foram citados anteriormente foram corrigidos.
> 
