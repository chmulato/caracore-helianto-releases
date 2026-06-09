# Proteção de Dados e Conformidade (LGPD)

## Princípios

A proteção de dados no Helianto Condominium segue rígidos padrões de privacidade desde a concepção (privacy by design), confidencialidade de transações financeiras e isolamento total entre os inquilinos (tenants).

## Controles Aplicados

1. **LogSanitizer:**
   Todos os logs gerados em tempo de execução passam por um filtro ativo de higienização. 
   - Números de telefone são mascarados.
   - CPFs/CNPJs são totalmente omitidos das mensagens de log.
   - Endereços de IP de requisições são transformados em hashes criptográficos irreversíveis antes de serem gravados em disco.
2. **Criptografia em Trânsito:**
   O tráfego de dados entre a web e o back-end é inteiramente protegido por TLS/HTTPS fornecido pelo Caddy ou Nginx.
3. **Autenticação e Sessões:**
   A autenticação de administradores e moradores é gerenciada por tokens JWT (JSON Web Tokens) assinados, que contêm informações de escopo restrito e expiram automaticamente.

## Diretrizes de Operação

1. **Soberania:**
   O cliente detém controle total sobre o banco de dados. Os dados dos moradores residem exclusivamente na infraestrutura escolhida pela administradora.
2. **Backup Seguro:**
   Recomenda-se criptografar os arquivos de despejo (dumps) do PostgreSQL antes de transferi-los para armazenamentos de backup secundários.
