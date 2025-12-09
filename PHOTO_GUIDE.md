# 📸 Quick Guide: Adding Your Photos

## Method 1: Using Online Images (Easiest)

1. Upload your photos to a service like:
   - Google Photos (get shareable link)
   - Imgur (https://imgur.com)
   - Any image hosting service

2. Open `src/components/Gallery.jsx`

3. Replace the URLs in the `photos` array:

```javascript
const photos = [
  {
    url: 'YOUR_IMAGE_URL_HERE',
    caption: 'Your caption here',
  },
  // Add more photos...
];
```

## Method 2: Using Local Files

1. Place your photos in the `public` folder:
   ```
   public/
   ├── photo1.jpg
   ├── photo2.jpg
   └── photo3.jpg
   ```

2. Open `src/components/Gallery.jsx`

3. Update the URLs to reference your local files:

```javascript
const photos = [
  {
    url: '/photo1.jpg',
    caption: 'Our first photo together',
  },
  {
    url: '/photo2.jpg',
    caption: 'School days',
  },
  // Add more...
];
```

## Adding More Photos

Just add more objects to the array:

```javascript
const photos = [
  { url: '/photo1.jpg', caption: 'First date' },
  { url: '/photo2.jpg', caption: 'School days' },
  { url: '/photo3.jpg', caption: 'Trip together' },
  { url: '/photo4.jpg', caption: 'Birthday celebration' },
  { url: '/photo5.jpg', caption: 'New Year 2024' },
  // Add as many as you want!
];
```

## Tips

- **Image Size**: For best results, use images that are at least 800x800 pixels
- **Format**: JPG, PNG, or WebP work great
- **Number**: You can add as many photos as you like - the grid will automatically adjust
- **Captions**: Keep them short and sweet (1-5 words work best)

## After Making Changes

The website will automatically reload and show your new photos! 🎉
