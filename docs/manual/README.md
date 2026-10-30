# Manual do Helianto Condominium

> **Status:** produto em desenvolvimento. GA público da v1.0.0 previsto para **30/12/2029**.
> Este manual descreve o comportamento **previsto** da aplicação e a avaliação dos templates de infraestrutura publicados hoje — não há release do aplicativo.

## Objetivo do Manual

Este manual apresenta as diretrizes previstas de implantação, configuração técnica e conformidade de dados do Helianto Condominium.

## Escopo

O documento cobre:
1. Visão geral do produto e da stack.
2. Templates de infraestrutura (Docker Compose, Caddy e Nginx) para avaliação técnica.
3. Diretrizes de proteção de dados (LGPD e PrivacyGuard).
4. Arquitetura de isolamento multi-tenant no PostgreSQL.

## Visão Geral do Produto

O Helianto Condominium está sendo desenhado como SaaS condominial com foco em soberania de dados e integridade financeira. O objetivo é gerenciar unidades, juros de mora pro rata die, multas por atraso de cotas (Código Civil brasileiro) e emissão de cobranças via BolePix (Pix + boleto híbrido) sem intermediários.

Base técnica:
1. Java 25 (LTS) e Spring Boot 4.0.6.
2. PostgreSQL com tenant context isolado.
3. API-first / Web Components com interface web responsiva.
4. Deploy autônomo baseado em Docker Compose.

## Referências do Manual

1. [Avaliação da infraestrutura](instalacao.md)
2. [Proteção de Dados](protecao-dados.md)
3. [Isolamento Multi-Tenant](isolamento-tenancy.md)

## Segurança e Qualidade

- **Testes:** cobertura de 81% de código por testes automatizados (JaCoCo) — medição interna, a atualizar.
- **Validação:** análises estáticas de segurança em andamento; resultados serão publicados quando concluídos.

## Situação Atual

1. **Fase:** em desenvolvimento (pré-GA).
2. **Release do aplicativo:** nenhuma publicada; v1.0.0 prevista para 30/12/2029.
3. **Disponível hoje:** templates de infraestrutura para avaliação técnica.
4. **Roadmap:** https://www.caracore.com.br/planning.html.
