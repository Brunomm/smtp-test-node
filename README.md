

# **Testando envio de e-mail com SMTP via código**

Objetivo deste pequeno projeto é fazer o envio de um e-mail via SMTP para testar.

## Instruções
**Requisitos**

É necessário que esteja instalado o [NodeJS](https://nodejs.org/) e [Yarn](https://yarnpkg.com/)

**Instalação**

Basta instalar os pacotes com o Yarn com o seguinte comando:
```bash
yarn install
```

**Configuração**

Após baixar o projeto, altere as configurações do arquivo `config.js`. Insira as credenciais do SMTP e destinatário.

**Utilização**

Basta executar o seguinte comando no terminal:
```bash
node index.js
```
Será mostrado uma mensagem se o e-mail foi enviado com sucesso.
