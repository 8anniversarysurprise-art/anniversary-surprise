# 🚀 Deployment Guide

Your anniversary website is ready to be shared! Here are several ways to deploy it online.

## ✅ Build Status
The project builds successfully! The production files are in the `dist` folder.

## Option 1: Vercel (Recommended - Easiest)

Vercel offers free hosting and is perfect for React apps.

### Steps:
1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   cd /home/dld/Documents/december/anniversary-surprise
   vercel
   ```
4. Follow the prompts (just press Enter for defaults)
5. You'll get a live URL like: `https://anniversary-surprise-xyz.vercel.app`

### To update later:
```bash
vercel --prod
```

## Option 2: Netlify Drop

Super simple - no command line needed!

### Steps:
1. Build your project (already done!):
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Get instant URL like: `https://your-site-name.netlify.app`

## Option 3: GitHub Pages

Free hosting via GitHub.

### Steps:
1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Anniversary website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```
4. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```
6. Enable GitHub Pages in repo settings
7. URL: `https://YOUR_USERNAME.github.io/anniversary-surprise`

## Option 4: Share Locally

If you just want to show it on your computer:

### Keep dev server running:
```bash
npm run dev
```
Then open: `http://localhost:5173/`

### Or preview the production build:
```bash
npm run build
npm run preview
```

## 🎁 Sharing Tips

### Make it Special:
1. **Custom Domain**: Buy a domain like `abishekandlipika.com` (optional)
2. **QR Code**: Generate a QR code to the URL and print it on a card
3. **Timing**: Send the link at midnight on December 12th
4. **Message**: Include a sweet message like:
   ```
   "I made something special for you. 
   Open this link: [YOUR_URL]
   Happy 7th Anniversary, my love! ❤️"
   ```

## 📱 Testing Before Sharing

1. **Desktop**: Open the URL on your computer
2. **Mobile**: Open on your phone to check responsiveness
3. **Different Browsers**: Test in Chrome, Firefox, Safari
4. **Photos**: Make sure to update the gallery with your real photos first!

## 🔒 Privacy

All deployment options above are public by default. If you want it private:

### Vercel:
- Upgrade to Pro plan for password protection

### Netlify:
- Use password protection (available on paid plans)

### Alternative:
- Share locally and screen share/record it

## ⚡ Quick Deploy (Vercel - Fastest)

```bash
# One command deployment
npx vercel --prod
```

That's it! You'll get a URL in seconds.

## 💝 Final Checklist

Before deploying:
- [ ] Updated gallery photos with your real images
- [ ] Checked all text is correct
- [ ] Tested on mobile
- [ ] Build succeeds (`npm run build`)
- [ ] Ready to surprise Lipika! 🎉

---

**Need help?** The dev server is currently running at `http://localhost:5173/`
