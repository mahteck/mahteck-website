# 🌐 Mahteck Website

A modern, responsive, and professional website for **Mahteck** – a software company specializing in software development, web solutions, consultancy, and ERP integrations.

Developed using **Next.js (App Router)**, **Tailwind CSS**, and enhanced with animations, sliders, and reusable components.

---

## 🔗 Live Demo

👉 [https://mahteck.com](https://mahteck.com) (Once deployed on Vercel)

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have Node.js and npm installed.

```bash
node -v
npm -v
```

---

### ✅ Installation Steps

1. **Create a new Next.js app**:
   ```bash
   npx create-next-app@latest mahteck-website
   cd mahteck-website
   ```

2. **Install required dependencies**:
   ```bash
   npm install react-icons
   npm install aos
   npm install keen-slider
   npm install react-slick slick-carousel
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. Open in browser: `http://localhost:3000`

---

## 📁 Folder Structure

```
mahteck-website/
├── app/
│   ├── about/
│   ├── services/
│   ├── clients/
│   ├── projects/
│   ├── contact/
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── Banner.tsx
│   ├── Services.tsx
│   ├── Clients.tsx
│   ├── Projects.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── public/
│   ├── banner1.jpg
│   ├── banner2.jpg
│   └── client-logos/
├── styles/
│   └── globals.css
└── README.md
```

---

## ✨ Features

- ✅ Responsive Layout (Mobile + Desktop)
- ✅ Modern Header and Navigation
- ✅ Hero Banner (Image or Animated Slideshow)
- ✅ Services Section with Icons & Animations (AOS)
- ✅ Projects Grid with Logo Support
- ✅ Client Carousel (Slider)
- ✅ Contact Form with Email Integration (Formspree or Nodemailer)
- ✅ WhatsApp Floating Button
- ✅ Sticky Navigation Bar
- ✅ Social Links in Footer
- ✅ "Back to Top" Button
- ✅ SEO-ready with metadata

---

## 🌐 Deployment (Vercel + Cloudflare)

1. Push your code to GitHub.
2. Visit [https://vercel.com](https://vercel.com) and import your GitHub repo.
3. Vercel auto-detects Next.js → Click **Deploy**.
4. After deployment, go to:
   - `Settings → Domains` in Vercel
   - Add `mahteck.com`
5. In your [Cloudflare dashboard](https://dash.cloudflare.com/), update DNS:
   - Add the A or CNAME records provided by Vercel.

Within minutes, your website will be live on:
```text
https://mahteck.com
```

Also accessible at:
```text
https://yourproject.vercel.app
```

---

## 📬 Contact

Mahteck – Software & Digital Solutions  
🌐 [www.mahteck.com](http://www.mahteck.com)  
📧 mahteckteach@mahteck.com  
📍 Karachi, Pakistan

---

## 🛠 Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [React Slick](https://react-slick.neostack.com/)
- [Keen Slider](https://keen-slider.io/)

---

## 🙌 License

This project is licensed for private use by Mahteck. For collaboration or reuse, contact the development team.

---