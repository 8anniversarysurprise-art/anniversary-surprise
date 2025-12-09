# 🎁 Customizing Surprise Elements

Your anniversary website now has **3 interactive surprise features** that Lipika can discover! Here's how to customize them:

---

## 1. 💌 Hidden Love Letters

**Location:** `src/components/SurpriseLetter.jsx`

### How to Customize:

Find the `letters` array (around line 11) and edit the messages:

```javascript
const letters = [
  {
    id: 1,
    icon: Heart,
    color: 'from-pink-400 to-rose-400',
    position: 'top-20 left-10',
    title: 'First Memory',  // ← Change this
    message: 'Your custom message here...',  // ← Change this
  },
  // Add more letters...
];
```

### Tips:
- **Add more letters**: Copy a letter object and change the `id`, `position`, `title`, and `message`
- **Change positions**: Use Tailwind classes like `top-20 left-10`, `bottom-40 right-20`, etc.
- **Change icons**: Import from `lucide-react` (Heart, Sparkles, Mail, Star, etc.)
- **Change colors**: Use any gradient from pink/rose palette

### Example - Adding a 5th Letter:
```javascript
{
  id: 5,
  icon: Star,
  color: 'from-pink-600 to-rose-700',
  position: 'top-1/2 left-1/2',
  title: 'Our Future',
  message: 'I can\'t wait to spend the rest of my life with you. Every day, every moment, forever together.',
}
```

---

## 2. 🔒 Secret Photos

**Location:** `src/components/SecretPhotos.jsx`

### How to Customize:

Find the `secretPhotos` array (around line 9):

```javascript
const secretPhotos = [
  {
    id: 1,
    locked: 'URL_TO_BLURRED_IMAGE',  // ← Placeholder/blurred image
    unlocked: 'URL_TO_REAL_IMAGE',   // ← Your actual photo
    hint: 'Click to unlock',
    message: 'This is where our story began... 💕',  // ← Short caption
    secret: 'Remember this moment? It feels like yesterday!',  // ← Longer message
  },
  // Add more photos...
];
```

### Tips:
- **Use your own photos**: Replace URLs with your images
- **Keep locked image generic**: Use the same blurred image for all, or use different ones
- **Write personal messages**: Make each reveal special with a unique memory
- **Add more photos**: Copy an object and increment the `id`

### Example - Your Own Photo:
```javascript
{
  id: 5,
  locked: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=400&fit=crop',
  unlocked: '/my-photos/our-first-date.jpg',  // Your photo in public folder
  hint: 'Our first date!',
  message: 'First Date - March 2019 💕',
  secret: 'I was so nervous, but you made everything perfect. This is when I knew you were the one.',
}
```

---

## 3. 🎯 Love Quiz

**Location:** `src/components/LoveQuiz.jsx`

### How to Customize:

Find the `questions` array (around line 13):

```javascript
const questions = [
  {
    question: "Where did we first meet?",  // ← Your question
    options: ["School", "Park", "Mall", "Online"],  // ← 4 options
    correct: 0,  // ← Index of correct answer (0 = first option)
    funFact: "In 10th grade! That's where our beautiful story began. 📚"  // ← Fun fact
  },
  // Add more questions...
];
```

### Tips:
- **Make it personal**: Use questions only you two would know
- **Mix difficulty**: Some easy, some challenging
- **Add more questions**: Copy a question object and modify it
- **Correct answer**: Remember it's 0-indexed (0 = first option, 1 = second, etc.)
- **Fun facts**: Add sweet memories or inside jokes

### Example - New Question:
```javascript
{
  question: "What's our favorite place to go together?",
  options: ["Beach", "Mountains", "City", "Home"],
  correct: 3,  // "Home" is the 4th option (index 3)
  funFact: "Anywhere is perfect as long as we're together! But home is where our hearts are. 🏡❤️"
}
```

---

## 🎨 Customizing Messages

### Love Letters - Message Ideas:
- First impression
- Favorite memory
- What you love most about her
- Future dreams together
- Inside jokes
- Special moments
- Promises for the future

### Secret Photos - Caption Ideas:
- Date and location
- What you were feeling
- Why this moment matters
- A funny story from that day
- What you remember most

### Quiz - Question Ideas:
- First date details
- Favorite shared activities
- Important dates
- Inside jokes
- Favorite memories
- Future plans
- Personal preferences

---

## 🎊 Confetti Colors

To change confetti colors, find the `confetti()` calls and modify the `colors` array:

```javascript
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
  colors: ['#B76E79', '#FFF0F3', '#8B4C5C', '#FFB6C1'],  // ← Your colors
});
```

---

## 💡 Pro Tips

1. **Test Everything**: Click through all surprises to make sure they work
2. **Personal Touch**: Use real stories and memories
3. **Keep It Secret**: Don't tell Lipika about the surprises!
4. **Mobile Friendly**: All surprises work great on phones too
5. **Take Screenshots**: Capture her reaction when she discovers each surprise!

---

## 🚀 After Customizing

The website will **auto-reload** when you save changes. Just refresh the browser to see your updates!

**Happy Customizing!** 💝
