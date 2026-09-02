import react from "@vitejs/plugin-react";
import { defineConfig } from "electron-vite";
import { resolve } from "path";

export default defineConfig({
    main: {
        resolve: {
            alias: {
                "@main": resolve(__dirname, "src/main"),
                "@shared": resolve(__dirname, "src/shared"),
            },
        },
    },
    preload: {
        resolve: {
            alias: {
                "@shared": resolve(__dirname, "src/shared"),
                "@preload": resolve(__dirname, "src/preload"),
            },
        },
    },
    renderer: {
        resolve: {
            alias: {
                "@shared": resolve("src/shared"),
                "@ui": resolve("src/renderer/ui"),
                "@app": resolve("src/renderer/src"),
                "@": resolve(__dirname, "src/renderer/ui"),
            },
        },
        plugins: [react()],
    },
});
