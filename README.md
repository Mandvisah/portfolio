# Mandvi's Portfolio

A modern, responsive personal portfolio website designed to showcase my skills as a Full Stack Developer. Built with efficiency and aesthetics in mind, utilizing React and Vite.

## 🌟 Features

- **Modern UI/UX**: Implements Glassmorphism design principles (frosted glass effects).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Dynamic Animations**: 
  - Smooth "Reveal on Scroll" entry animations for sections.
  - Organic "Blob" breathing animation for the profile image.
  - Interactive hover states and glows.
- **Theming**: Custom CSS variables for easy color management (currently using an Indigo/Violet palette).
- **Performance**: High-speed loading enabled by Vite.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Pure CSS3 (CSS Variables, Flexbox, Grid, Keyframes)
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

To run this project locally on your machine:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── assets/         # Images and static files
├── components/     # Reusable UI components (Hero, Navbar, Projects, etc.)
├── data/           # Data files (projects.js) for easy content management
├── App.css         # Global styles, variables, and animations
├── App.jsx         # Main application layout
└── main.jsx        # Entry point
```

## 🌍 Deployment

### Vercel / Netlify (Recommended)
1. Push your code to a GitHub repository.
2. Connect your repository to Vercel or Netlify.
3. The build command `npm run build` and output directory `dist` should be detected automatically.
4. Deploy!

### Manual Deployment
1. Run `npm run build`.
2. Upload the contents of the `dist` folder to any static hosting provider.

## 📄 License

This project is open source and available for personal use.
