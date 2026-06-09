# Isolamento Multi-Tenant

## Princípios de Multilocação

O Helianto Condominium é projetado como uma plataforma multi-tenant real de banco compartilhado e esquema compartilhado (Shared Database, Shared Schema) com isolamento lógico rígido de dados. Isso significa que dados de múltiplos condomínios residem no mesmo banco de dados PostgreSQL, mas são estritamente segregados no nível da aplicação.

## Mecanismo de Isolamento Técnico

1. **Contexto de Tenant por Requisição:**
   Toda requisição HTTP recebida pelo back-end do Helianto Condominium deve conter um cabeçalho de autenticação com um token JWT válido. Esse token inclui a declaração (claim) de identificação do inquilino (`tenant_id`).
   
2. **Interceptação de Requisição:**
   Um interceptador de segurança do Spring Boot captura o `tenant_id` de cada requisição e o registra no armazenamento `ThreadLocal` específico do fluxo daquela requisição.
   
3. **Filtros Automáticos de Query:**
   Toda leitura e escrita feita no banco de dados através do Hibernate/JPA injeta automaticamente o identificador do inquilino atual na cláusula `WHERE` da query. Isso previne qualquer possibilidade de vazamento cruzado de relatórios, boletos ou registros contábeis entre condomínios diferentes.

## Proteção e Firewall de Banco

Como boa prática de segurança de infraestrutura, a porta `5432` do PostgreSQL é exposta apenas para a rede interna virtual do Docker. Dessa forma, nenhuma requisição externa direta ao banco de dados é aceita, limitando os acessos estritamente às rotas validadas da API do Helianto.
