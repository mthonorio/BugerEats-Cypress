# Cypress E2E

## Testes de Aceitação no Buger Eats

Este projeto foi desenvolvido como exemplo para os testes automatizados de aceitação em Cypress para a turma de Engenharia de Software 2021.2 da Universidade Federal da Paraíba, ministrada pela professora Adriana.

## Pré-requisitos e Recomendações

**Obs: O Cypress somente funciona em computadores com arquitetura de 64 bits.**

### Sistema Operacional

Cypress é uma aplicação desktop que é instalado em seu computador. O aplicativo de desktop oferece suporte a estes sistemas operacionais:

- macOS 10.9 e superior
- Linux Ubuntu 12.04 e superior, Fedora 21 e Debian 8;
- Windows 7 ou superior.

### NodeJS versão 14.15.0 ou superior

Acesse o site oficial do NodeJS clicando neste [link](https://nodejs.org/en/) e siga o passo-a-passo para a instalação.

Após a instalação do **NodeJS**, você já estará com o **npm** e **npx** instalados nativamente.

Você pode verificar a instalação rodando um dos comandos no terminal:

```
node --version
npm --v
npx --v
```

### Recomendações para Visual Studio Code

#### Instale as extensões:

- **Material Icon Theme**;
- Um Dark Theme de seu agrado, eu utilizo o **Omni Theme** da Rocketseat;
- **Cypress Snippets**;
- **Prettier - Code formatter**.

### Recomendações para Linux

Instale as dependências recomendadas para Linux para uma melhor performance do Cypress:

`sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb`

### Recomendações para CentOS

Instale as dependências recomendadas para CentOS para uma melhor performance do Cypress:

`yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib`

## Instalando o Cypress

Instale o Cypress via npm:

Entre no diretório onde deseja instalar o Cypress

`cd /your/project/path`

Dentro do diretório do projeto, rode:

`npm install cypress --save-dev`

Isso instalará o Cypress localmente como uma dependência de desenvolvimento para seu projeto.

**Obs:** A abordagem recomendada é instalar o Cypress com _npm_ porque:

- Cypress é versionado como qualquer outra dependência.
- Simplifica a execução do Cypress em Integração Contínua

## Para rodar os testes

Caso não tenha uma pasta `node_modules` ou um arquivo `package.json` em seu repositório do projeto, rode:

`npm init`

Preencha as informações do projeto, abaixo está uma recomendação de como preenche-las:

```
package name: [nome-do-seu-diretorio] <tecle enter para prosseguir e aceitar a recomendação ou altere para o nome desejável>
```

```
version: <enter>
description: <opcional> <enter>
entry point: <enter>
```

**Passo importante:** o comando que rodará seus testes

```
test command: npx cypress open
```

```
git repository: <opcional> <enter>
keywords: <enter>
author: [seu-nome] <enter>
license: <opcional, recomendo MIT> <enter>

Is this OK? (yes) <enter>
```

Prontinho seu projeto está configurado.

---

**Obs:** Certifique-se de visualizar no diretório de seu projeto, a pasta _cypress_.

No terminal com o diretório principal do projeto, rode para abrir a interface de tests do cypress:

`npm run test`

Para rodar seus testes em modo headless, modo onde os testes rodam em background e o usuário não necessita visualizar o navegador ou abrir o cypress interface, (_recomendado para ingressar os testes no docker, pipeline, etc_). Basta rodar no terminal:

`npx cypress run`

## Estrutura de Diretórios

Segue abaixo como esse projeto está organizado e uma breve descrição de seus diretórios.

- **fixtures** - Estrutura que se define uma massa de testes estática(_mocks_), um arquivo que já está pronto, que não terá nenhuma alteração podendo ser utilizado em qualquer teste;
- **integration** - Diretório onde estará localizado nossas implementações dos testes automatizados;
- **plugins** - Possibilita trocar, modificar ou estender o comportamento interno do Cypress;
- **support** - Neste diretório é possível criar comandos que podem ser executados dentro dos testes ou sobrescrever comandos já existentes;
- **pages** - Nossos Pages Objects, utilizados para criar funções e exporta-las para serem utilizadas em nossos testes automáticos.

---

## Integração Contínua

### Github Actions

Utilizaremos o **GitHub Actions** que nada mais é do que um orquestrador de workflow. Através dele nós podemos construir um workflow com várias ações que vão descrever os passos necessários para compilar, testar, empacotar, criar releases e até fazer deploy do nosso sistema. O GitHub Actions nos permite implementar as técnicas de CI e CD de forma simples dentro do nosso repositório, não precisando mais fazer integrações com outros sistemas.

Outra grande vantagem dessa funcionalidade é a possibilidade de utilizar agentes próprios do GitHub, não havendo necessidade de criação de ambientes específicos para conseguirmos executar nossos workflows de CI e CD. Isso agiliza ainda mais o processo de configuração e execução dos nossos workflows e diminui o custo de implantação, pois já temos uma infraestrutura pronta para utilizarmos.

#### Quais são os componentes do GitHub Actions?

- **Workflow:** É onde vamos descrever todo o processo de automação para podermos compilar, testar e fazer deploy do nosso sistema.
- **Actions:** São tarefas que vamos utilizar dentro do workflow. Aqui que vamos definir o que realmente nosso workflow vai fazer.
- **Runners:** É a máquina responsável por executar o workflow e as actions e nos prover o feedback do nosso processo.O Runner pode ser o GitHub-hosted, provido pelo próprio time ou self-hosted runner, onde você é responsável por gerenciar o servidor e os serviços instalados nele.

#### E o custo?

Para repositórios públicos é de graça e para repositórios privados, cada conta recebe alguns minutos de graça, conforme tabela abaixo:

- GitHub Free 500 MB com 2.000 minutos por mês
- GitHub Pro 1GB com 3.000 minutos por mês
- GitHub Free for organizations 500 MB com 2.000 minutos por mês
- GitHub Team 2 GB com 3.000 minutos por mês
- GitHub Enterprise Cloud 50GB com 5.000 minutos por mês

Acima disso, você terá que configurar o billing para poder utilizar mais espaço e mais tempo de execução de build ou deploy.
