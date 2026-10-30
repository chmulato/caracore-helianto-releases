# Avaliação da Infraestrutura

> **Antes de começar:** os templates não contêm o aplicativo Helianto Condominium. Eles permitem avaliar o desenho de deploy (rede, proxy e banco). Uso em produção só após a v1.0.0 (30/12/2029).

## Requisitos Mínimos

1. Servidor Linux (Ubuntu 22.04 LTS ou superior recomendado).
2. Memória RAM: mínimo 2 GB (4 GB recomendados).
3. Espaço em disco de 20 GB (SSD recomendado).
4. Docker Engine v24.0+ e Docker Compose v2.0+ instalados.

## Fontes Oficiais

1. Loja: https://helianto.caracore.com.br/
2. Repositório de templates: https://github.com/chmulato/caracore-helianto-releases
3. Página de [Templates de infraestrutura](../download.html) nesta loja.

## Procedimento de Avaliação

1. **Criar diretório do projeto:**
   ```bash
   mkdir -p /opt/helianto && cd /opt/helianto
   ```

2. **Obter os arquivos de configuração:**
   ```bash
   wget https://raw.githubusercontent.com/chmulato/caracore-helianto-releases/master/docker-compose.prod.yml
   wget https://raw.githubusercontent.com/chmulato/caracore-helianto-releases/master/Caddyfile
   ```

3. **Criar o `.env`:**
   Preencha as variáveis obrigatórias do compose (`HELIANTO_DB_NAME`, `HELIANTO_DB_USER`, `HELIANTO_DB_PASSWORD`, `HELIANTO_JWT_SECRET`, `HELIANTO_CORS_ORIGIN_1`, `HELIANTO_CORS_ORIGIN_2`, `CARACORE_DOMAIN`). As demais têm valor padrão definido no próprio compose, e não há arquivo `.env.example` publicado.

4. **Validar o compose:**
   ```bash
   docker compose -f docker-compose.prod.yml config
   ```

5. **Subir apenas o banco (opcional):**
   Os serviços `api` e `web` dependem dos artefatos da aplicação, ainda não publicados. Nesta fase é possível avaliar a rede subindo só o PostgreSQL:
   ```bash
   docker compose -f docker-compose.prod.yml up -d postgres
   ```

## Verificação

1. Confirme o serviço `postgres` em execução:
   ```bash
   docker compose -f docker-compose.prod.yml ps
   ```
2. A porta `5432` não é publicada pelo compose — o banco fica acessível apenas na rede interna do Docker.
3. O proxy (Caddy ou Nginx) é configurado à parte, apontando para as portas locais `3000` (web) e `8080` (api), conforme os templates `Caddyfile` e `nginx.conf`.

## Configuração Recomendada

1. Mantenha a porta `5432` do banco PostgreSQL protegida internamente (não exposta no firewall público).
2. Para produção, configure logs externos ou backups diários automáticos do volume de dados do PostgreSQL — procedimento a ser publicado com a v1.0.0.
