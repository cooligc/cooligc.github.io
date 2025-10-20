# Sitakanta Chaudhury - Personal Portfolio

A sophisticated React-based personal portfolio website showcasing professional journey, skills, and creative work. Features a unique black & white theme with colorful hover effects and an interactive career roadmap.

## ✨ Key Features

- **Interactive Hero Terminal**: Matrix-style terminal with auto-typing biography
- **Professional About Section**: Comprehensive profile with photo and expertise showcase
- **Visual Career Roadmap**: Interactive timeline showing professional progression from B.Tech to Staff Engineer
- **Skills Evolution**: Animated timeline demonstrating skill development over time
- **Social Media Integration**: Links to GitHub, LinkedIn, X (Twitter), Instagram, Facebook, Stack Overflow
- **Hobbies Showcase**: Personal interests including photography, travel, and biking
- **Black & White Theme**: Unique grayscale design with vibrant hover effects
- **Loading Screen**: Professional loader with animations matching the site theme
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with smooth animations

## Installation

1. Navigate to the project directory:
```bash
cd profile-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Customization

### Update Your Information

Edit `src/App.js` to customize:

1. **Personal Details**: 
   - Change "Your Name" in the hero section
   - Update the subtitle (Developer | Designer | Creator)

2. **About Me**:
   - Replace the profile photo placeholder
   - Update the description text
   - Modify the skills tags

3. **Career Timeline**:
   - Update job titles, dates, and descriptions
   - Add or remove timeline items as needed

4. **Social Links**:
   - Replace placeholder URLs with your actual social media profiles
   - Add or remove social cards as needed

5. **Hobbies**:
   - Customize hobby cards with your actual interests
   - Change icons from react-icons library

### Styling

All styles are in `src/App.css`. You can customize:
- Color gradients
- Fonts (currently using Poppins and Playfair Display)
- Spacing and layout
- Animation effects

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deploy to GitHub Pages

### Step 1: Prepare Your Repository

1. **Create a new repository on GitHub** (if not already created)
2. **Clone the repository** to your local machine
3. **Copy your portfolio files** to the repository folder

### Step 2: Update Homepage URL

Update the `homepage` field in `package.json`:

```json
{
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME"
}
```

Replace:
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPOSITORY-NAME` with your repository name

### Step 3: Deploy to GitHub Pages

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

This command will:
- Create a production build
- Push the build to `gh-pages` branch
- Set up GitHub Pages automatically

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/ (root)** folder
6. Click **Save**

Your portfolio will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME`

### 🔄 Update Your Portfolio

To update your deployed portfolio:

1. Make changes to your code
2. Run the deploy command:
```bash
npm run deploy
```

The changes will be live in a few minutes!

### Alternative: GitHub Actions (Automatic Deployment)

For automatic deployment on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 🛠️ Technologies Used

- **React 18**: Modern React with Hooks and functional components
- **React Icons (FontAwesome 6)**: Professional icon library
- **CSS3**: Advanced styling with:
  - CSS Grid & Flexbox layouts
  - CSS Gradients & Backdrop filters
  - CSS Animations & Keyframes
  - CSS Variables & Custom properties
  - Responsive media queries
- **GitHub Pages**: Free hosting solution
- **gh-pages**: Automated deployment tool

## 📁 Project Structure

```
profile-app/
├── public/
│   ├── index.html
│   └── profile-photo.jpg
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # All styling and animations
│   └── index.js        # React DOM entry point
├── build/              # Production build (generated)
├── package.json        # Dependencies and scripts
└── README.md          # Documentation
```

## 🎨 Customization Guide

The portfolio is highly customizable. Key areas to modify:

### Personal Information
- **Name & Title**: Update hero section in `App.js`
- **Profile Photo**: Replace `public/profile-photo.jpg`
- **About Content**: Edit about section text and skills
- **Social Links**: Update URLs in contact section

### Career Timeline
- **Company Details**: Modify career phases in roadmap
- **Timeline Colors**: Adjust gradient colors in CSS
- **Milestones**: Add/remove career achievements

### Visual Theme
- **Color Scheme**: Update CSS gradient variables
- **Hover Effects**: Customize grayscale/color transitions
- **Animations**: Modify keyframe animations
- **Typography**: Change font families and weights

## 📧 Contact & Support

- **Portfolio**: [Live Demo](https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME)
- **LinkedIn**: [Sitakanta Chaudhury](https://www.linkedin.com/in/cooligc)
- **GitHub**: [@cooligc](https://github.com/cooligc)
- **Email**: Chaudhury.Sitakant@gmail.com

## 📝 License

This project is open source and available for personal and educational use.

## 🌟 Features Showcase

### Interactive Elements
- **Terminal Animation**: Auto-typing biography in matrix style
- **Career Roadmap**: Visual timeline with phase icons and milestones
- **Hover Effects**: Black & white to color transitions
- **Loading Screen**: Professional loader matching site theme
- **Smooth Scrolling**: Navigation between sections

### Performance
- **Optimized Build**: Compressed assets and code splitting
- **Mobile Responsive**: Perfect display on all devices
- **Fast Loading**: Efficient animations and lazy loading
- **SEO Friendly**: Proper meta tags and semantic HTML

---

**Created with ❤️ by Sitakanta Chaudhury**

*A Staff Engineer's journey through code, creativity, and continuous learning.*

