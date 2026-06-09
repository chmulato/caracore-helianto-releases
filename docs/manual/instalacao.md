# Instalação e Configuração

## Requisitos Mínimos

1. Servidor Linux (Ubuntu 22.04 LTS ou superior recomendado).
2. Memória RAM: Mínimo 2 GB (4 GB recomendados).
3. Espaço em disco de 20 GB (SSD recomendado).
4. Docker Engine v24.0+ e Docker Compose v2.0+ instalados.

## Fontes Oficiais de Download

1. Loja de Releases: https://helianto.caracore.com.br/
2. Repositório de código: https://github.com/chmulato/caracore-helianto
3. Templates de deploy: disponíveis na página de [Download e Deploy](../download.html) nesta loja.

## Procedimento de Implantação

1. **Criar Diretório do Projeto:**
   Crie uma pasta para organizar os arquivos de infraestrutura:
   ```bash
   mkdir -p /opt/helianto && cd /opt/helianto
   ```

2. **Obter os Arquivos de Configuração:**
   Baixe o arquivo de compose e o proxy de sua preferência:
   ```bash
   wget https://raw.githubusercontent.com/chmulato/caracore-helianto/master/docker-compose.prod.yml
   wget https://raw.githubusercontent.com/chmulato/caracore-helianto/master/Caddyfile
   ```

3. **Configurar as Variáveis de Ambiente (.env):**
   Crie um arquivo `.env` contendo as variáveis críticas de produção (como senhas do PostgreSQL, chaves de criptografia JWT, credenciais de BolePix e configurações de SMTP). Use o template `.env.example` do repositório principal como base.

4. **Subir os Serviços:**
   ```bash
   docker compose -f docker-compose.prod.yml up -d
   ```

## Verificação Pós-Instalação

1. Confirme se os contêineres (`helianto-db`, `helianto-api`, `helianto-web`, e `caddy`) estão executando normalmente:
   ```bash
   docker compose ps
   ```
2. Verifique se o proxy automático HTTPS (Caddy) está respondendo no seu domínio configurado.
3. Teste o acesso à API através do endpoint de status de saúde (`/actuator/health`).

## Configuração Inicial Recomendada

1. Mantenha a porta `5432` do banco PostgreSQL protegida internamente (não exposta no firewall público).
2. Configure logs externos ou backups diários automáticos para o volume de dados do PostgreSQL.
