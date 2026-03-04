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


## 🎨 UI & Design (Shadcn UI)

Utilizamos o Shadcn UI para uma interface premium e consistente. 

> [!IMPORTANT]
> - O componente `Form` foi substituído pelo `Field`.
> - O componente `Toast` foi substituído pelo `Sonner`.
> - **CRÍTICO**: Todo e qualquer texto exibido na interface **DEVE** utilizar o componente `Typography`. Nunca utilize tags HTML nativas de texto (`<h1>`, `<h2>`, `<p>`, `<span>`, `<small>`, etc.) diretamente nas páginas ou componentes.
> - **CRÍTICO**: Todo e qualquer link estilizado **DEVE** utilizar o componente `Link` (`@/components/ui/link`). Nunca utilize a tag `<a>` nativa diretamente. O componente detecta automaticamente links externos (abre em nova aba com ícone) e internos (usa `next/link`).

### Uso do Typography
Importe e utilize sempre os subcomponentes do `Typography` para garantir consistência tipográfica:

```tsx
import { Typography } from "@/components/ui/typography"

// Títulos
<Typography.H1>Título principal</Typography.H1>
<Typography.H2>Subtítulo</Typography.H2>
<Typography.H3>Seção</Typography.H3>
<Typography.H4>Subseção</Typography.H4>
<Typography.H5>Menor</Typography.H5>
<Typography.H6>Mínimo</Typography.H6>

// Textos
<Typography.P>Parágrafo comum</Typography.P>
<Typography.Lead>Texto de destaque / subtítulo de página</Typography.Lead>
<Typography.Large>Texto um pouco maior</Typography.Large>
<Typography.Small>Texto pequeno</Typography.Small>
<Typography.Muted>Texto secundário / dica</Typography.Muted>

// Especiais
<Typography.Code>código inline</Typography.Code>
<Typography.Blockquote>citação</Typography.Blockquote>
<Typography.List><Typography.ListItem>item</Typography.ListItem></Typography.List>
<Typography.OrderedList><Typography.ListItem>item</Typography.ListItem></Typography.OrderedList>
```

### Componentes Disponíveis
Para adicionar um novo componente, use: `npx shadcn@latest add <nome-do-componente>` (em lowercase kebab-case).

| | | | |
|---|---|---|---|
| Accordion | Alert | Alert Dialog | Aspect Ratio |
| Avatar | Badge | Breadcrumb | Button |
| Button Group | Calendar | Card | Carousel |
| Chart | Checkbox | Collapsible | Combobox |
| Command | Context Menu | Data Table | Date Picker |
| Dialog | Direction | Drawer | Dropdown Menu |
| Empty | **Field** (Form) | Hover Card | Input |
| Input Group | Input OTP | Item | Kbd |
| Label | Menubar | Native Select | Navigation Menu |
| Pagination | Popover | Progress | Radio Group |
| Resizable | Scroll Area | Select | Separator |
| Sheet | Sidebar | Skeleton | Slider |
| **Sonner** (Toast) | Spinner | Switch | Table |
| Tabs | Textarea | Toggle | Toggle Group |
| Tooltip | Typography | | |

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
