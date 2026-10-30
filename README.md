# Helianto Condominium - Loja e Releases

Vitrine e distribuição do **Helianto Condominium**, sistema de gestão condominial **em desenvolvimento** pela Cara Core Informática.

> **Status:** em desenvolvimento. GA público da v1.0.0 previsto para **30/12/2029**.
> Hoje a loja publica apenas templates de infraestrutura (Docker Compose, Caddy, Nginx) para avaliação técnica — **não há release do aplicativo**.

## Objetivo

Este repositório centraliza:
1. Página institucional da loja, com status e roadmap até 2029.
2. Página de templates de infraestrutura para avaliação técnica (Docker, Nginx, Caddy).
3. Canal oficial de feedback do ecossistema.
4. Documentação de deploy e conformidade de dados para administradoras.

## Produto

O Helianto Condominium está sendo desenhado para condomínios de médio e grande porte, com foco em soberania de dados, integridade financeira e privacidade.

Capacidades previstas:
1. **Rateio flexível:** divisão de cotas por fração ideal ou igualitária.
2. **Motor financeiro auditável:** juros pro rata die de 1% a.m. e multa de 2% (Código Civil) com BolePix.
3. **Segregação de fundos:** separação contábil entre despesas ordinárias, extraordinárias e fundo de reserva.
4. **Isolamento de dados:** arquitetura multi-tenant no PostgreSQL.
5. **Conformidade LGPD:** higienização de dados em logs via PrivacyGuard (LGPD Shield).

## Base Técnica

1. **Back-end:** Java 25 (LTS) + Spring Boot 4.0.6.
2. **Banco de dados:** PostgreSQL com isolamento tenant context.
3. **Deploy:** templates de Docker Compose, Caddy Server (HTTPS automático) e Nginx publicados para avaliação.
4. **Segurança:** autenticação via JWT e higienização automática com PrivacyGuard (LGPD Shield) previstas para o aplicativo.
5. **Front-end:** API-first / Web Components com interface web responsiva.
6. **Distribuição:** vitrine em https://helianto.caracore.com.br/ (GitHub Pages).

## Templates de infraestrutura

Página da loja:
https://helianto.caracore.com.br/

Templates para avaliação técnica:
https://helianto.caracore.com.br/download.html

Estes arquivos não contêm o aplicativo Helianto Condominium. Uso em produção só após a v1.0.0 (30/12/2029).

## Canais de Suporte

1. E-mail: suporte@caracore.com.br.
2. WhatsApp: +55 41 9 9909-7797.
3. Telegram: @chmulato.

## Situação Atual

1. **Fase:** em desenvolvimento (pré-GA).
2. **Versão:** nenhuma release do aplicativo publicada; v1.0.0 prevista.
3. **GA público previsto:** 30 de dezembro de 2029.
4. **Qualidade:** cobertura de testes automatizados de 81% via JaCoCo — medição interna, a atualizar.
5. **Roadmap:** https://www.caracore.com.br/planning.html.

## Licença

Este repositório segue licenciamento proprietário institucional da Cara Core Informática.
Consulte [LICENSE](LICENSE).
