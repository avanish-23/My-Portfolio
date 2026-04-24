# Avanish Kumar - Portfolio Website

A modern, responsive React + TypeScript portfolio website built and optimized for Visual Studio Code development.

## 🚀 Quick Start

1. **Download this folder** to your computer
2. **Open in VS Code**: File → Open Folder → Select this folder
3. **Open Terminal**: Ctrl + ` (backtick) or Terminal → New Terminal
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start development server**:
   ```bash
   npm run dev
   ```
6. **Visit**: [http://localhost:3000](http://localhost:3000)

## ✨ Features

- ✅ **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- ✅ **Dark Theme**: Sleek slate/blue color scheme
- ✅ **Smooth Scrolling Navigation**
- ✅ **Hero, About, Skills, Projects, Education, Certifications, Contact**
- ✅ **Functional Contact Form** with validation
- ✅ **Font Awesome Icons** integrated
- ✅ **Optimized Build** for fast performance

## 📁 Project Structure

```
vscode-portfolio/
├── public/                 # Static files like favicon, images
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── use-mobile.tsx
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styling
├── package.json           # Project metadata and dependencies
├── vite.config.ts         # Vite config
└── tailwind.config.js     # Tailwind custom config
```

## 📜 Available Scripts

- `npm run dev` - Start local development (usually at `localhost:3000`)
- `npm run build` - Build optimized files for production
- `npm run preview` - Preview the built version locally

## 🔧 Customization Guide

### 🧑 Personal Info

Update the following components:
- `Hero.tsx` → Name, role, social media links
- `About.tsx` → Bio and profile image
- `Projects.tsx` → Real GitHub project links
- `Certifications.tsx` → Certifications or recognitions
- `Contact.tsx` → Email, phone, form messages

### 🎨 Styling

- Colors → Edit in `index.css` or `tailwind.config.js`
- Fonts → Update in `index.html` and `index.css`
- Layouts → Edit the relevant components directly

### ➕ Adding New Sections

1. Create new file inside `src/components/`
2. Import and insert it in `App.tsx`
3. Add to the navbar in `Navigation.tsx`

## 🧰 Tech Stack

- **React 18** – Component-based frontend
- **TypeScript** – Strict type-checking
- **Tailwind CSS** – Utility-first styling
- **Vite** – Fast development build tool
- **Font Awesome** – Scalable icons

## 🌐 Deployment

### 🏗️ Build
```bash
npm run build
```

### 🚀 Deployment Options

- **Netlify**: Upload `dist/` via drag & drop
- **Vercel**: Connect GitHub repo and deploy
- **GitHub Pages**: Push `dist/` folder to a branch like `gh-pages`
- **Any Static Hosting**: Upload the `dist/` folder contents

## 💻 Recommended VS Code Extensions

- **ES7+ React Snippets**
- **Tailwind CSS IntelliSense**
- **Auto Rename Tag**
- **Prettier**
- **TypeScript Importer**

## 🛠️ Troubleshooting

- Run `npm install` if any dependency is missing
- Port `3000` busy? Vite will automatically switch
- Windows issue? Always use `npm run dev` not `yarn dev`
- Still stuck? Delete `node_modules` and re-run:
  ```bash
  rm -rf node_modules
  npm install
  ```

---

## 📬 Contact Me

- 📧 **Email**: [xavieriteavanish@gmail.com](mailto:xavieriteavanish@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/avanish-kumar-131419257](https://www.linkedin.com/in/avanish-kumar-131419257/)
- 💻 **GitHub**: [github.com/avanish-23](https://github.com/avanish-23)

---

### 🎉 Ready to make it yours?
Start editing files in `src/components/` and launch your portfolio today!