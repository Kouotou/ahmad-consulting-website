# Ahmad Consulting Website

A clean, modern, and professional React web application built for Ahmad Consulting. The platform empowers early to mid-career professionals to communicate with authority, build influence, and get noticed at work through signature programs, workshops, and 1:1 strategic coaching.

## ✨ Features
- **Modern Tech Stack**: Built lightning-fast with Vite + React.
- **Client-Side Routing**: Handled seamlessly via React Router `react-router-dom`.
- **Responsive Layout**: Completely mobile-friendly. Built with a bespoke CSS variables theme utilizing a highly professional Dark Blue, Grey, and White color palette.
- **Conversion Focused**: Multiple clean CTA components engineered to convert visitors into booked "20-Minute Clarity Calls." 
- **Modular Design**: Reusable components (`Button`, `Section`, `Header`, `Footer`) to ensure future scalability.
- **SEO Optimized**: Dynamic metadata and title adjustments implemented on route changes. 

## 📂 Project Navigation 
- `src/components/layout/`: Holds the global `Header`, `Footer`, and wrapping `Layout`.
- `src/components/ui/`: Contains the reusable `Button` and `Section` elements.
- `src/pages/`: Contains all primary site views (`Home.jsx`, `Services.jsx`, `About.jsx`, `Testimonials.jsx`, `Contact.jsx`, `Booking.jsx`).
- `src/index.css`: Global theme variables, reset formatting, and atomic utility classes.

## 🚀 How to Run Locally

If you want to view or test the website on your own machine, you will need to have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository** *(if you haven't already)*:
   ```bash
   git clone https://github.com/your-username/ahmad-consulting-website.git
   cd ahmad-consulting-website
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the site in your browser**:
   Open `http://localhost:5173` (or the URL provided in your terminal) to see the live site!

## 📦 Production Build
To compile the site down for production deployment (e.g., on Vercel, Netlify, or GitHub Pages):
```bash
npm run build
```
This will compile the optimized code into a tiny, deployable `dist/` directory.

---
*Developed by Ahmad Consulting.*
