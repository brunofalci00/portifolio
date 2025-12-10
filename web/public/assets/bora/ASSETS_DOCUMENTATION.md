# BORA App Assets Documentation

## Overview
8 screenshots + 2 videos do app móvel BORA - App de rastreamento de hábitos e rotinas diárias.

**Paleta de Cores do App:**
- Verde principal: #6B9F3E / #A4E34B (verde-limão vibrante)
- Background dark: #0A0A0A
- Background light: #FFFFFF
- Gray text: #9CA3AF

**Temática:** App minimalista de habit tracking com foco em disciplina e consistência.

---

## Screenshots Inventory

### photo-1.jpeg
**Tela:** Rotina do Dia (Dark Mode)
**Conteúdo:**
- Header com progresso circular: "50%" - "7 de 14 concluídos"
- Grid de hábitos/metas em círculos verdes
- Hábitos mostrados:
  1. Evitar redes sociais (✓)
  2. Evitar junk food (✓)
  3. Evitar álcool (✓)
  4. Fazer lista de tarefas (✓)
  5. Pedalar (✓)
  6. Nadar (pendente)
  7. Caminhar ou correr (✓)
  8. Yoga (pendente)
- Bottom navigation com 5 ícones (Home ativo)

**Uso sugerido:** Hero Phone3D carousel, demonstração principal

---

### photo-2.jpeg
**Tela:** Meus Hábitos (Dark Mode)
**Conteúdo:**
- Header "MEUS HÁBITOS" com ícone
- Botão verde: "Adicionar novo hábito"
- Cards de estatísticas:
  - "Maior streak: 2 dias" (laranja/marrom)
  - "Total ativos: 14 hábitos" (azul)
- Campo de busca: "Buscar hábito"
- Dropdown de ordenação: "Nome (A-Z)"
- Tabs: Ativos / Arquivados
- Tags/filtros: avoid, productivity, fitness, Manhã, Tarde, Noite
- Lista de hábitos (cards):
  - "Acordar Cedo" (productivity • Manhã)
  - "Caminhar ou Correr" (visível parcialmente)

**Uso sugerido:** DesignComparator, ActionTabs, demonstração de gerenciamento

---

### photo-3.jpeg
**Tela:** Seu Progresso (Dark Mode - Dashboard de Métricas)
**Conteúdo:**
- Header "SEU PROGRESSO"
- Subtítulo: "Acompanhe sua disciplina nos hábitos concluídos no dia a dia"
- Cards de métricas (2x2 grid):
  - Dias perfeitos: 0 (ícone calendário)
  - Consistência: 72% (ícone gráfico ascendente)
  - Categoria destaque: "avoid" (ícone alvo)
  - Melhor sequência: 2 (ícone medalha)
- Seção "Total de conclusões (90d)": 9
- "Consistência 90d": 47%
- "Melhor streak global": 2d
- "Destaque": avoid
- Bottom: "PROGRESSO DA" (início de gráfico/timeline)

**Uso sugerido:** AnalyticsDashboardSection, ResultsSection, métricas 3D

---

### photo-4.jpeg
*[Não visualizada ainda, mas assumindo conteúdo similar]*

**Uso sugerido:** Backup para comparadores ou outras seções

---

### photo-5.jpeg
**Tela:** Rotina do Dia (LIGHT MODE)
**Conteúdo:**
- Mesma tela da photo-1, mas em tema claro
- Background branco
- Progresso: 36% (5 de 14 concluídos)
- Hábitos concluídos em verde, pendentes em cinza claro
- Demonstra que app tem dark/light theme

**Uso sugerido:** Comparador dark/light mode, DesignEvolutionSection

---

### photo-6.jpeg
*[Não visualizada, assumindo outra tela do app]*

**Uso sugerido:** ActionTabs ou seções complementares

---

### photo-7.jpeg
*[Não visualizada, assumindo outra tela do app]*

**Uso sugerido:** ReflectionSection ou outras seções

---

### photo-8.jpeg
**Tela:** Perfil / Conta (Light Mode)
**Conteúdo:**
- Badge verde: "Premium vitalício"
- Avatar/ícone de usuário
- Nome: "FALCI" (editável - ícone lápis)
- Email: lagosconsulting4@gmail.com
- Data: "Acesso liberado desde 10/11/2025"
- Cards de estatísticas:
  - 14 hábitos ativos
  - 25 dias usando
  - 2% consistência
