# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and mobile-friendly layout.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and active link highlighting
- **Contact Form**: Functional contact form with validation
- **Animations**: Scroll-triggered animations and hover effects
- **Mobile Menu**: Hamburger menu for mobile devices
- **Social Links**: Easy integration with social media profiles

## File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 1. Personal Information

Update the following in `index.html`:

- **Name**: Replace "Your Name" with your actual name
- **Title**: Change "Full Stack Developer & Designer" to your profession
- **Description**: Update the hero description to match your background
- **Contact Information**: Update email, phone, and location
- **Social Links**: Add your social media profile URLs

### 2. About Section

- **Bio**: Update the about text to reflect your experience and background
- **Statistics**: Modify the numbers (years of experience, projects, clients)
- **Profile Image**: Replace the icon with your actual photo

### 3. Skills Section

Add or remove skills by editing the skills grid in `index.html`:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

### 4. Projects Section

Update the projects with your actual work:

- **Project Images**: Replace icons with project screenshots
- **Project Descriptions**: Add your project details
- **Technologies Used**: Update the tech stack for each project
- **Links**: Add GitHub and live demo links

### 5. Styling

Customize colors and styling in `styles.css`:

- **Primary Color**: Change `#2563eb` to your preferred color
- **Gradient Colors**: Update the hero section gradient
- **Fonts**: Modify the Google Fonts import

### 6. Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **Backend Integration**: Connect to a backend service (Node.js, PHP, etc.)
2. **Email Service**: Use services like EmailJS, Formspree, or your own backend
3. **Form Validation**: Additional validation can be added in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- **Optimized Images**: Use WebP format for better performance
- **Minified CSS/JS**: Consider minifying files for production
- **Lazy Loading**: Images can be lazy-loaded for better performance
- **CDN**: Font Awesome and Google Fonts are loaded from CDN

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Your site will be deployed automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Customization Tips

### Adding a Blog Section
```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <div class="blog-grid">
            <!-- Add blog posts here -->
        </div>
    </div>
</section>
```

### Adding a Resume Download
```html
<a href="path/to/resume.pdf" class="btn btn-primary" download>
    <i class="fas fa-download"></i> Download Resume
</a>
```

### Adding a Dark Mode Toggle
1. Add a toggle button in the navigation
2. Create dark mode CSS variables
3. Add JavaScript to switch between themes

### Adding a Portfolio Filter
1. Add filter buttons above the projects grid
2. Use JavaScript to show/hide projects based on category
3. Add smooth transitions for filtering

## SEO Optimization

1. **Meta Tags**: Add proper meta descriptions and keywords
2. **Open Graph**: Add social media meta tags
3. **Structured Data**: Add JSON-LD schema markup
4. **Alt Text**: Add descriptive alt text to images
5. **Sitemap**: Create a sitemap.xml file

## Analytics

Add Google Analytics or other tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Maintenance

- **Regular Updates**: Keep your projects and information current
- **Performance Monitoring**: Use tools like Lighthouse to monitor performance
- **Security**: Keep dependencies updated
- **Backup**: Regularly backup your code and content

## Support

If you need help customizing your portfolio:

1. Check the browser console for any JavaScript errors
2. Validate your HTML using the W3C validator
3. Test on different devices and browsers
4. Use browser developer tools to debug issues

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀** 