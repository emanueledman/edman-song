# 🎯 PLANO DE INTEGRAÇÃO - React → Next.js

## 📊 ANÁLISE DA ESTRUTURA ATUAL

### Componentes disponíveis:
- **UI Base (32 componentes)**: button, input, card, dialog, tabs, accordion, etc.
- **Componentes Feature**: Header, Footer, Hero, GenresShowcase, ReleasesCarousel, TopCharts, etc.
- **Páginas**: Index, ArtistPage, AlbumPage, TrackPage, ReleasesPage, GenrePage, ArtistsPage
- **Data**: musicData.ts com dados estruturados
- **Hooks**: use-mobile, use-toast
- **Dependências**: React Query, React Router, Helmet

---

## 🚀 FASES DE INTEGRAÇÃO

### **FASE 1: Fundação (Semana 1)**
**Status**: Pronto para iniciar
**Objetivo**: Setup inicial + Componentes base

#### 1.1 Preparação do Ambiente
- [x] Tailwind v3 configurado
- [x] Fontes importadas (Inter, Poppins)
- [x] Estrutura de pastas base
- [ ] Instalar dependências extras: `react-query`, `react-helmet`, `lucide-react`
- [ ] Copiar `lib/utils.ts` utilities
- [ ] Copiar `data/musicData.ts`

#### 1.2 UI Components Base
- [ ] Copiar 5 componentes UI críticos:
  - `button.tsx`
  - `card.tsx`
  - `input.tsx`
  - `badge.tsx`
  - `tabs.tsx`
- [ ] Adaptar imports para Next.js

#### 1.3 Layout Principal
- [ ] Criar componente `Header` (navbar)
- [ ] Criar componente `Footer`
- [ ] Criar `RootLayout` com Header + Footer
- [ ] Testar navegação básica

---

### **FASE 2: Página Inicial (Semana 1-2)**
**Objetivo**: Hero page funcional

#### 2.1 Componentes Necessários
- [ ] `Hero.tsx` - Banner principal com CTA
- [ ] `FeaturedPlayer.tsx` - Player de destaque
- [ ] `StatsSection.tsx` - Estatísticas
- [ ] `AppDownload.tsx` - Download da app

#### 2.2 Integração Data
- [ ] Importar `musicData.ts`
- [ ] Criar dados estruturados (JSON)
- [ ] Testar renderização

#### 2.3 Página
- [ ] `app/page.tsx` - Index/Home
- [ ] Integrar componentes
- [ ] Testar layout responsivo

---

### **FASE 3: Navegação & Rotas (Semana 2)**
**Objetivo**: Sistema de rotas Next.js

#### 3.1 Rotas Dinâmicas
- [ ] `app/artists/page.tsx` - Lista artistas
- [ ] `app/artists/[slug]/page.tsx` - Detalhe artista
- [ ] `app/releases/page.tsx` - Lista lançamentos
- [ ] `app/album/[slug]/page.tsx` - Detalhe álbum
- [ ] `app/genre/[id]/page.tsx` - Detalhe género

#### 3.2 Componentes de Listagem
- [ ] `TrendingArtists.tsx`
- [ ] `ReleasesCarousel.tsx`
- [ ] `GenresShowcase.tsx`
- [ ] `TopCharts.tsx`

---

### **FASE 4: Componentes Secundários (Semana 3)**
**Objetivo**: Features avançadas

#### 4.1 Componentes
- [ ] `LiveRadio.tsx`
- [ ] `EventsSection.tsx`
- [ ] `Testimonials.tsx`
- [ ] `NewsHighlight.tsx`
- [ ] `PremiumBanner.tsx`
- [ ] `ArtistsMarquee.tsx`
- [ ] `AdvertisementsCarousel.tsx`
- [ ] `AppDownload.tsx`

#### 4.2 Integração
- [ ] Adicionar à página inicial
- [ ] Testar layout

---

### **FASE 5: Páginas Detalhadas (Semana 3-4)**
**Objetivo**: Páginas de detalhe funcionais

#### 5.1 Artist Page
- [ ] Exibir informação do artista
- [ ] Lista de músicas
- [ ] Álbuns relacionados
- [ ] Estatísticas

#### 5.2 Album Page
- [ ] Capa do álbum
- [ ] Tracks listadas
- [ ] Informação geral
- [ ] Artistas colaboradores

#### 5.3 Track Page
- [ ] Player integrado
- [ ] Lyrics (se disponível)
- [ ] Recomendações
- [ ] Share options

---

### **FASE 6: Features Avançadas (Semana 4+)**
**Objetivo**: Funcionalidades premium

