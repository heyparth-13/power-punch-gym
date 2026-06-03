<div align="center">
  <h1>🥊 Power Punch Gym</h1>
  <p><strong>Unleash your true power with the best gym in town.</strong></p>

  <p>
    <a href="#how-it-was-created">How it was Created</a> •
    <a href="#how-it-works">How it Works</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#running-locally">Running Locally</a>
  </p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
  [![Vanilla CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
  [![Vercel Ready](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)

</div>

<br />

## 🏗️ How it was Created

This project was built from the ground up focusing on performance and a premium user experience.

1. **Scaffolding:** The project was initialized using `Vite` with the `React` template for blazing-fast development and optimized production builds.
2. **Component Architecture:** The interface is broken down into modular React components (`Navbar`, `Hero`, `Facilities`, `Activities`, `Membership`, `Footer`) to ensure clean, maintainable code.
3. **Design System:** A custom Vanilla CSS design system was established in `index.css`. This system utilizes CSS variables for consistent colors, spacing, and a global dark theme aesthetic (glassmorphism and neon accents).
4. **Interactive Elements:** Smooth CSS transitions and keyframe animations were implemented to make the UI feel alive (e.g., hover scaling on membership cards, glass panel fade-ins).
5. **Deployment Configuration:** A `vercel.json` file was added to handle SPA routing, ensuring that navigation works flawlessly when deployed.

---

## ⚙️ How it Works

The website is a Single Page Application (SPA) designed to convert visitors into gym members seamlessly.

*   **Navigation:** The sticky glassmorphic navbar allows users to jump instantly to different sections of the page without reloading.
*   **Information Delivery:** Key gym details (Facilities, Activities, and Timings) are presented in highly scannable, visually appealing grids.
*   **WhatsApp Integration:** When a user clicks on the "Join Now", "Start Your Journey", or any "Choose Plan" button, they are dynamically redirected to WhatsApp. The link is pre-populated with a specific message (e.g., *Hi Power Punch! I am interested in the 3 Months membership plan.*), allowing for frictionless communication with the gym owner.
*   **Responsiveness:** Media queries dynamically adjust the layout, font sizes, and navigation menu (converting to a hamburger menu on smaller screens) to provide an optimal experience on mobile phones, tablets, and laptops.

---

## 🛠 Tech Stack

- **Framework**: Vite + React
- **Styling**: Vanilla CSS (Custom Design System, CSS Variables, Glassmorphism)
- **Deployment**: Configured for Vercel (`vercel.json` included)

---

## 🚀 Running Locally

To run this project on your local machine, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/heyparth-13/power-punch-gym.git
   cd power-punch-gym
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

<div align="center">
  <p>Built with ❤️ for Power Punch Gym.</p>
</div>
