# GitHub Pages Deployment Guide

This guide will walk you through deploying your Multi-View Video Streaming App to GitHub Pages.

## Prerequisites

- A GitHub account ([Sign up here](https://github.com/join))
- Git installed on your computer
- This project files

## Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository settings:
   - **Name**: `MultiviewTestApp` (or any name you prefer)
   - **Description**: "Client-side multi-view video streaming application"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Do NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### Step 2: Initialize Git and Push Your Code

Open a terminal in your project directory and run:

```bash
# Navigate to your project directory
cd /home/user/Documents/Tickets/webkit/TestApp/MultiviewTestApp

# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Multi-view video streaming app"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/MultiviewTestApp.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** section (in the left sidebar under "Code and automation")
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

### Step 4: Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-3 minutes
- You'll see a green checkmark when it's ready

### Step 5: Access Your Live Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/MultiviewTestApp/index-SHAKA.html
```

**Example:**
If your GitHub username is `johndoe`, your URL will be:
```
https://johndoe.github.io/MultiviewTestApp/index-SHAKA.html
```

## Post-Deployment

### Update the README

After deployment, update the README.md file with your actual GitHub Pages URL:

```bash
# Edit README.md and replace the demo URL
# Then commit and push:
git add README.md
git commit -m "Update live demo URL"
git push
```

### Making Updates

Whenever you want to update your deployed app:

```bash
# Make your changes to the files
# Then:
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically redeploy within a few minutes.

## Alternative Page as Default

If you want `index-SHAKA.html` to be your default landing page:

**Option 1:** Rename it to `index.html`
```bash
mv index-SHAKA.html index.html
git add .
git commit -m "Set SHAKA version as default page"
git push
```

**Option 2:** Create a redirect
Create an `index.html` file that redirects:
```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=index-SHAKA.html">
</head>
<body>
    <p>Redirecting to Multi-View App...</p>
</body>
</html>
```

## Custom Domain (Optional)

To use your own domain:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Add a `CNAME` file to your repository with your domain
3. Configure DNS settings at your registrar
4. Add custom domain in GitHub Pages settings

See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details.

## Troubleshooting

### Site not loading after deployment
- Wait 5-10 minutes for DNS propagation
- Check if Pages is enabled in Settings
- Ensure repository is public

### 404 Error
- Verify the file path in the URL
- Check that files are in the root directory
- Ensure branch is set to `main` in Pages settings

### Videos not playing
- Check browser console for errors
- Ensure CDN links (Shaka Player) are accessible
- Test in different browsers
- Some encrypted streams may require HTTPS (GitHub Pages provides this)

## Quick Commands Reference

```bash
# Clone your repo (on another machine)
git clone https://github.com/YOUR_USERNAME/MultiviewTestApp.git

# Check status
git status

# Pull latest changes
git pull

# Push changes
git add .
git commit -m "Your message"
git push

# View remote URL
git remote -v
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
- Check repository Issues tab for known problems

---

**Happy Streaming! 🎥**
