// react-router.config.ts
import type { Config } from "@react-router/dev/config"
import { vercelPreset } from "@vercel/react-router/vite"

export default {
  // Keep SSR enabled for full framework mode (recommended)
  ssr: true,

  // Add this line
  presets: [vercelPreset()],

  // Other options...
} satisfies Config
