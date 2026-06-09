# Helianto Condominium - Loja e Releases

Repositório de vitrine e distribuição do Helianto Condominium, solução robusta de SaaS para administração de condomínios residenciais e comerciais.

## Objetivo

Este repositório centraliza:
1. Página institucional da loja de releases.
2. Página de download de artefatos de infraestrutura (Docker, Nginx, Caddy).
3. Canal oficial de feedback do ecossistema.
4. Documentação de deploy e conformidade de dados para administradoras.

## Produto

O Helianto Condominium atende condomínios de médio e grande porte com foco em soberania de dados, integridade financeira e privacidade.

Principais capacidades:
1. **Rateio Flexível:** Divisão automática de cotas por fração ideal ou igualitária.
2. **Motor Financeiro Rígido:** Juros pro rata die de 1% a.m. e multa de 2% (Código Civil) com BolePix nativo.
3. **Segregação de Fundos:** Separação contábil estrita entre despesas ordinárias, extraordinárias e fundo de reserva.
4. **Isolamento de Dados:** Arquitetura multilocatária (multi-tenant) no PostgreSQL.
5. **Conformidade LGPD:** Higienização de dados em logs via LogSanitizer.

## Base Técnica

1. **Back-end:** Java 25 (LTS) + Spring Boot 4.0.6.
2. **Banco de dados:** PostgreSQL com isolamento tenant context.
3. **Deploy:** Templates prontos de Docker Compose, Caddy Server (HTTPS automático) e Nginx.
4. **Segurança:** Autenticação via JWT, higienização automática com LogSanitizer.
5. **Distribuição:** Vitrine em https://chmulato.github.io/caracore-helianto-releases/ (GitHub Pages).

## Download e Deploy

Página da loja:
https://chmulato.github.io/caracore-helianto-releases/

Canal de download e guias de infra:
https://chmulato.github.io/caracore-helianto-releases/download.html

## Canais de Suporte

1. E-mail: suporte@caracore.com.br.
2. WhatsApp: +55 41 9 9909-7797.
3. Telegram: @chmulato.

## Situação Atual

1. **Fase:** Active Development / Seed.
2. **Versão:** v1.0.0.
3. **Data de lançamento planejada:** 30 de dezembro de 2027.
4. **Qualidade:** Cobertura de testes automatizados de 81% assegurada via JaCoCo.

## Licença

Este repositório segue licenciamento proprietário institucional da Cara Core Informática.
Consulte [LICENSE](LICENSE).
