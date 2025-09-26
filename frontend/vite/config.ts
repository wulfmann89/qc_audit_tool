import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react() as any],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    hmr: {
      host: "cd00c399-b69c-4baa-87a9-7f2c5bc20b95-00-3uakb21lvevf7.spock.replit.dev",
      clientPort: 443,
    },
  },
});
