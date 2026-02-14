# CarRentalAgo

A premium car rental website built with React, TypeScript, Tailwind CSS, and MUI.

## Features

- **Navigation**: Home, About, Cars, Contact
- **Modern design**: Clean, luxurious layout with gold accents and elegant typography
- **Easy booking**: One-click WhatsApp integration for instant car reservations
- **Responsive**: Works on desktop, tablet, and mobile

## Setup

```bash
npm install
npm run dev
```

## WhatsApp Integration

To use your own WhatsApp number for bookings:

1. Copy `.env.example` to `.env`
2. Set `VITE_WHATSAPP_NUMBER` to your number (country code + number, no + or spaces)
   - Example: `491234567890` for Germany

## Hosting

This is a static site (Vite + React). Build and deploy the `dist` folder to any static host.

### Build for production

```bash
npm run build
```

Output is in the `dist/` folder. Upload that folder (or its contents) to your host.

### Hosting options

| Platform | Steps |
|----------|--------|
| **Vercel** | Install [Vercel CLI](https://vercel.com/cli), run `vercel` in the project, or connect the repo at [vercel.com](https://vercel.com). Set build command: `npm run build`, output: `dist`. |
| **Netlify** | Connect the repo at [netlify.com](https://netlify.com). Build command: `npm run build`, publish directory: `dist`. |
| **GitHub Pages** | Build, then push the `dist` contents to a `gh-pages` branch, or use the [gh-pages](https://www.npmjs.com/package/gh-pages) package. You may need to set `base` in `vite.config.ts` to your repo name (e.g. `/CarRentalAgo/`). |
| **Cloudflare Pages** | Connect the repo at [pages.cloudflare.com](https://pages.cloudflare.com). Build command: `npm run build`, output: `dist`. |
| **Any static host** | Run `npm run build`, then upload everything inside `dist/` via FTP, cPanel, or your host’s file manager. |

For **client-side routing** (React Router), configure your host to serve `index.html` for all routes (SPA fallback) so refreshes and direct links work. Vercel, Netlify, and Cloudflare Pages do this by default for SPAs.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Material UI (MUI)
- React Router
