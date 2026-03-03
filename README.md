# 🚀 Next.js Frontend Template (v2)

Template frontend moderno e **opinado**, focado em alta performance, produtividade e padronização. Desenvolvido para consumir APIs externas com autenticação robusta via **NextAuth.js**.

## 🛠 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Autenticação:** [NextAuth.js v4](https://next-auth.js.org/)
- **Validação:** [Zod](https://zod.dev/)
- **Componentes:** [React 19](https://react.dev/) (Arquitetura de Composição)

## 🏎 Começando

1. **Instalar dependências:**

    ```bash
    npm install
    ```

2. **Configurar variáveis de ambiente:**
   Renomeie o `.env.example` para `.env` e preencha as variáveis necessárias.

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    NEXTAUTH_URL=http://localhost:3333
    NEXTAUTH_SECRET=your-secret-here
    ```

3. **Iniciar servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

## 🐳 Docker

O projeto inclui suporte completo a Docker para desenvolvimento e produção através de builds multi-estágio otimizados.

- **`Dockerfile`**: Utiliza `node:20-alpine` e o modo `standalone` do Next.js para manter a imagem leve.
- **`docker-compose.yml`**: Orquestra a aplicação na porta `3333`.

### Como rodar com Docker:

1. **Subir o container:**
    ```bash
    docker-compose up --build
    ```
2. **Acessar a aplicação:**
   Acesse [http://localhost:3333](http://localhost:3333)

> [!TIP]
> Certifique-se de configurar as variáveis `NEXT_PUBLIC_API_URL` e `NEXTAUTH_SECRET` no seu arquivo `.env` local antes de subir o container, pois o `docker-compose` irá utilizá-las.

## 🔐 Autenticação

O projeto utiliza **NextAuth.js** com `CredentialsProvider` para integrar com uma API externa.

- Os tokens (Access Token & Refresh Token) são armazenados no JWT do NextAuth.
- O `SessionProvider` está centralizado em `src/components/providers/providers.tsx`.
- Para obter a sessão no Server Side, use `getSession()` de `@/lib/session`.
- Para o Client Side, use `useSession()` do `next-auth/react`.

## 🎨 Interface e Shadcn/UI

Para manter a aplicação leve e única em termos de design, este projeto foi projetado para utilizar o **shadcn/ui via CLI**.

> [!IMPORTANT]
> **NÃO** reutilize componentes e estilos de projetos anteriores mecanicamente. Para cada novo projeto, utilize o **shadcn/ui create** para fazer o setup inicial dos componentes base.
>
> 🔗 **[https://ui.shadcn.com/create](https://ui.shadcn.com/create)**

### 🎨 Ícones
Utilizamos o **`react-icons`**, priorizando a biblioteca **Lucide** (`react-icons/lu`).

## 📜 Convenções e Arquitetura

Este projeto segue regras estritas de arquitetura documentadas no arquivo [`AGENTS.md`](./AGENTS.md).

### Resumo de Estrutura
- **`src/services`**: Camada de comunicação com a API externa via `src/services/api.ts`.
- **`src/schemas`**: Validações Zod para formulários e dados.
- **`src/types`**: Definições de tipos TypeScript globais.
- **`src/components/providers`**: Centralização de contextos (NextAuth, etc).

## 🤖 Scripts Úteis

- `npm run format`: Formata o código com Prettier.
- `npm run lint:fix`: Corrige problemas de linting.
- `npm run ci`: Fluxo completo de CI local (lint, format e testes).

---

Feito com ❤️ por Marcuth.
