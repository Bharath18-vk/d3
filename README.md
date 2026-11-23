# D3 The Grand Interior Mall — Premium Digital Showroom

> **"Spaces that inspire. Living that elevates."**

An elite digital showroom concept designed for **D3 The Grand Interior Mall**, showcasing contemporary architectural living spaces, interior products, tactile material libraries, and full-scale room inspiration.

---

## ✨ Features & Architecture

- **Cinematic Editorial Hero**: Full-bleed architectural imagery with warm daylighting, refined serif typography, and instant discovery CTAs.
- **Asymmetrical Editorial Sections**:
  - `01 — Concept`: *A World of Interiors* spatial philosophy and pillars.
  - `02 — Curated Worlds`: 6 discovery categories (Living Spaces, Bedroom & Comfort, Kitchens & Dining, Lighting & Ambience, Surfaces & Materials, Décor & Finishing Touches) with interactive deep-dive modals.
  - `03 — The Art of Living`: Storytelling section framing the emotional intimacy of home.
  - `04 — Materiality`: Dark charcoal tactile library inspecting natural travertine, fluted oak, bouclé linen, Calacatta marble, and patinated bronze.
  - `05 — Editorial Journal`: Inspiration gallery with category filters and full-screen lightbox navigation with keyboard controls.
  - `06 — The Distinction`: 4 editorial pillars highlighting real-world tactile exploration.
  - `07 — Showroom Invitation`: Location details, opening hours, directions, and interactive visit consultation scheduler.
- **WhatsApp Inquiry Engine**: Floating concierge badge and contextual CTAs throughout with pre-filled inquiries.
- **Central Editable Configuration**: All brand information, phone lines, WhatsApp numbers, hours, and addresses are managed from [`src/config/siteConfig.ts`](src/config/siteConfig.ts).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS (Custom luxury color palette: Warm Ivory, Soft Limestone, Deep Espresso, Dark Charcoal, Muted Bronze)
- **Typography**: Cormorant Garamond (Editorial Serif) & Manrope (Grotesque Sans)
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Bharath18-vk/d3.git

# Navigate into project directory
cd d3

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` to explore the showroom.

### Production Build

```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration

To update showroom contact information, address, WhatsApp number, or operating hours, edit:

```ts
// src/config/siteConfig.ts
export const siteConfig = {
  brand: {
    name: "D3 The Grand Interior Mall",
    // ...
  },
  contact: {
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210", // Set your WhatsApp line here
    addressDisplay: "D3 The Grand Interior Mall, Prime Design Boulevard",
    // ...
  }
};
```

---

© 2026 D3 The Grand Interior Mall. All Rights Reserved.
