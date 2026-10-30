# Isolamento Multi-Tenant

> Este documento descreve o comportamento **previsto** do aplicativo, em desenvolvimento.

## Princípios de Multilocação

O Helianto Condominium é projetado como uma plataforma multi-tenant de banco compartilhado e esquema compartilhado (Shared Database, Shared Schema), com isolamento lógico de dados na camada de aplicação. Dados de múltiplos condomínios residem no mesmo banco PostgreSQL e são segregados por contexto de tenant.

## Mecanismo de Isolamento Técnico

1. **Contexto de tenant por requisição:**
   Toda requisição HTTP ao back-end deve conter um cabeçalho de autenticação com token JWT válido. O token inclui a declaração (claim) de identificação do inquilino (`tenant_id`).

2. **Interceptação de requisição:**
   Um interceptador do Spring Boot captura o `tenant_id` de cada requisição e o registra no `ThreadLocal` do fluxo daquela requisição.

3. **Filtros automáticos de query:**
   As leituras e escritas via Hibernate/JPA incluem o identificador do tenant atual na cláusula `WHERE` da query. O objetivo é impedir o vazamento cruzado de relatórios, boletos ou registros contábeis entre condomínios.

## Proteção e Firewall de Banco

Como boa prática de segurança de infraestrutura, a porta `5432` do PostgreSQL é exposta apenas para a rede interna virtual do Docker. Nenhuma requisição externa direta ao banco é aceita, limitando os acessos às rotas da API.
