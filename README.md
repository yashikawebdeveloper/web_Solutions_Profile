# Yashika Web Developer — Portfolio Website

A premium, modern, and fully responsive Next.js portfolio website for Yashika Web Developer.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Fonts**: Inter + Space Grotesk (Google Fonts)

## ✨ Features

- 🎨 Dark theme with deep blue, purple, and premium gradients
- 💎 Glassmorphism UI elements
- ⚡ Smooth scroll reveal animations (Framer Motion)
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- 🔍 SEO-optimized with metadata
- ✉️ Functional contact form with EmailJS
- 🎭 Typing animation in hero section
- 🌟 Animated blobs and floating particles

## 📦 Sections

1. **Navbar** — Sticky, glassmorphism, active states
2. **Hero** — Typing animation, CTA buttons, stats
3. **About** — Introduction, highlights, skill chips
4. **Services** — 6 premium service cards
5. **Skills** — Tech stack with progress bars
6. **Projects** — 6 project cards with hover overlays
7. **Hire Me** — CTA banner + pricing packages
8. **Contact** — EmailJS form + contact info
9. **Footer** — Links, social media, branding

## 🛠️ Setup

### 1. Configure EmailJS

Edit `components/Contact.tsx` and replace the placeholders:

```ts
const EMAILJS_SERVICE_ID = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY = 'your_public_key'
```

To get these values:
1. Create an account at [emailjs.com](https://emailjs.com)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key

### 2. Add Your Logo

Place your logo image at `public/logo.png`. A fallback SVG logo is already included at `public/logo.svg`.

### 3. Customize Content

- **Projects**: Edit the `projects` array in `components/Projects.tsx`
- **Services**: Edit the `services` array in `components/Services.tsx`
- **Pricing**: Edit the `packages` array in `components/HireMe.tsx`
- **Social Links**: Update GitHub/LinkedIn/Instagram URLs in `components/Footer.tsx` and `components/Contact.tsx`

## 🔧 Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## 📄 License

MIT — Feel free to use and customize!

---

Made with ❤️ by Yashika Web Developer