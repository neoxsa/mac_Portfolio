# 🍎 macOS Portfolio

A sleek, interactive macOS-inspired portfolio website with draggable windows, smooth animations, and modern web technologies.

## ✨ Quick Start

```bash
npm install
npm run dev
```

## 🛠 Tech Stack

**Frontend:** React 19 • Vite • Tailwind CSS 4 • GSAP 3
**State:** Zustand • Immer
**Tools:** ESLint • Lucide React • React PDF • React Tooltip

## 📁 Folder Structure

```
src/
├── components/    # Dock, Navbar, Welcome
├── constants/     # Projects, skills, tech stack config
├── hoc/          # WindowWrapper HOC
├── store/        # Zustand window state
├── windows/      # Resume viewer and other windows
```

## 📜 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview build
npm run lint     # Check code quality
```

## 🎨 Customize

- Edit `src/constants/index.js` to update projects, skills, and bio
- Update `/public/files/resume.pdf` with your resume
- Modify Tailwind styles in components as needed

## 📚 Learning & Credits

This project was created following the **[JsMastery macOS Portfolio Tutorial](https://www.youtube.com/watch?v=j9ZD_hlyHOA&list=LL)** - an excellent resource for learning professional web development practices.

The tutorial teaches:
- Component composition and reusable patterns
- State management with Zustand
- Advanced GSAP animations
- Responsive design with Tailwind CSS
- Clean code organization and project structure
- Professional development workflows

**Special thanks to JsMastery** for the clear, educational content and clean coding methodology that guided this project's architecture and best practices.

---

 Happy coding! 🚀
