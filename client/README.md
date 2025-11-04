# Arun Thomas - Portfolio

A modern, professional portfolio website built with React, Framer Motion, and Tailwind CSS. Features beautiful animations, smooth transitions, and a fully responsive design.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with beautiful animations
- **Framer Motion**: Smooth animations and transitions throughout
- **Fully Responsive**: Works perfectly on all devices
- **Optimized Performance**: Fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Contact Form**: Integrated contact form (EmailJS compatible)
- **Project Showcase**: Dynamic project cards with filtering
- **Skills Visualization**: Animated skill bars and technology badges
- **Experience Timeline**: Professional experience display
- **Custom Cursor**: Interactive cursor effect (desktop only)
- **Scroll Animations**: Intersection observer for scroll-triggered animations

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS (for contact form)
- **Deployment Ready**: Can be deployed to Vercel, Netlify, GitHub Pages, etc.

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arun37327/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Personal Information

Update your personal information in the following components:

- `src/components/Hero.jsx` - Name, title, bio
- `src/components/About.jsx` - About section content
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Experience.jsx` - Work experience and education
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer details

### Profile Image

1. Add your profile image to `public/profile.jpg`
2. Recommended size: 800x800px or larger
3. Format: JPG, PNG, or WebP

### Contact Form (Optional)

To enable the contact form with EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Create an email template
4. Update `client/src/components/Contact.jsx` with your EmailJS credentials:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
   ```

## 📱 Customization

### Colors

Customize the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  // Add more custom colors
}
```

### Animations

Modify animation speeds and styles in:
- `src/index.css` - Global animations
- Individual component files - Component-specific animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📄 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg              # Your profile image
│   └── vite.svg                 # Favicon
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Cursor.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── .gitignore
├── LICENSE
└── README.md
```

## 🎨 Features Breakdown

### Navbar
- Smooth scroll navigation
- Mobile responsive menu
- Social media links
- Transparent/solid transition on scroll

### Hero Section
- Animated text entrance
- Profile image with glow effect
- Floating technology badges
- Call-to-action buttons
- Scroll indicator

### About Section
- Personal introduction
- Quick stats cards
- Core values/highlights
- Smooth fade-in animations

### Skills Section
- Categorized skills
- Animated progress bars
- Technology stack badges
- Interactive hover effects

### Experience Section
- Timeline layout (desktop)
- Work experience cards
- Education section
- Responsive design

### Projects Section
- Project filtering
- Project cards with hover effects
- Technology tags
- Live demo and GitHub links
- Featured project: Code Vault

### Contact Section
- Contact form with validation
- Contact information cards
- Social media links
- Availability status

### Additional Features
- Custom animated cursor (desktop)
- Scroll to top button
- Smooth scroll animations
- Loading screen
- Responsive footer

## 🌟 Key Highlights

- **Code Vault**: MERN stack learning platform featured prominently
- **Professional Design**: Modern, clean aesthetic
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Semantic HTML and ARIA labels
- **Mobile First**: Fully responsive design

## 📞 Contact

- **Email**: arun37579@gmail.com
- **Phone**: +91 9497052410
- **GitHub**: [github.com/arun37327](https://github.com/arun37327)
- **LinkedIn**: [linkedin.com/in/arun-s37579](https://www.linkedin.com/in/arun-s37579)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

---

Built with ❤️ by Arun Thomas

