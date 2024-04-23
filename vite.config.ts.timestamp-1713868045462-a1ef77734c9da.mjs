// vite.config.ts
import { defineConfig } from "file:///D:/Freelance/Projects/mira/mira/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///D:/Freelance/Projects/mira/mira/node_modules/vite-plugin-pwa/dist/index.js";
import react from "file:///D:/Freelance/Projects/mira/mira/node_modules/@vitejs/plugin-react-swc/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "D:\\Freelance\\Projects\\mira\\mira";
var vite_config_default = defineConfig({
  server: {
    port: 5173
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        theme_color: "rgba(40, 43, 113, 1)",
        name: "\u041C\u0438\u0440\u0430",
        short_name: "\u041C\u0438\u0440\u0430",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxGcmVlbGFuY2VcXFxcUHJvamVjdHNcXFxcbWlyYVxcXFxtaXJhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxGcmVlbGFuY2VcXFxcUHJvamVjdHNcXFxcbWlyYVxcXFxtaXJhXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9GcmVlbGFuY2UvUHJvamVjdHMvbWlyYS9taXJhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0c2VydmVyOiB7XHJcblx0XHRwb3J0OiA1MTczLFxyXG5cdH0sXHJcblx0cGx1Z2luczogW1xyXG5cdFx0cmVhY3QoKSxcclxuXHRcdFZpdGVQV0Eoe1xyXG5cdFx0XHRyZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuXHRcdFx0aW5jbHVkZUFzc2V0czogWydmYXZpY29uLmljbycsICdhcHBsZS10b3VjaC1pY29uLnBuZycsICdtYXNrLWljb24uc3ZnJ10sXHJcblx0XHRcdG1hbmlmZXN0OiB7XHJcblx0XHRcdFx0dGhlbWVfY29sb3I6ICdyZ2JhKDQwLCA0MywgMTEzLCAxKScsXHJcblx0XHRcdFx0bmFtZTogJ1x1MDQxQ1x1MDQzOFx1MDQ0MFx1MDQzMCcsXHJcblx0XHRcdFx0c2hvcnRfbmFtZTogJ1x1MDQxQ1x1MDQzOFx1MDQ0MFx1MDQzMCcsXHJcblx0XHRcdFx0aWNvbnM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAncHdhLTY0eDY0LnBuZycsXHJcblx0XHRcdFx0XHRcdHNpemVzOiAnNjR4NjQnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UvcG5nJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogJ3B3YS0xOTJ4MTkyLnBuZycsXHJcblx0XHRcdFx0XHRcdHNpemVzOiAnMTkyeDE5MicsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdpbWFnZS9wbmcnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAncHdhLTUxMng1MTIucG5nJyxcclxuXHRcdFx0XHRcdFx0c2l6ZXM6ICc1MTJ4NTEyJyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ2ltYWdlL3BuZycsXHJcblx0XHRcdFx0XHRcdHB1cnBvc2U6ICdhbnknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAnbWFza2FibGUtaWNvbi01MTJ4NTEyLnBuZycsXHJcblx0XHRcdFx0XHRcdHNpemVzOiAnNTEyeDUxMicsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdpbWFnZS9wbmcnLFxyXG5cdFx0XHRcdFx0XHRwdXJwb3NlOiAnbWFza2FibGUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczogW3sgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH1dLFxyXG5cdH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlSLFNBQVMsb0JBQW9CO0FBQ3RULFNBQVMsZUFBZTtBQUN4QixPQUFPLFdBQVc7QUFDbEIsWUFBWSxVQUFVO0FBSHRCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSx3QkFBd0IsZUFBZTtBQUFBLE1BQ3RFLFVBQVU7QUFBQSxRQUNULGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDQyxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDVjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWtCLGFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUNuRTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
