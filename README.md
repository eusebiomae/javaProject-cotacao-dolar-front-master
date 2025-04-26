
# 📈 Cotação Dólar - Front-End
---

Este projeto é um Front-End desenvolvido em **Angular** para consulta da cotação do dólar, permitindo a busca de dados históricos em um intervalo de datas selecionado pelo usuário.

> Projeto desenvolvido como parte do exercício de avaliação técnica baseado no repositório:  
> [https://github.com/shx-selecao/cotacao-dolar-full]

---

## 🎯 Funcionalidades

- ✅ Buscar cotações do dólar por período.
- ✅ Mostrar a cotação atual do dólar.
- ✅ Filtrar somente cotações **menores** que a cotação atual.
- ✅ Calcular e exibir a **diferença** de preço entre a cotação do dia e a atual.
- ✅ Exibir mensagens claras caso não existam cotações no período selecionado.
- ✅ Formatação de data para **DIA / MÊS / ANO**.
- ✅ Layout estilizado, responsivo e com a fonte **Merriweather** aplicada.
- ✅ Validações de datas:
  - Data inicial obrigatória.
  - Data final obrigatória.
  - Data inicial deve ser menor ou igual à data final.
  - Nenhuma data pode ser maior que a data atual.
  - Campos já iniciam preenchidos: primeiro dia do mês e data atual.

---

## 🛠️ Tecnologias Utilizadas

- Angular 12
- TypeScript 4.x
- RxJS
- date-fns
- TailwindCSS (classes utilitárias para estilização rápida)

---

## 📦 Como rodar o projeto

### Pré-requisitos

- Node.js instalado (versão 14+ recomendada)
- Angular CLI instalado (`npm install -g @angular/cli`)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse o diretório do projeto:

```bash
cd cotacao-dolar-full
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o projeto:

```bash
ng serve
```

5. Acesse no navegador:

```
http://localhost:4200
```

⚡ Importante:  
Certifique-se de que o servidor back-end (API Spring Boot) esteja rodando na porta `8080`, conforme o esperado pelas chamadas HTTP.

---

## 🧹 Melhorias Extras (Plus)

- Adicionada verificação para mostrar a mensagem "Nenhuma cotação encontrada" **apenas** após uma pesquisa ser realizada e o checkbox "Apenas menores" estar marcado.
- Mensagens claras de carregamento e ausência de dados.
- Tratamento de erros no console para problemas de datas.
- Estilização refinada, responsiva para mobile/tablet.

---

## 📸 Layout e Estilo

- Background com imagem estilizada e sobreposição escura.
- Tipografia clássica (**Merriweather**) para transmitir confiança financeira.
- Paleta de cores baseada em verde escuro, preto e cinza, remetendo a instituições financeiras tradicionais.
- Layout adaptável para desktop, tablet e mobile.

---

## ✍️ Autor

Desenvolvido com 💻 e ☕ por Eusebio Mario Amadro Enriquez

Portfolio: https://emaedev-portfolio.webflow.io/

---

# 🚀 USD Nexus

> "Sua fonte confiável de cotações."

---
