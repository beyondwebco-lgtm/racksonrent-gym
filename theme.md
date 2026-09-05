# Racks on Rent — Theme & Color System

The visual identity and design system of **Racks on Rent** are strictly defined by **three core brand colors**:

---

## 🏆 The 3 Main Core Brand Colors

These three colors define the entire site's branding, headers, actions, highlights, and visual hierarchy:

| # | Color Name | Hex Code | Role & Primary Usage |
| :-: | :--- | :--- | :--- |
| **1** | **Primary Maroon** | `#740202` | **The Main Brand Color** — All primary headers (`h1`, `h2`, `h3`), navigation text, active card borders, primary brand accents, and key visual identity elements. |
| **2** | **Light Yellow** | `#FAFA33` | **The Primary Accent & CTA Color** — Primary action buttons ("List Retail Space", "Search Spaces"), eyebrow badges, interactive hover states, and high-energy highlights. |
| **3** | **Dark Gold** | `#B8913A` | **The Premium Keyword Accent Color** — Keyword highlights in section titles, feature benefit icons, category badges, and secondary luxury accents. |

---

## 🎨 Complete Theme Color Tokens

| Color Token | Hex Code | CSS Variable | Tailwind Class | Primary Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Maroon** | `#740202` | `--color-primary-maroon` | `bg-[#740202]`, `text-[#740202]`, `border-[#740202]` | Main headers, brand logos, primary outlines |
| **Light Yellow** | `#FAFA33` | `--color-lemon-yellow` | `bg-[#FAFA33]`, `text-[#FAFA33]`, `border-[#FAFA33]` | CTA buttons, pill badges, active highlights |
| **Dark Gold** | `#B8913A` | `--color-dark-gold` | `text-[#B8913A]`, `bg-[#B8913A]`, `border-[#B8913A]` | Highlighted title keywords, icon accents |
| **Soft Lemon** | `#FFFBCC` | `--color-soft-lemon` | `bg-[#FFFBCC]`, `text-[#FFFBCC]` | Soft pill backgrounds, subtle hover tints |
| **Warm White / Cream** | `#FFFDF5` | `--color-warm-white` | `bg-[#FFFDF5]` | Main page background & card surfaces |
| **Charcoal Dark Text** | `#1F1F1F` | `--color-dark-text` | `text-[#1F1F1F]` | Body text, readable paragraphs |
| **Muted Text** | `#5F5F5F` | `--color-muted-text` | `text-[#5F5F5F]` | Subtitles, descriptions, captions |
| **Soft Border** | `#F0E2E4` | `--color-soft-border` | `border-[#F0E2E4]` | Card borders and divider lines |

---

## 🛠️ CSS Variables (`app/globals.css`)

```css
@theme inline {
  /* 3 Main Brand Colors */
  --color-primary-maroon: #740202;
  --color-lemon-yellow: #FAFA33;
  --color-dark-gold: #B8913A;

  /* Supporting Neutrals & Accents */
  --color-soft-lemon: #FFFBCC;
  --color-warm-white: #FFFDF5;
  --color-soft-border: #F0E2E4;
  --color-dark-text: #1F1F1F;
  --color-muted-text: #5F5F5F;

  /* Functional Token Mappings */
  --color-primary: var(--color-primary-maroon);
  --color-heading: var(--color-primary-maroon);
  --color-accent: var(--color-lemon-yellow);
  --color-gold: var(--color-dark-gold);
  --color-accent-light: var(--color-soft-lemon);
  --color-background-soft: var(--color-soft-lemon);
  --color-background: var(--color-warm-white);
  --color-surface: var(--color-warm-white);
  --color-border: var(--color-soft-border);
  --color-text: var(--color-dark-text);
  --color-text-muted: var(--color-muted-text);
}
```

---

## 📐 Usage Rules Across Components

1. **Titles & Section Headings**:
   - Base title text: **Maroon `#740202`**
   - Highlighted keywords: **Dark Gold `#B8913A`** (e.g. `Display`, `Fashion`, `Works`, `What You Need`, `FAQs`) or **Light Yellow `#FAFA33`** (e.g. `on Rent`).

2. **Buttons & Call-to-Actions**:
   - Primary action buttons: Background **Light Yellow `#FAFA33`** with text in **Maroon `#740202`**.
   - Secondary action buttons: Background **Maroon `#740202`** with text in **Light Yellow `#FAFA33`**.

3. **Eyebrow Badges**:
   - Background **Light Yellow `#FAFA33`**, text in **Maroon `#740202`**, border in **Maroon `#740202`**.

4. **Icons & Feature Points**:
   - Benefit icons and highlighted feature labels use **Dark Gold `#B8913A`** or **Maroon `#740202`**.