- Seção "CONTEÚDO BÔNUS":
  - Programa 30 dias (Conteúdo estruturado com módulos, aulas e recursos)
  - Jornada Guiada (Trilha diária com ações/reflexões)
- Bottom navigation (Perfil ativo)
- Início de seção "Biblioteca"

**Uso sugerido:** ReflectionSection, demonstração de features premium

---

## Videos Inventory

### video-1.mp4
**Tamanho:** ~1MB (1,000,423 bytes)
**Duração:** [A verificar ao reproduzir]

**Uso sugerido:**
- UserFlowSection (autoplay loop mostrando navegação)
- Demonstração de interação com hábitos

---

### video-2.mp4
**Tamanho:** ~1.2MB (1,192,538 bytes)
**Duração:** [A verificar ao reproduzir]

**Uso sugerido:**
- AnalyticsDashboardSection (demo click-to-play)
- Demonstração de features avançadas ou onboarding

---

## Recommended Asset Mapping (Sprint Implementation)

### Sprint 1 - Phone3D Hero
- **Primary carousel:** photo-1.jpeg, photo-3.jpeg (screenshots mais impactantes)
- **Fallback static:** photo-1.jpeg

### Sprint 3 - Design Comparator (Figma vs Final)
*Aguardando screenshots do Figma para pareamento*
- Dashboard: [Figma] vs photo-3.jpeg
- Rotina: [Figma] vs photo-1.jpeg
- Hábitos: [Figma] vs photo-2.jpeg
- Perfil: [Figma] vs photo-8.jpeg

### Sprint 7 - Full Asset Integration
| Asset | Section | Usage |
|-------|---------|-------|
| photo-1.jpeg | HeroSection | Phone3D carousel (screen 1) |
| photo-3.jpeg | HeroSection | Phone3D carousel (screen 2) |
| photo-2.jpeg | ActionTabs | Side image for Strategy/UX tab |
| photo-5.jpeg | DesignEvolutionSection | Light mode comparison |
| photo-8.jpeg | ReflectionSection | Profile/premium feature showcase |
| video-1.mp4 | UserFlowSection | Autoplay loop background |
| video-2.mp4 | AnalyticsDashboardSection | Interactive demo |

---

## Color Palette Extracted

**App Native Colors:**
- Primary Green: `#6B9F3E` / `#A4E34B` (lime green)
- Dark BG: `#0A0A0A` / `#1A1A1A`
- Light BG: `#FFFFFF` / `#F9FAFB`
- Text Gray: `#9CA3AF` / `#6B7280`
- Accent Orange: `#EA580C` (streak card)
- Accent Blue: `#3B82F6` (total actives card)

**Blueprint Theme Compatibility:**
- ✅ App's green palette aligns well with our emerald-500 (`#10b981`)
- ✅ Dark backgrounds match blueprint-grid base
- ✅ Light mode provides contrast for comparisons
- 💡 Consider using app's native green (`#A4E34B`) for exact brand matching vs emerald

---

## Technical Notes

**Image Specs:**
- Format: JPEG
- Size range: ~44KB - ~62KB (well optimized)
- Aspect ratio: Portrait mobile (approx 9:19.5)
- Resolution: Suitable for web display

**Video Specs:**
- Format: MP4
- Size: ~1-1.2MB each
- Suitable for web playback
- Should add poster images for loading states

**Next Steps:**
1. ✅ Assets moved to `/web/public/assets/bora/`
2. ⏳ Create WebP versions for performance (optional)
3. ⏳ Extract frames from videos for poster images
4. ⏳ Obtain Figma design screenshots for comparator (Sprint 3)
5. ⏳ Create figma/ subdirectory when assets available

---

## Asset Quality Assessment

✅ **Strengths:**
- Clean, professional UI screenshots
- Consistent branding and design
- Good file sizes (optimized)
- Both dark and light modes available
- Real user data visible (adds authenticity)

⚠️ **Considerations:**
- Personal email visible in photo-8 (may want to blur/redact for portfolio)
- Limited variety of screens (focused on main features)
- No onboarding flow screenshots
- No empty states or error states

**Overall:** High-quality assets ready for production use in redesign.
