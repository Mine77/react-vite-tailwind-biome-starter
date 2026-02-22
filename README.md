# React + Vite + Tailwind CSS + Biome

一个最小化的 React Vite 启动模板：

- Tailwind CSS 通过 Vite 官方插件集成（无需额外 PostCSS 配置）
- Biome 统一负责格式化与代码检查
- TypeScript + React + Vite

## 开发

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
pnpm preview
```

## 代码质量

```bash
pnpm lint
pnpm format
```

## 目录说明

- `src/index.css` 使用 `@import "tailwindcss";`
- `vite.config.ts` 已启用 `@tailwindcss/vite`
- `biome.json` 为 Biome 默认推荐配置
