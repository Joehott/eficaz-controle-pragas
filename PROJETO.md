# Eficaz Controle de Pragas — Guia Completo do Projeto

> **Para uso com Claude Design ou qualquer agente de desenvolvimento.**  
> Este arquivo contém tudo que você precisa saber para continuar o projeto sem precisar reler o histórico de sessões.

---

## 1. IDENTIDADE DA EMPRESA

| Campo | Valor |
|-------|-------|
| Razão Social | Eficaz Controle de Pragas Ltda. |
| Cidade | Manhuaçu, MG — Zona da Mata Mineira |
| Endereço | Rua Anália Maria Dias, 210 — Bom Jardim |
| WhatsApp | (33) 98456-8403 |
| E-mail | Joelson.hott@gmail.com |
| CNAE | 8122-2/00 — Imunização e Controle de Pragas Urbanas |
| Status | Empresa nascente (2026) |

### Restrições de comunicação (IMPORTANTE)
- ❌ NÃO mencionar histórico de R$ 3,5M (pertence a outra empresa do sócio)
- ❌ NÃO comunicar IA em campo como diferencial público
- ⏳ Portal do cliente: backend em desenvolvimento — apenas placeholder/teaser no site

---

## 2. IDENTIDADE VISUAL

### Paleta de cores
```css
--color-primary:    #1a6b2f  /* Verde escuro principal */
--color-accent:     #e8c000  /* Amarelo âmbar (CTAs setor público) */
--color-bg:         #f8faf8  /* Fundo claro geral */
--color-dark:       #1C1C1E  /* Textos escuros */
--color-green-btn:  #2ECC52  /* Verde botões/destaques */
--color-icon-dark:  #043420  /* Verde dos ícones SVG */
```

### Tipografia
- **Fonte principal**: Plus Jakarta Sans (400, 500, 600, 700, 800)
- **Fonte área do cliente/blog**: Plus Jakarta Sans
- **Fallback**: -apple-system, BlinkMacSystemFont, sans-serif

### Tema por seção
- **Site principal (index.html)**: Tema CLARO — fundo branco/cream, textos escuros
- **Blog (blog.html, blog/post.html)**: Tema ESCURO — fundo #030E05, textos claros
- **Área do Cliente (area-cliente.html)**: Tema ESCURO — fundo #030E05

---

## 3. ESTRUTURA DE ARQUIVOS

```
eficaz-controle-pragas/          ← GitHub repo raiz
├── index.html                   ← Site principal (página única, multi-section)
├── style.css                    ← CSS do site principal
├── main.js                      ← JS: typed effect, scroll reveal, animações
├── blog.html                    ← Home do blog (tema escuro)
├── area-cliente.html            ← Portal do cliente placeholder (tema escuro)
├── blog/
│   ├── index.html               ← Blog index versão alternativa
│   └── post.html                ← Template de post individual
└── icons/                       ← 20 ícones SVG (Illustrator export)
    ├── desinsetizacao.svg       ← Prancheta 1
    ├── desratizacao.svg         ← Prancheta 2
    ├── descupinizacao.svg       ← Prancheta 3
    ├── controle-aves.svg        ← Prancheta 4
    ├── limpeza-caixa.svg        ← Prancheta 5
    ├── setor-rural.svg          ← Prancheta 6
    ├── primeiro-contato.svg     ← Prancheta 7
    ├── vistoria.svg             ← Prancheta 8
    ├── aplicacao.svg            ← Prancheta 9
    ├── laudo.svg                ← Prancheta 10
    ├── documento.svg            ← Prancheta 11
    ├── protecao.svg             ← Prancheta 12
    ├── certificacao.svg         ← Prancheta 13
    ├── cobertura.svg            ← Prancheta 14
    ├── empresas.svg             ← Prancheta 15
    ├── setor-publico.svg        ← Prancheta 16
    ├── whatsapp-icon.svg        ← Prancheta 17
    ├── email-icon.svg           ← Prancheta 18
    ├── endereco.svg             ← Prancheta 19
    └── horario.svg              ← Prancheta 20
```

---

## 4. SEÇÕES DO index.html (em ordem)

| ID | Seção | Descrição |
|----|-------|-----------|
| `#hero` | Hero | Texto animado (typed effect), CTAs WhatsApp + Ver Serviços |
| `#servicos` | Serviços | 6 cards: Desinsetização, Desratização, Descupinização, Controle de Aves, Limpeza Caixa d'Água, Setor Rural |
| `#como-funciona` | Como Funciona | 4 etapas: Contato → Vistoria → Aplicação → Laudo |
| `#diferenciais` | Diferenciais | 4 itens: Laudo, ANVISA, RT CREA, Portal |
| `#publico-alvo` | Empresas & Setor Público | 2 cards lado a lado |
| `#cobertura` | Área de Cobertura | Mapa + lista de cidades |
| `#sobre` | Sobre a Eficaz | Texto + estatísticas |
| `#contato` | Contato | Formulário + info de contato |

---

## 5. ÍCONES SVG — FORMATO E USO

