# 🌍 World Travel Journal (React)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, responsive Travel Journal built with React. This project displays a beautiful collection of travel destinations, featuring real-time data mapping, custom components, and a clean UI.

## 🚀 Live Demo
**Check out the live project here:** https://zubair-travel-journal.onrender.com/

---

## 🛠️ Features
- **Dynamic Data Rendering:** Uses JavaScript `.map()` to render 10+ travel destinations from a centralized data file.
- **Reusable Components:** Built using functional React components for modularity.
- **Responsive Design:** Optimized for both Desktop and Mobile views.
- **Direct Map Integration:** Direct links to Google Maps for every location.

---

## 📈 The Development Journey (The Process)

Here is a breakdown of how I built this project from scratch:

### 1. Project Setup & Architecture
I initialized the project using **Vite** for a blazing-fast development experience. I structured the folders into `components`, `data`, and `assets` to keep the code organized.

### 2. Component Development
- **Header:** Created a fixed navigation bar with a globe icon.
- **Entry:** Developed a reusable card component that accepts `props`. This allows the app to display different data using the same UI structure.

### 3. Data Management
Instead of hardcoding every card, I created a `data.js` file. This mimics a real-world API response, making it easy to scale the app. I successfully increased the journal entries from 3 to 10+ unique locations.

### 4. Logic & Props
I implemented the `.map()` function in `App.jsx` to loop through the data array. I learned how to pass complex objects as props and handle image source paths dynamically.

### 5. Production Build & Optimization
I used `npm run build` to compile the React code into optimized HTML, CSS, and JavaScript files (the `dist` folder).

### 6. Deployment
I connected this repository to **Render**, setting up a CI/CD pipeline. Now, every time I push a change to GitHub, the live site updates automatically!

---

## 💻 How to Run Locally

1. Clone the repo:
   ```bash
   git clone [https://github.com/Muhammad-Zubair796/travel-journal-react.git](https://github.com/Muhammad-Zubair796/travel-journal-react.git)
2. Install dependencies:
   ```bash
   npm install
3. Run development server:
   ```bash
   npm run dev
## Author:
Muhammad Zubair
