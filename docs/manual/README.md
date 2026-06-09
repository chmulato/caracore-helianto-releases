# Manual do Helianto Condominium

## Objetivo do Manual

Este manual apresenta as diretrizes de implantação, configuração técnica e conformidade de dados do Helianto Condominium.

## Escopo

O documento cobre:
1. Visão geral da plataforma e stack.
2. Instalação e configuração inicial (Docker Compose, Caddy e Nginx).
3. Diretrizes de proteção de dados (LGPD e PrivacyGuard).
4. Arquitetura de isolamento multi-tenant no PostgreSQL.

## Visão Geral do Produto

O Helianto Condominium é uma solução de SaaS condominial focada em soberania de dados e rigor de engenharia financeira. Permite gerenciar unidades, juros de mora pro rata die, multas por atraso de cotas (Código Civil brasileiro) e emissão direta de cobranças via BolePix (Pix + boleto híbrido) sem intermediários custosos.

Base técnica:
1. Java 25 (LTS) e Spring Boot 4.0.6.
2. PostgreSQL com tenant context isolado.
3. Deploy autônomo baseado em Docker Compose.

## Referências do Manual

1. [Instalação e Configuração](instalacao.md)
2. [Proteção de Dados](protecao-dados.md)
3. [Isolamento Multi-Tenant](isolamento-tenancy.md)

## Segurança e Qualidade

- **Validação:** Análises estáticas de segurança sem ocorrências críticas de segurança.
- **Testes:** Cobertura de 81% de código coberta por testes automatizados (JaCoCo).
