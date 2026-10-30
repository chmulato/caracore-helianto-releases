# Proteção de Dados e Conformidade (LGPD)

> Este documento descreve os controles **previstos** do aplicativo, em desenvolvimento.

## Princípios

A proteção de dados no Helianto Condominium segue o princípio de privacidade desde a concepção (privacy by design), com confidencialidade de transações financeiras e isolamento entre os tenants.

## Controles Previstos

1. **PrivacyGuard (LGPD Shield):**
   Filtro de higienização aplicado aos logs gerados em tempo de execução:
   - Números de telefone são mascarados.
   - CPFs/CNPJs são omitidos das mensagens de log.
   - Endereços de IP de requisições são transformados em hashes criptográficos antes de serem gravados em disco.
2. **Criptografia em trânsito:**
   O tráfego entre web e back-end é protegido por TLS/HTTPS fornecido pelo Caddy ou Nginx.
3. **Autenticação e sessões:**
   A autenticação de administradores e moradores é gerenciada por tokens JWT assinados, com escopo restrito e expiração automática.

## Diretrizes de Operação

1. **Soberania:**
   O cliente mantém o controle do banco de dados. Os dados dos moradores residem na infraestrutura escolhida pela administradora.
2. **Backup seguro:**
   Recomenda-se criptografar os arquivos de despejo (dumps) do PostgreSQL antes de transferi-los para armazenamentos de backup secundários.
