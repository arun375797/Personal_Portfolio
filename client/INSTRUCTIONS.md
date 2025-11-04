# Portfolio Setup Instructions

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install the main dependencies and the client dependencies.

### 2. Add Your Profile Image

**IMPORTANT**: Replace the placeholder file with your actual profile image:

1. Navigate to `public/`
2. Add your profile image as `profile.jpg`
3. Recommended specifications:
   - Size: 800x800px or larger
   - Format: JPG, PNG, or WebP
   - Good quality professional photo

### 3. Start Development Server

```bash
npm run dev
```

Your portfolio will be running at `http://localhost:5173`

## Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update your name, title, and introduction
   - Modify social media links
   - Change call-to-action buttons

2. **About Section** (`src/components/About.jsx`)
   - Write your personal story
   - Update quick stats
   - Modify highlights/core values

3. **Skills Section** (`src/components/Skills.jsx`)
   - Add/remove skill categories
   - Update skill levels (percentage)
   - Modify technology stack badges

4. **Experience Section** (`src/components/Experience.jsx`)
   - Add your work experience
   - Update education information
   - Modify dates and descriptions

5. **Projects Section** (`src/components/Projects.jsx`)
   - Add your projects
   - Update project descriptions, links, and technologies
   - Add project images (optional)

6. **Contact Section** (`src/components/Contact.jsx`)
   - Update contact information
   - Modify social media links

7. **Navbar & Footer** 
   - Update links and information in both components

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom primary colors
    500: '#0ea5e9', // Main primary color
  },
  // Add more custom colors
}
```

### Add Project Images (Optional)

1. Create folder: `public/projects/`
2. Add your project screenshots
3. Update image paths in `Projects.jsx`:
   ```javascript
   image: '/projects/your-project.jpg'
   ```

### Enable Contact Form with EmailJS (Optional)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials
5. Update `src/components/Contact.jsx`:
   ```javascript
   // Replace the simulation code with:
   await emailjs.sendForm(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     e.target,
     'YOUR_PUBLIC_KEY'
   );
   ```

## Building for Production

```bash
npm run build
```

The production-ready files will be in `dist/`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click Deploy

### Deploy to GitHub Pages

1. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io",
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Profile Image Not Showing

- Make sure the image is in `public/profile.jpg`
- Check the file extension matches in `Hero.jsx`
- Try clearing browser cache

### Animations Not Working

- Ensure all dependencies are installed
- Check console for errors
- Verify Framer Motion is properly imported

### Contact Form Not Working

- The form currently simulates submission
- To enable real emails, set up EmailJS (see instructions above)

### Build Errors

- Delete `node_modules` and `client/node_modules`
- Delete `package-lock.json` and `client/package-lock.json`
- Run `npm install` again

## Need Help?

If you encounter any issues:

1. Check the README.md for detailed documentation
2. Review the code comments in each component
3. Open an issue on GitHub
4. Contact: arun37579@gmail.com

---

Good luck with your portfolio! 🚀

