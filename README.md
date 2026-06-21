# Central Triagem de Demandas

## Descrição

O Central Triagem de Demandas é uma plataforma web responsiva desenvolvida para registrar solicitações internas de funcionários e automatizar o envio de confirmações por e-mail.

Para a automação do fluxo, foi utilizada a plataforma Make.com, integrando Google Sheets e Gmail. Dessa forma, as solicitações são armazenadas automaticamente em uma planilha e o usuário recebe uma confirmação por e-mail após o envio do formulário.

## Como Funciona

1. O funcionário acessa a plataforma de triagem de demandas.

2. O usuário preenche os seguintes campos:

   * Nome
   * E-mail
   * Setor
   * Prioridade
   * Descrição da Demanda

3. Ao clicar em **Enviar**, os dados são enviados por meio de um webhook e armazenados automaticamente em uma planilha do Google Sheets.

4. A automação criada no Make.com monitora a planilha e utiliza a integração com o Gmail para enviar uma mensagem de confirmação ao endereço de e-mail informado pelo usuário.

## Tecnologias Utilizadas

* lovable
* Make.com
* Google Sheets
* Gmail
* link: : https://centraltriagem.lovable.app
