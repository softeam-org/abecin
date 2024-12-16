

# Abecin: Re-Design do Site

Este projeto tem como objetivo implementar o re-design do site da **Abecin**, tratando o **frontend** como um módulo separado. A aplicação consumirá exclusivamente os dados do **WordPress** por meio de sua **API**.

---

## Tecnologias Utilizadas

- **Next.js**
- **Tailwind CSS**

---

## Padrões a Serem Seguidos

1. **Criação de Branches**:
   - Todas as novas branches **devem ser criadas a partir da branch `develop`**.
   - Siga os padrões abaixo para nomear as branches:
     - **Funcionalidades/Novo Componente**: `feature/[COMPONENTE]`
     - **Correções**: `fix/[COMPONENTE]`
   - Após o encerramento de uma *feature* e a aprovação do *pull request*, **remova a branch da funcionalidade finalizada.**

2. **Padrão para Commits**:
   - Utilize o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/) para garantir clareza e organização no histórico de commits.

---

## Instruções para Executar o Projeto

Antes de iniciar, certifique-se de que você possui o **Node.js** e o **npm** instalados em seu ambiente.

### 1. Instalar Dependências
Execute o comando abaixo para instalar todas as dependências necessárias:
```bash
npm install
```

### 2. Executar o Frontend
Para iniciar o ambiente de desenvolvimento, execute:
```bash
npm run dev
```
