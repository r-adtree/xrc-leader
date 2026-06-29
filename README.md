# AdtreeGO Leaderboard

Creator leaderboard for AdtreeGO × TikTok GO campaigns.

## Deploy to Vercel (easiest)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** — done!

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/` folder.

## Admin Panel

Go to `yoursite.com/#admin` to access the admin panel.

Credentials:
- `admin` / `adtree2026`
- `superadmin` / `go2026!`

## Stack

- React 18 + Vite
- No external dependencies (pure React)
- localStorage for admin campaigns & user session
