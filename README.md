# Instarly Vue 3 + Vite

## Setup projects

Follow installation step:

```bash
git clone github.com/hoanghoa12345/instarly.git

pnpm install

# To run code from local server
pnpm run dev
```

Require base known:

- Node JS 14.7
- NPM Script
- Tailwind CSS
- Supabase JS

Config supabase Client Secret
Go to supabase project setting to get config from API Setting,
Open .env.local file, and update config url and key:

```
VITE_APP_SUPABASE_URL=<supabase_url>
VITE_APP_SUPABASE_KEY=<supabase_key>
```

Follow setting from supabase

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


