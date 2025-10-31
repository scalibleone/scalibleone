<p align="center">
  <img src="./src/logo/logo.svg" alt="ScalibleOne Logo" width="120"/>
</p>

<h1 align="center">ScalibleOne</h1>
<p align="center"><strong>Build Fast, Scale Smart</strong></p>

---

## 🌐 Live Demo
[https://www.scalibleone.com](https://www.scalibleone.com)

---

## 🚀 Overview
**ScalibleOne** is an AI-powered business platform built to help founders and creators launch, scale, and manage digital systems efficiently.  
Developed using **Next.js 15**, **Supabase**, and **modern UI/UX principles**, it brings together intelligent automation, sleek design, and performance-driven architecture — all aimed at accelerating how products are built.

---

## ✨ Features
- ⚡ **AI-Ready Architecture** – Seamlessly integrates with LangChain or OpenAI APIs.  
- 🧩 **Modular Components** – Organized, scalable, and reusable across the project.  
- 🔐 **Secure Backend** – Powered by Supabase (PostgreSQL, Auth, API).  
- 🎨 **Modern UI** – Clean design built with Tailwind CSS and Framer Motion animations.  
- 🌍 **Full Responsive Design** – Optimized for all screen sizes.  
- ☁️ **One-Click Deploy** – Ready for deployment on Vercel or Railway.

---

## 🧠 Tech Stack
- **Frontend:** Next.js 15 (App Router) + React 19  
- **Styling:** Tailwind CSS + Framer Motion  
- **Backend:** Supabase (PostgreSQL + Auth)  
- **Language:** TypeScript  
- **Deployment:** Vercel (Frontend) + Railway (Backend)

---

## 🧱 Project Structure
```bash
scalibleone/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── DemoSection.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── supabaseClient.ts
├── public/
│   └── logo.svg
├── package.json
├── next.config.js
└── README.md

---

## ⚙️ Setup Instructions
```bash
# Clone the repository
git clone https://github.com/yourusername/scalibleone-web.git

# Navigate to project
cd scalibleone-web

# Install dependencies
npm install

# Run development server
npm run dev

# Visit
http://localhost:3000
🔑 Environment Variables
Create a .env.local file in your root directory with the following:

bash
Copy code
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenRouter / AI
OPENROUTER_API_KEY=your_openrouter_api_key

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
⚠️ Never commit .env.local to Git. Keep secrets safe and use .env.example for public repos.

🚀 Deployment
Vercel (Frontend)
Connect your GitHub repo on Vercel.

Add all environment variables in “Project Settings → Environment Variables”.

Deploy from the main branch.

Railway (Backend / APIs)
Connect the same repo.

Add Supabase + API keys as environment variables.

Deploy — your server will be live instantly.

📬 Contact
For business or partnership inquiries:
📧 contact@scalibleone.com

🪪 License
This project is licensed under the MIT License.
© 2025 ScalibleOne — All Rights Reserved.
