# Playbook Piloto — Next.js (Vercel-ready)

## Desarrollo local
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Despliegue en Vercel
1. Sube este proyecto a GitHub (o GitLab/Bitbucket).
2. En Vercel: **Add New → Project → Import** tu repo.
3. Framework: Next.js (detecto automático). Build: `next build`.
4. Variables: no requiere.
5. Deploy y listo: te dará una URL pública.

## Notas
- Este proyecto usa el **App Router** de Next.js (carpeta `app/`).
- Tailwind ya está configurado (`tailwind.config.js`, `postcss.config.js`, `app/globals.css`).
- La página principal es `app/page.jsx` y contiene tu componente Playbook.
