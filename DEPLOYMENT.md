# GitHub Pages Deployment Guide

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create an account if you don't have one)
2. Click the **"+"** icon in the top right corner and select **"New repository"**
3. Name your repository (suggestions: `portfolio`, `hambira-portfolio`, or `my-portfolio`)
4. Make sure it's set to **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select branch: **"main"**
6. Select folder: **"/ (root)"**
7. Click **"Save"**

## Step 4: Access Your Website

Your website is available at:
- `https://htudu.github.io/hambira_tudu/`
- Repository: [https://github.com/htudu/hambira_tudu](https://github.com/htudu/hambira_tudu)

**Note:** It may take a few minutes (1-5 minutes) for the site to go live after enabling GitHub Pages.

## Step 5: Custom Domain (Optional)

If you have a custom domain, you can add it in the GitHub Pages settings under "Custom domain".

## Updating Your Website

To update your website:

```bash
git add .
git commit -m "Your update message"
git push
```

Changes will be live within a few minutes automatically!

---

## Alternative: Quick Deploy with GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create YOUR_REPO_NAME --public --source=. --remote=origin --push
```

Then follow Step 3 above to enable GitHub Pages.
