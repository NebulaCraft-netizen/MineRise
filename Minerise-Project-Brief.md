# 🪓 Minerise Project Brief

## Overview

**Name:** Minerise  
**Type:** Minecraft network / server project  
**Website Goal:** A polished online store + info hub where players can:

- Buy ranks, cosmetics, and kits
- View perks and rewards
- Access support and FAQs
- Connect to community links (Discord, server IP, socials)

## Core Features (for Copilot)

### Homepage
- Hero section with Minerise branding, tagline, and “Play Now” / “Join Discord” buttons.
- Featured store items (VIP, MVP, cosmetics, etc.).
- Highlight latest announcements / updates.

### Store Pages
- Product categories: Ranks, Cosmetics, Kits, Bundles.
- Product cards: image, name, price, badge (“Popular”, “New”, “Sale”).
- Product details: description, benefits, add-to-cart.
- Cart & Checkout flow with Stripe integration.

### User System (stub or later)
- Optional login (email / Discord / Mojang username).
- Show purchased ranks and cosmetics.
- “Your Account” dashboard.

### Admin Panel
- Secure page for staff to manage products.
- Add / edit product data (mock JSON or real DB).
- Upload images (placeholder until real storage integration).

### Community & Support
- Discord invite + server IP display.
- Support page with FAQs and ticket links.
- Contact form (sends email via API route / SMTP service).

## Design Style
- Inspired by https://store.mcfleet.net/.  
- Dark Minecraft-themed UI with gold accents (#fbbf24).  
- Rounded corners, shadowed cards, clean modern fonts.  
- Responsive: mobile-first, grid layouts, lazy-loaded images.

## Technical Stack
- **Framework:** Next.js (TypeScript)  
- **Styling:** Tailwind CSS  
- **Payments:** Stripe Checkout  
- **Hosting:** Vercel  
- **Database (later):** Supabase or Firebase  
- **Auth (later):** NextAuth or Clerk

## Content / Copywriting
**Server tagline:** “Level up your Minecraft experience with Minerise!”

### Section examples:
- “Ranks give you exclusive perks and recognition.”
- “Cosmetics let you stand out on the battlefield.”
- “Bundles save you money and boost your gameplay.”

### Example Product List (for mock data)
- Minerise VIP (Popular) – $9.99
- Minerise MVP (Best Value) – $19.99
- Cosmetics Pack – $4.99
- Starter Kit – $2.99
- Pro Bundle – $29.99

## Deployment / Dev Notes
Use .env.local for Stripe + site config:  
NEXT_PUBLIC_URL=https://minerise.net  
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx  
STRIPE_SECRET_KEY=sk_test_xxx

Deploy via Vercel with env vars configured.  
Products stored in /data/products.ts or DB later.