### Características técnicas
- **ViewBox**: `0 0 214.47 222.64` (Illustrator export)
- **Classes**: `{slug}_1` (fill branco — área interna) / `{slug}_2` (fill #043420 — contorno)
- **Uso**: `<img src="icons/{slug}.svg" width="80" height="80">`
- **Fundo**: Transparente — funcionam em backgrounds claros e escuros

### Mapeamento de uso no site
```
Serviços (80x80):        desinsetizacao, desratizacao, descupinizacao,
                         controle-aves, limpeza-caixa, setor-rural
Como Funciona (72x72):   primeiro-contato, vistoria, aplicacao, laudo
Diferenciais (44x44):    documento, protecao, certificacao, cobertura
Público-alvo (60x60):    empresas, setor-publico
Contato (40x40):         whatsapp-icon, email-icon, endereco, horario
```

---

## 6. TEXTOS DO HERO (main.js)

```javascript
// Frase fixa: "Proteção profissional contra"
// Palavras rotativas (typed effect):
var words = ['pragas urbanas', 'baratas e ratos', 'mosquitos e cupins', 'cupins e brocas'];
```

---

## 7. PENDÊNCIAS E AJUSTES NECESSÁRIOS

### 🔴 Alta prioridade
- [ ] **Responsividade mobile** — testar e ajustar breakpoints em todas as seções
- [ ] **Hero section mobile** — hero-inner grid deve virar coluna única em mobile
- [ ] **Services grid mobile** — de 3 colunas para 1 coluna em < 768px
- [ ] **Steps grid mobile** — step-arrows ocultos, layout vertical
- [ ] **Contato section mobile** — contact-grid de 2 colunas para 1 coluna

### 🟡 Média prioridade
- [ ] **Menu hamburguer** — implementar toggle para mobile (existe markup mas JS incompleto)
- [ ] **Formulário de contato** — conectar ao backend ou serviço de e-mail (ex: Formspree)
- [ ] **Blog posts reais** — popular blog.html com conteúdo real
- [ ] **Fotos reais** — substituir placeholders SVG por fotos da empresa/equipe
- [ ] **Google Analytics** — adicionar tag GA4

### 🟢 Baixa prioridade
- [ ] **Portal do cliente** — backend Node.js/SQLite existe em `backend/` no Drive
- [ ] **SEO** — adicionar sitemap.xml, robots.txt, schema.org markup
- [ ] **Performance** — otimizar carregamento dos SVGs (sprite ou inline)

---

## 8. LINKS E REPOSITÓRIOS

| Recurso | Link |
|---------|------|
| **Site ao vivo (Vercel)** | https://eficaz-controle-pragas-joehotts-projects.vercel.app |
| **GitHub** | https://github.com/Joehott/eficaz-controle-pragas |
| **Drive — Sessão** | https://drive.google.com/drive/folders/1NmYqhS-jY8-s7GIIWTwe8c7vHfz-zsKL |
| **Drive — Ícones originais (PNG)** | https://drive.google.com/drive/folders/1v8XhLeLqV_Si2H86Lgogb8atwOZyfbIv |
| **Drive — Ícones SVG** | https://drive.google.com/drive/folders/1oz2vX-Hoy24DAXxWIvFawHTAYJJGIAq6 |
| **Notion — Sessão** | https://www.notion.so/Chefe-Sess-o-eficaz_site_20260518-36401729d3508174940fc5368cd08a99 |
| **Backend (Node.js)** | Drive: pasta `backend/` na sessão |

---

## 9. INSTRUÇÕES PARA CLAUDE DESIGN

### Como trabalhar com este projeto

1. **Leia este arquivo primeiro** — é a fonte de verdade do projeto
2. **Clone o repo**: `https://github.com/Joehott/eficaz-controle-pragas`
3. **Edite** `index.html` + `style.css` + `main.js` para ajustes no site principal
4. **Tema escuro** = blog.html e area-cliente.html (CSS inline, auto-contidos)
5. **Ícones** = `<img src="icons/{slug}.svg">` — não altere os SVG files

### Breakpoints CSS atuais (style.css)
```css
/* Verificar e padronizar estes breakpoints: */
@media (max-width: 1024px) { /* tablet */ }
@media (max-width: 768px)  { /* mobile grande */ }
@media (max-width: 480px)  { /* mobile pequeno */ }
```

### Convenções de código
- CSS: variáveis CSS (`--color-*`, `--font-*`) definidas no `:root`
- JS: vanilla JS puro (sem frameworks), eventos DOMContentLoaded
- HTML: semântico (section, article, nav, header, footer)
- Ícones: `<img>` com `loading="lazy"` para SVGs externos

### Deploy
- **Plataforma**: Vercel (projeto `eficaz-controle-pragas` em joehott's projects)
- **Deploy via Maton API** (sem CLI Vercel): POST para `https://api.maton.ai/vercel/v13/deployments`
- **Arquivos estáticos** — sem build step, sem framework

---

## 10. BACKEND (NÃO PUBLICADO)

O backend completo existe mas ainda não está deployado:
- **Stack**: Node.js + Express 5 + SQLite + JWT
- **Localização**: Drive → sessão → pasta `backend/`
- **Rotas**: auth, contact, client, certificates, services, documents, invoices, warranties, appointments, tickets
- **Status**: Código completo, precisa de hosting (Render/Railway/VPS)

---

*Gerado em: 2026-05-22 | Sessão: eficaz_site_20260518 | Ultra Prompt v6.2*
