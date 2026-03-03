# 🚀 Frontend Project Overview (Next.js 16 + NextAuth)

Este projeto é um **Template Frontend** moderno focado em consumir APIs externas com alta produtividade, composição de componentes e tipagem rigorosa.

## 📐 Convenções de Arquitetura

### 1. Componentes & UI

- **Composição:** Siga o padrão *Component Composition* para evitar o "prop drilling" e criar componentes flexíveis.
- **Definição:** Use sempre `const` para componentes.
- **Exports:** Componentes de página em `app/` devem ser `default exports`.
- **Nomenclatura:** Arquivos devem usar `kebab-case.tsx`.
- **Providers:** **IMPORTANTE** Centralize os contextos (NextAuth, etc.) no componente `Providers` em `src/components/providers/providers.tsx`. Use esse centralizador no `RootLayout`.

### 2. Autenticação (NextAuth)

- O projeto utiliza **NextAuth.js v4**.
- Tudo relacionado à autenticação (providers e callbacks) está em `src/lib/auth-options.ts`.
- **`src/lib/session.ts`**: Utilitários para obter a sessão no Server Side (`getSession`, `getCurrentUser`).
- **Typing**: Estenda os tipos do NextAuth em `src/types/next-auth.d.ts` (User, JWT, Session) sempre que adicionar dados à sessão (Ex: access_token).

### 3. Comunicação com API (Services)

- O serviço central está em `src/services/api.ts`, que abstrai o fetch e injeta o `Authorization` token automaticamente se logado.
- Crie novos serviços em `src/services/{name}.service.ts`.
- Siga as assinaturas de retorno e parâmetros baseados nos schemas do backend.

### 4. Organização de Pastas (`src/`)

- **`app/`**: Rotas, Layouts e Componentes exclusivos de página.
- **`components/`**: Componentes globais/reutilizáveis.
- **`schemas/`**: Esquemas de validação Zod.
- **`hooks/`**: Hooks customizados (Ex: `hooks/forms` para lógica de formulários).
- **`services/`**: Camada de dados externa.
- **`utils/`**: Funções utilitárias (Use a palavra-chave `function` em vez de `const`).
- **`types/`**: Definições globais de interfaces e enums.

### 5. Estilo de Código (Prettier & Lint)

- **Indentação:** 4 espaços.
- **Semicolons:** Não utilizar ponto e vírgula (`;`).
- **Aspas:** Aspas duplas (`"`).
- **Sem Comentários:** Mantenha o código autoexplicativo.

---

## 🤖 Diretrizes para Agentes AI

Ao trabalhar neste projeto, siga estas regras:

1.  **Validação Primeiro:** Antes de criar formulários ou serviços, defina o Schema Zod em `src/schemas`.
2.  **Modularização:** Se um componente crescer, extraia sub-componentes.
3.  **Padrão de Funções:** Para utilitários, use a palavra-chave `function`.
4.  **Qualidade do Código:** Execute `npm run ci` para garantir estabilidade.
5.  **Clean Code:** Mantenha as funções pequenas e use nomes descritivos.
6.  **NextAuth Sync:** Garanta que os dados da sessão (access_token, role, etc) existam tanto no JWT quanto no Session Callbacks.
7.  **Providers Hierarchy:** Novos providers globais devem ser adicionados ao componente `Providers` em `src/components/providers/providers.tsx` para manter o `layout.tsx` limpo.

---

## 📁 Estrutura de Pastas Resumida

```text
/src
 ├── app/          # Rotas e Layouts (Usando Next.js App Router)
 ├── components/   # Componentes Globais e Providers
 ├── hooks/        # Hooks Customizados (useAuth, useToast, etc)
 ├── lib/          # Configuração NextAuth e utilitários de sessão
 ├── schemas/      # Validações Zod para formulários e dados
 ├── services/     # Requisições HTTP (Camada de dados externa)
 ├── types/        # Tipagem TypeScript Global
 └── utils/        # Funções Utilitárias Gerais
```
