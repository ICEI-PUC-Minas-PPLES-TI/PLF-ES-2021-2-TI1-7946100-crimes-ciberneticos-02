# Avaliação da Aplicação

<span style="color:red">Pré-requisitos: <a href="6-Implementação.md"> Projeto da Solução</a></span>


Este documento evidencia os Teste de usabilidade realizado por usuários potenciais da plataforma de quiz Lockey.

## Plano de Testes

Para elaboração dos testes foram definidos usuários potenciais para realizar testes na plataforma à primeira vista. O perfil do usuário foi definido conforme o público alvo do projeto:
o	Brasileiros
o	A partir de 12 anos de idade
o	Com acesso a Internet (mobile; desktop)
o	Sejam usuários ativos de:
o	Redes Sociais
o	Sites e E-mails
o	Salas de bate papo
o	Usuário de aplicativos
Então, a equipe de desenvolvimento selecionou os próprios familiares para realizarem os testes iniciais com o objetivo de representar o público alvo do projeto. 
Para os testes cada desenvolvedor selecionou um familiar para realizar um teste de usabilidade e fornecer os feedbacks necessários. 

Os requisitos do projeto testados foram:

REQUISITOS FUNCIONAIS:
o	Página inicial;
o	Quiz funcional;
o	Pontuação do quiz e orientações para gaps de conhecimento;
o	Página de notícias;
o	Página de membros (equipe);
o	Página de dicas;
o	Recursos adicionais.
o	Página de Administrador*
*item incluído durante o desenvolvimento do projeto.

REQUISITOS NÃO FUNCIONAIS:
o	Site publicado em plataformas acessíveis;
o	Site responsivo;
o	Compatibilidade com navegadores

ARTEFATOS:
o   Layout, HTML, CSS, ID Visual
o   Código em JS do quiz
o   Gráfico de comparação das respostas do usuário com a média das respostas globais do site
o   CRUD gestão de perguntas do quiz
o   CRUD gestão de Notícia ou API (News API)
o   CRUD gestão de dicas
o   API GitHub no HTML da equipe
o   Integração CRUD de perguntas com código quiz
o   Integração CRUD de notícias com HTML
o   Integração Gráfica com resultado do quiz


1TESTES
Neste tópico listamos os resultados dos testes dos requisitos e seus respectivos artefatos.


TESTES REQUISITOS FUNCIONAIS:

Layout, HTML, CSS, ID Visual	
Código em JS do quiz	
Gráfico de comparação das respostas do usuário com a média das respostas globais do site	
CRUD gestão de perguntas do quiz	
CRUD gestão de Notícia ou API (News API)
CRUD gestão de dicas	
API GitHub no HTML da equipe
Integração CRUD de perguntas com código quiz	
Integração CRUD de notícias com HTML	
Integração Gráfica com resultado do quiz	

Neste tópico para atender os requisitos funcionais foram utilizados os artefatos da lista acima. 

Página inicial:
A página inicial foi acessada através do link _______ pelos usuários e não foram relatados problemas.
Feedback	Autor do Feedback	Ação/correção
Problemas com rodapé sobrepondo a logo inicial	Equipe desenvolvimento	Revisão do CSS e HTML
 
Quiz funcional;
A página do Quiz foi acessada através do botão na página inicial. 
 
#	Feedback                                    	Autor do Feedback	    Ação/correção
1	Faltou a integração gráfica da plataforma   	Equipe desenvolvimento	Revisão do código
2	Erros ortográficos nas perguntas do quiz	    Usuários de teste	    Revisão ortográfica
3	Logo do menu não retorna para página inicial	Usuários de teste	    Revisão HTML

Pontuação do quiz e orientações para gaps de conhecimento;
A pontuação retornou os dados de maneira correta após a finalização do quis, nenhuma adversidade foi relatada. 
 
Página de notícias;
Página estática sem JS e sem dados em LocalStorage. 

#	Feedback	                            Autor do Feedback	Ação/correção
O link da notícia não abre em uma nova aba	Usuários de teste	Revisão HTML

Página de membros (equipe);
Página estática sem JS e sem dados em LocalStorage. 


## Avaliação

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.
