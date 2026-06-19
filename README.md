# RemoteRecruit – Home Page Implementation

A pixel-perfect, highly responsive frontend implementation of the RemoteRecruit landing page built from the ground up using modern web technologies. This project was completed within a 48-hour technical assessment window based on the provided Figma layout design specifications.

## 🔗 Live Links

- **Live Deployed URL:** [https://remote-recruit-jet.vercel.app/](https://remote-recruit-jet.vercel.app/)
- **GitHub Repository:** [https://github.com/almamun2b/RemoteRecruit](https://github.com/almamun2b/RemoteRecruit)

## 🚀 Framework & Libraries Used

The core stack was selected to achieve optimal runtime performance, fast development iterations, and fluid, high-fidelity user experiences:

- **React.js (v18+)** – For modular, declarative component-driven architecture.
- **Tailwind CSS** – For highly accurate utilities, customizable layouts, and seamless responsive design breakpoints.
- **Framer Motion** – For production-grade orchestrations, lazy scroll reveals, staggering list views, and smooth interactive hover micro-states.
- **React Router** – Configured for clean route management and native single-page application performance.
- **Radix UI / Shadcn Primitives** – Utilized for structural base elements ensuring accessible foundational states.

## ✨ Key Features & Implementations

- **Pixel-Perfect Figma Fidelity:** Meticulously matched all custom margins, line-height structures, letter-spacing patterns, and gradient overlay borders across all layout viewports.
- **Advanced Mobile, Tablet & Desktop Responsiveness:** Handled complex structural transformations across smaller screens. Layout blocks adapt smoothly from horizontal dual-column structures into beautifully centered vertical sequences—shifting textual content stacks safely to the top while scaling out internal absolute-positioned badge elements to prevent horizontal scroll leakage.
- **Fluid Framer Motion Reveals:** Integrated targeted viewport visibility checks using custom stagger rules, slide-ups, and smooth fade triggers ensuring zero animation frame skips.
- **Scroll-to-Top Navigation:** Smooth-scrolling functionality tied into footer interaction workflows.

## ⚡ Performance & Accessibility Focus

Designed to naturally hit high benchmarks (Targeting Lighthouse Score ≥ 90):

- **Semantic HTML Markup:** Built using structural tags (`<section>`, `<header>`, `<footer>`, `<main>`, `<button>`) to maintain clean accessibility paths for native screen-readers.
- **Image Optimization:** Implemented descriptive semantic imagery profiles alongside lazy-loading strategies to eliminate early thread blocks.
- **Asset Footprint Reduction:** Implemented custom color gradient hooks natively through class abstractions instead of tracking memory-heavy layout images.

## 💻 Project Setup Instructions

Follow these step-by-step commands to clone and run the production suite locally on your machine.

### Prerequisites

Ensure you have Node.js (v18+) and pnpm (or npm/yarn/pnpm) installed.

### 1. Clone the repository

```bash
git clone https://github.com/almamun2b/RemoteRecruit.git
cd RemoteRecruit
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the local development server

```bash
pnpm dev
```

Open the local URL specified in your console to view the application in your browser.

### 4. Build for Production

To generate a fully optimized build artifact:

```bash
pnpm build
```

## ⚠️ Known Issues & Limitations

- **Static Form Actions:** Interactive visual components (like CTA buttons and input fields) use mock interactive layer loops and do not currently post to a database endpoint or backend service.
- **Client-Side Asset Delivery:** Images and specific webp graphical badges are served via local public directory streams rather than via an external globally distributed Media Content Delivery Network (CDN).
