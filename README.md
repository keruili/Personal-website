# Nexus Research Group Website

This project is a modern, academic research group website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: High-impact research vision and recruitment status.
- **Research Areas**: Showcase of current projects and technical focus.
- **Publications**: Categorized publication list with search functionality.
- **Team**: Profiles for PI, students, and researchers with social links.
- **Join Us**: Dynamic call-to-action for recruitment.
- **Mobile Responsive**: Fully adaptive design for all screen sizes.

## How to Deploy to GitHub Pages

This project is already configured for easy deployment to GitHub Pages.

### 1. Initialize Git (if not already)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create a GitHub Repository
Go to GitHub and create a new repository (e.g., `nexus-lab`).

### 3. Connect Local to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 4. Deploy
Run the following command:
```bash
npm run deploy
```
This will build the project and push the `dist/` folder to a `gh-pages` branch on your repository.

### 5. Enable GitHub Pages
On GitHub:
1. Go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Branch**, select `gh-pages` and folder `/(root)`.
3. Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` within a few minutes.

## Tech Stack

- **Framework**: React 18+ (Vite)
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Data)
