# Flame – Fine Dining Restaurant Website

A modern, elegant fine dining restaurant website built with HTML5, CSS3, and vanilla JavaScript. Features a dark/light theme toggle, responsive design, smooth animations, and interactive menu system.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with smooth adaptation to all screen sizes
- **Dark/Light Theme Toggle**: User preference-based theme switching with persistent state
- **Animated Preloader**: Professional loading screen with branding and progress indicator
- **Interactive Navigation**: Hamburger menu for mobile and full navigation for desktop
- **Menu System**: 
  - Tab-based menu organization (Starters, Mains, Desserts)
  - Animated menu cards with hover effects
  - Smooth transitions between menu categories
- **Location Integration**: Get user location functionality with location card display
- **Reviews Section**: Customer testimonials with smooth animations
- **Scroll Animations**: Intersection Observer API for element animations on scroll
- **Smooth Scrolling**: Click-to-scroll navigation between sections
- **Modern Typography**: Premium fonts (Cormorant Garamond for display, Jost for body)
- **Accessibility**: ARIA labels and semantic HTML structure

## 📁 Project Structure

```
Task-1_TC_INT_20260430-139/
├── index.html          # Main HTML structure and content
├── style.css           # Complete styling and animations
├── index.js            # JavaScript functionality and interactivity
└── README.md           # This file
```

## 🎨 Design Highlights

### Color Scheme
- **Dark Mode** (Default):
  - Primary Background: `#0a0a0a`
  - Accent Color: `#c9a84c` (Gold)
  - Text: `#f0ece3` (Cream)

- **Light Mode**:
  - Primary Background: `#f7f4ef`
  - Accent Color: Gold (maintained)
  - Text: `#1a1610` (Dark)

### Typography
- **Display Font**: Cormorant Garamond (elegant serif)
- **Body Font**: Jost (modern sans-serif)
- **Icons**: Font Awesome 6.5.1

## ⚙️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts
- **APIs**: Geolocation API

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### Installation

1. Clone or download the project files
2. Ensure all three files (`index.html`, `style.css`, `index.js`) are in the same directory
3. Open `index.html` in your web browser

```bash
# Simply open the file
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## 📋 File Descriptions

### index.html
- Contains the complete HTML structure
- Defines all sections: header, hero, menu, reservation, location, reviews, footer
- Includes semantic HTML5 elements
- Links to external resources (Google Fonts, Font Awesome)

### style.css
- **31,217 lines** of comprehensive styling
- Custom CSS properties (variables) for theming
- Responsive breakpoints for mobile, tablet, and desktop
- Smooth animations and transitions
- Dark/Light mode styling
- Preloader animations
- Menu card animations
- Scroll-triggered animations

### index.js
- **DOM Manipulation**: Interactive elements and event handlers
- **Theme Toggle**: Dark/Light mode switching
- **Navigation**: Hamburger menu functionality
- **Animations**: 
  - Preloader with 2-second delay
  - Intersection Observer for scroll animations
  - Smooth scrolling between sections
- **Location**: Geolocation API integration
- **Menu**: Tab-based section switching (Starters, Mains, Desserts)
- **Scroll Effects**: Icon click to scroll to next section

## 🎯 Key Functions

### JavaScript Features

| Feature | Function | Purpose |
|---------|----------|---------|
| Theme Toggle | `themeBtn` click handler | Switch between dark/light modes |
| Hamburger Menu | `hamburger` click handler | Mobile navigation |
| Preloader | `window.load` event | 2-second intro animation |
| Animations | `IntersectionObserver` | Scroll-triggered element animations |
| Location | `getUserLocation()` | Get and display user coordinates |
| Menu Tabs | `tabButtons` click handlers | Switch menu sections |
| Smooth Scroll | `scrollIcon` click handler | Navigate to next section |

## 📱 Responsive Design

The website adapts seamlessly across:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
  --bg-primary: #0a0a0a;
  --accent: #c9a84c;
  /* ... other colors */
}
```

### Modifying Theme
Edit light mode variables:
```css
[data-theme="light"] {
  --bg-primary: #f7f4ef;
  --text-primary: #1a1610;
  /* ... */
}
```

### Adding Menu Items
Update the menu sections in `index.html` and add styling in `style.css`

## ✨ Animation Details

- **Preloader**: 2-second delay before fading
- **Menu Cards**: Staggered entrance animations
- **Sections**: Fade-in and slide-up on scroll (30px threshold)
- **Buttons**: Smooth hover transitions (0.3s)
- **Theme Toggle**: Instant color transition

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- No external dependencies required
- No build process needed
- Uses native APIs (Geolocation, Intersection Observer)
- Fully self-contained project

## 🎓 Learning Resources

- Intersection Observer API: Used for scroll animations
- CSS Custom Properties: For dynamic theming
- Font Awesome Icons: For elegant iconography
- Google Fonts: For typography

## 📧 Support

For issues or questions, ensure:
1. All files are in the same directory
2. Browser is up-to-date
3. JavaScript is enabled
4. No browser extensions interfering

---

**Project**: Flame – Fine Dining Restaurant Website  
**Created**: 2026  
**Type**: Frontend Web Application  
**License**: Open Source
# flame-restaurant
