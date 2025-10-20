#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Script"
echo "==============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git"
    exit 1
fi

# Check if package.json has correct homepage
if ! grep -q "YOUR-USERNAME" package.json; then
    echo "✅ Homepage URL is configured in package.json"
else
    echo "⚠️  Please update the homepage URL in package.json:"
    echo "   Replace YOUR-USERNAME and YOUR-REPOSITORY-NAME with your actual values"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building production version..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "Your portfolio should be live at your GitHub Pages URL in a few minutes."
else
    echo "❌ Deployment failed!"
    echo "Please check your GitHub repository settings and try again."
    exit 1
fi

echo ""
echo "🔗 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings > Pages"
echo "3. Ensure source is set to 'gh-pages' branch"
echo "4. Your portfolio will be available at your GitHub Pages URL"
echo ""
echo "✨ Happy coding!"
