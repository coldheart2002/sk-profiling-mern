import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { clientPort } from "./src/setup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: clientPort,
  },
});
