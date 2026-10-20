# Shepherd.js Tour Demo

A simple, interactive web application featuring an onboarding tour built with [Shepherd.js](https://shepherdjs.dev/). 

## 🚀 Live Demo & Repository
- **Live Demo**: [Shepherd Test App](https://sheperdtest.netlify.app/)
- **GitHub Repository**: [FreeDev-Group/shepherd_test](https://github.com/FreeDev-Group/shepherd_test.git)

---

## ✨ Features
* **Interactive Onboarding**: Guided tour explaining core layout features.
* **Auto-Start Support**: Automatically launches the tour on initial page load (uses `localStorage` to avoid repeating for returning users).
* **Manual Trigger**: Users can restart the tour anytime via the sidebar button.
* **Responsive Design**: Modern dashboard layout featuring a sidebar menu, 3 interactive content sections, and a footer.

---

## 🛠️ Project Structure

```text
shepherd-demo/
├── index.html   # Main HTML layout
├── styles.css   # Custom CSS styles and Shepherd overrides
└── script.js    # Shepherd.js initialization & tour configuration
```

---

## 📦 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FreeDev-Group/shepherd_test.git
   cd shepherd_test
   ```

2. **Open the application:**
   Simply double-click `index.html` or open it with a local server like Live Server in VS Code.

---

## 🚀 Deployment

This static site is configured for automatic deployment on **Netlify** directly from the `main` branch.