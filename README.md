# Vue 3 + Vite

## Setup projects

Follow installation step:

```bash
git clone github.com/hoanghoa12345/ig_supabase_vue.git

npm install

# To run code from local server
npm run dev
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

TODO:

- Upload photo to storage
  - Upload to user folder
- Create new posts
- Add comment
- Get list comment
- Get reaction from user, handle if user react post.
- Handle case user react post when check database if user reacted
- Display list comments of posts
