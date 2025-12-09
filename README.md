# 🎉 Abishek & Lipika - 7 Years Anniversary Website

A beautiful, interactive anniversary website celebrating 7 years of love and togetherness.

## 🌟 Features

### 1. **Hero Section**
- Elegant animated background with rose gold theme
- Live counter showing days, hours, minutes, and seconds together since December 12, 2018
- Smooth animations and gradient effects

### 2. **Our Story Timeline**
- Interactive timeline showcasing your journey:
  - Meeting in school (10th grade, 2018)
  - The friendship phase ("talk talk talk")
  - The confession outside school
  - She said yes the next day!
  - Still together in 2025
- Alternating layout with animated icons

### 3. **Why I Love You**
- 6 beautiful cards highlighting reasons for love:
  - More loved, more happy
  - Motivation to achieve everything
  - Loved when you had nothing
  - Deep connection
  - No ego in fights
  - Beautiful inside and out
- Hover effects and animations on each card

### 4. **Memory Gallery**
- Grid layout with placeholder images (ready for your photos!)
- Hover effects with captions
- Easy to update with your own images

### 5. **🎁 SURPRISE: Hidden Love Letters**
- Interactive floating hearts scattered across the screen
- Click each heart to reveal a secret love letter
- Confetti animation when discovering new letters
- Progress tracker showing how many you've found
- Special completion message when all are discovered

### 6. **🎁 SURPRISE: Secret Photos**
- Locked/blurred mystery photos
- Click to unlock and reveal special memories
- Each photo has a hidden message
- Confetti celebration on unlock
- Modal view with romantic captions

### 7. **🎁 SURPRISE: Love Quiz**
- Interactive quiz about your relationship
- 5 questions testing memory of your journey
- Instant feedback with fun facts
- Confetti on correct answers
- Personalized results based on score
- Replay option to try again

### 8. **Music Player**

- Embedded Spotify player for "Konjam"
- Animated music notes
- Direct link to open in Spotify
- Beautiful visual effects

### 6. **Footer**
- Heartfelt anniversary message
- Date commemoration

## 🎨 Design Features

- **Color Scheme**: Rose Gold, Soft Pink, Deep Rose
- **Typography**: Playfair Display (headings) + Inter (body)
- **Animations**: Framer Motion for smooth, elegant animations
- **Responsive**: Works beautifully on mobile, tablet, and desktop
- **Glass Morphism**: Modern glass effects throughout
- **Custom Scrollbar**: Themed scrollbar matching the design

## 🚀 Getting Started

The development server is already running at: **http://localhost:5173/**

### To stop the server:
Press `Ctrl+C` in the terminal

### To start it again:
```bash
cd /home/dld/Documents/december/anniversary-surprise
npm run dev
```

## 📸 How to Add Your Own Photos

1. Open `src/components/Gallery.jsx`
2. Find the `photos` array (around line 6)
3. Replace the placeholder URLs with your own images:
   - You can use online URLs (like from Imgur, Google Photos, etc.)
   - Or place images in the `public` folder and reference them like `/my-photo.jpg`
4. Update the captions to match your memories

Example:
```javascript
const photos = [
  {
    url: '/public/our-first-date.jpg',
    caption: 'Our first date together',
  },
  // Add more photos...
];
```

## 🎵 Changing the Song

The Spotify embed is already set up with "Konjam". If you want to change it:

1. Open `src/components/MusicPlayer.jsx`
2. Replace the Spotify track ID in the embed URL
3. Update the song title and description

## 🎁 Sharing with Lipika

### Option 1: Share Locally
- Keep the dev server running
- Share your screen or let her access it on your computer

### Option 2: Deploy Online (Free)
You can deploy this to the web for free using:

**Vercel (Recommended):**
```bash
npm install -g vercel
npm run build
vercel
```

**Netlify:**
```bash
npm run build
# Drag and drop the 'dist' folder to netlify.com/drop
```

## 🛠️ Technologies Used

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Spotify Embed** - Music player

## 💝 Customization Tips

### Change Colors:
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  'rose-gold': '#B76E79',  // Change this
  'soft-pink': '#FFF0F3',   // Change this
  'deep-rose': '#8B4C5C',   // Change this
}
```

### Add More Timeline Events:
Edit `src/components/Timeline.jsx` and add items to the `events` array

### Add More Love Notes:
Edit `src/components/LoveNotes.jsx` and add items to the `notes` array

## 📱 Mobile Responsive

The site is fully responsive and looks great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop monitors

## ❤️ Final Notes

This website was created with love to celebrate your special bond. Every animation, every color, every word was chosen to reflect the beauty of your relationship.

**Happy 7th Anniversary, Abishek & Lipika!** 🎊

---

*Made with ❤️ for a special couple*