- [ ] Sistema de autenticação
- [ ] Playlists
- [ ] Favoritos
- [ ] Search/Filtros
- [ ] Admin panel
- [ ] API integration

---

## 📋 MAPA DE DEPENDÊNCIAS

```
Header
├── NavLink
└── Sidebar

Footer
└── (Links)

Home (index)
├── Hero
├── FeaturedPlayer
├── StatsSection
├── GenresShowcase
│   └── GenreCard + play-btn
├── ReleasesCarousel
│   └── ReleaseCard + play-btn
├── TopCharts
│   └── ChartItem
├── TrendingArtists
├── ArtistsMarquee
├── LiveRadio
├── EventsSection
├── NewsHighlight
├── Testimonials
├── PremiumBanner
├── AdvertisementsCarousel
└── AppDownload

ArtistPage
├── Header (info artista)
├── StatsSection
├── ReleasesCarousel
├── TopCharts
└── Testimonials

AlbumPage
├── AlbumHeader
├── TrackList
└── Recomendações

TrackPage
├── FeaturedPlayer
├── Lyrics
└── Recomendações

Genres
└── GenreList + Cards

ReleasesPage
└── ReleasesList + Filters
```

---

## 🔧 DEPENDÊNCIAS A INSTALAR

```bash
npm install @tanstack/react-query react-helmet-async
npm install lucide-react clsx tailwind-merge
```

---

## 📦 ESTRUTURA FINAL DO PROJETO

```
eman-songs/
├── app/
│   ├── globals.css          ✅
│   ├── layout.tsx           ✅
│   ├── page.tsx             ✅ (HOME)
│   ├── artists/
│   │   ├── page.tsx         (PHASE 3)
│   │   └── [slug]/
│   │       └── page.tsx     (PHASE 3)
│   ├── releases/
│   │   ├── page.tsx         (PHASE 3)
│   │   └── [slug]/
│   │       └── page.tsx     (PHASE 5)
│   ├── album/
│   │   └── [slug]/
│   │       └── page.tsx     (PHASE 5)
│   ├── genre/
│   │   └── [id]/
│   │       └── page.tsx     (PHASE 3)
│   ├── track/
│   │   └── [slug]/
│   │       └── page.tsx     (PHASE 5)
│   └── api/                 (PHASE 6+)
│
├── components/
│   ├── ui/                  ✅ (base)
│   ├── Header.tsx           (PHASE 1)
│   ├── Footer.tsx           (PHASE 1)
│   ├── Hero.tsx             (PHASE 2)
│   ├── FeaturedPlayer.tsx   (PHASE 2)
│   ├── StatsSection.tsx     (PHASE 2)
│   ├── ReleasesCarousel.tsx (PHASE 3)
│   ├── GenresShowcase.tsx   (PHASE 3)
│   ├── TopCharts.tsx        (PHASE 3)
│   ├── TrendingArtists.tsx  (PHASE 3)
│   ├── [...outros]          (PHASE 4)
│   └── Sidebar.tsx          (PHASE 4)
│
├── lib/
│   ├── utils.ts             ✅
│   └── data.ts              (PHASE 2)
│
├── hooks/
│   ├── use-mobile.tsx       (PHASE 1)
│   └── use-toast.ts         (PHASE 1)
│
└── public/
    └── [assets]             (PHASE 1)
```

---

## ✅ CHECKLIST POR FASE

### FASE 1 (Próxima)
- [ ] Instalar: `@tanstack/react-query`, `react-helmet-async`
- [ ] Copiar hooks (`use-mobile.tsx`, `use-toast.ts`)
- [ ] Copiar 5 UI components críticos
- [ ] Copiar `lib/utils.ts` completo
- [ ] Criar componentes `Header` e `Footer`
- [ ] Testar layout básico

### FASE 2
- [ ] Copiar `musicData.ts`
- [ ] Criar componentes Hero, FeaturedPlayer, StatsSection, AppDownload
- [ ] Atualizar `app/page.tsx`
- [ ] Testar home page

### FASE 3
- [ ] Criar rotas dinâmicas
- [ ] Implementar componentes de listagem
- [ ] Testar navegação

### FASE 4
- [ ] Adicionar componentes secundários
- [ ] Refinar layout home

### FASE 5
- [ ] Implementar páginas detalhadas
- [ ] Testar navegação completa

---

## 🎯 PRÓXIMO PASSO

**Começamos pela FASE 1?**

Vou:
1. ✅ Instalar dependências
2. ✅ Copiar hooks
3. ✅ Copiar 5 UI components base
4. ✅ Criar Header + Footer
5. ✅ Testar

**Confirma para começar!** 🚀
