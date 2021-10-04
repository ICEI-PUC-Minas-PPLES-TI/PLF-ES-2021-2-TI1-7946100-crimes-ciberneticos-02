# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
## Personas

|-----Ana Beatriz Oliveira-----|

Ana tem 20 anos e trabalha como digital influencer, utilizandos suas redes sociais regurlamente demostrando seu dia a dia para milhares de pessoas
Ana é uma pessoa extrovertia, com uma personalidade espontânea, gosta de estar sempre dentro das novidades
Ela é solteiro e passa a maior parte do seu tempo realizando transmições ao-vivo, e o resto do tempo criando conteudos para redes sociais e buscando novidades
Sua principal dificuldade são os casos de perfies falsos, que se apresentam como uma empressa oferecendo um sistema de parceiria/patrocinio, e as tentativas diversas de invação e roubo das redes sociais é os recorrentes casos de assédio
Ana apesar de utilizar-se muito das redes sociais não possui um conhecimento pratico sobre procedimentos de segurança relacionado as redes sociais e plataformas onlines
Busca uma solução que seja facil, entuitiva e possa ser acessivel

|-----Pedro Guilherme Abreu-----|

Pedro mora em Campinas (SP), tem 48 anos, trabalha como gestor de vendas em uma empresa e é extremamente ocupado
Pedro é uma pessoa com personalidade forte, que gosta de tomar decisões com base em dados de mercado
Tem uma esposa de 35 e um filho de 6 anos chamado Thiago, que acabou de finalizar a pré-escola
Seu principal objetivo é sempre encontrar novas maneiras de inovar o mercado é de facilitar a vida dos clientes
Mas enfrenta uma dificuldade em relação a altas taxas de exposição é falta de segurança apresentada em redes sociais, o que difilcuta o seu trabalho de pesquisa de mercado
Pedro por ser uma pessoa que toma decisões apartir de dados, sempre se precavem contra riscos, mesmo tendo um conhecimento razo em relação a praticas de Web segurança
Dinheiro não é problema, desde que o serviço seja de qualidade e ele concorde com a metodologia da instituição.

|--------------------------------------------------------------------------------------------------------------------------------------------------------|

> Enumere e detalhe as personas da sua solução. Para
> tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> Lembre-se que você deve ser enumerar e descrever precisamente e
> personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Pedro Guilherme Abreu|identificar uma maneira de ajudar meu filho a se proteger na internet |garantir a integridade da minha família.|            
|Pedro Guilherme Abreu| confirmar a minha segurança na rede |garantir que os processos que sigo são suficientes para me proteger. |
|Pedro Guilherme Abreu|compartilhar de modo facilitado e rápido maneiras de se defender | para auxiliar meus júniores durante o trabalho de maneira mais eficiente.|
|Ana Beatriz Oliveira| encontrar uma ferramenta que possa me defender de modo prático | economizar meu tempo com questões de segurança.|
|Ana Beatriz Oliveira|poder identificar os principais tópicos de noticias relacionados a segurança de modo simples.| poupar tempo enquanto completo múltiplas tarefas.|
|Ana Beatriz Louveira|ter todo o tipo de informações de segurança sem a necessidade de aplicativos ou métodos prolongados | ter a praticidade a modo de me garantir disponibilidade sempre que necessário.|
|Ana Beatriz Oliveira| testar meu estilo de gerenciamento das minhas contas| entender mais sobre os limites entre liberdade e exposição.|
|Ana Beatriz Oliveira| gostaria de descobrir métodos de segurança na internet  | para me manter segura enquanto exerço minha profissão.|
|Ana Beatriz Oliveira| desenvolver uma maneira para instruir meu pais idosos maneiras básicas para se proteger| para providenciar um novo tipo de lazer de  maneira segura aos dois.|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site terá uma uma home page | ALTA | 
|RF-002| O site terá uma um quiz para testar  o conhecimento | ALTA |
|RF-003| A pontuação do quiz irá redirecionar o usuário à recursos e dicas. | ALTA |
|RF-004| O site terá uma página de notícias, que estarão na home com as mais atuais. | MÉDIA |
|RF-005| O site terá uma página com os membros da equipe.| BAIXA |
|RF-006| O site terá uma página com Dicas (fonte: Policia Civil BH) | MÉDIA |
|RF-007| O site terá uma página com recursos adicionais.| ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deverá ser publicado em platarforma acessível | ALTA |
|RNF-002| O site deverá ser responsivo. E desenvolvido com MOBILE FIRST | ALTA | 
|RNF-003| O site deverá ser compatível com os dois navegadores mais utilizados. | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

