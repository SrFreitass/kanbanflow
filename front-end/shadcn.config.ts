// shadcn.config.ts
export default {
    path: "./src/components/ui",
    rsc: false,
    typescript: true,
    tailwind: {
        config: "tailwind.config.ts",
        css: "src/index.css",
        baseColor: "zinc",
        cssVariables: true,
    }
}
