# Integração keycloak com NodeJS

<p align="center">Esse projeto tem como finalidade fazer a criação, autenticação e verificar permissões dos usuários criado no keycloak</p>

* [Pre requisitos](#pre-requisitos)
* [Como baixar o keycloak](#download-keycloak)
* [Como configurar o keycloak](#keycloak-config)
* [Como usar](#how-to-use)
    * [Pegar token do usuário](#get-token)

<h4 align="center">Projeto em construção</h4>

### Pré requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://docs.docker.com), [Docker Compose](https://docs.docker.com)

## Instalando o  Docker e Docker Compose no Ubuntu

# Docker
```bash
    sudo apt update

    sudo apt remove docker docker-engine docker.io

    sudo apt install docker.io
```

# Docker Compose
```bash
    sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

    sudo chmod +x /usr/local/bin/docker-compose

    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

### Rodando o projeto

```bash
# Clone este repositório
$ git clone <https://github.com/tgmarinho/nlw1>

# Acesse a pasta do projeto no terminal/cmd
$ cd keycloak

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

# Baixar e rodar o keycloak
Para rodar o keycloak e o banco de dados basta rodar dentro da pasta keycloak o comando 

```bash
docker-compose up
```

Depois acesso <http://localhost:8080> e use as credenciais do keycloak que foram configuradas no arquivo docker-compose.yml

### Configurando o keycloak
Para poder fazer as configurações de acesso sugiro que siga esse [artigo](https://medium.com/theoptimaltechnologist/what-is-keycloak-how-to-use-it-an-example-with-nodejs-part-1-25434e963fed) pois esse projeto foi criado usando esse post como referência.


## Como usar
Para fazer os testes você pode usar o [insomnia](https://insomnia.rest/download) ou o [postman](https://www.postman.com) para fazer chamadas a api

## Pegar token do usuário keycloak
Para pegar o token do usuário e testar nas chamadas api você pode copiar e colar o comando curl no arquivo login-example.sh mudando apenas as credenciais que foram criadas no keycloak

<YOUR_REALM>
<CLIENT_ID>  
<CLIENT_SECRET>
<USERNAME> = username do usuário criado no keycloak
<SENHA> = senha do usuário do keycloak