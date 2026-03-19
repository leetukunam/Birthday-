# 🎂 Birthday Website

A beautiful, interactive birthday website with animations, confetti, and personalized messages.

## 🚀 Quick Start

### Option 1: Local Server (Recommended)

#### macOS/Linux:
1. Open Terminal
2. Navigate to the Birthday folder:
   ```bash
   cd /Users/sreekrishna/Projects/Birthday
   ```
3. Make the launch script executable:
   ```bash
   chmod +x launch.sh
   ```
4. Run the website:
   ```bash
   ./launch.sh
   ```

The website will automatically open in your browser at `http://localhost:8000`

#### Or run the Python server directly:
```bash
python3 server.py
```

#### Windows:
Open Command Prompt or PowerShell, navigate to the folder, and run:
```bash
python server.py
```

---

### Option 2: GitHub Pages (Online & Shareable)

1. **Create a GitHub account** if you don't have one at https://github.com

2. **Create a new repository:**
   - Go to https://github.com/new
   - Name it: `birthday` (or any name)
   - Click "Create repository"

3. **Upload files:**
   - Click "uploading an existing file"
   - Drag and drop all files (index.html, style.css, script.js)
   - Click "Commit changes"

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be available at: `https://yourusername.github.io/birthday`

5. **Share the link** with anyone!

---

### Option 3: Direct File Access

Simply open the `index.html` file directly in your browser:
- Right-click `index.html` → Open with → Your preferred browser
- Or double-click the file

---

## 🎨 Customization

### Edit the message:
Open `index.html` and find this section:
```html
<p>
    Another year older, but no less amazing. Today is all about celebrating YOU
    and everything that makes you wonderful. You deserve all the happiness in the world.
</p>
```

Replace with your custom message!

### Edit gallery items:
Look for the gallery section and change the labels:
```html
<p>Your smile</p>
<p>Your kindness</p>
<p>Your laugh</p>
<p>Your presence</p>
```

### Change colors:
Edit `style.css` and look for the gradient colors in the `body` selector or individual elements.

### Add photos:
Replace the emoji placeholders (📸, 💫, ✨, 🌟) with actual images:
```html
<div class="gallery-placeholder">
    <img src="your-photo.jpg" alt="Your smile">
</div>
```

Then update the CSS for the image styling.

---

## 📱 Features

✨ Animated gradient background
🎈 Floating balloons and hearts
💥 Confetti animation on button click
🎯 Interactive gallery with hover effects
📱 Fully responsive (works on mobile, tablet, desktop)
🚀 No dependencies needed - pure HTML, CSS, and JavaScript

---

## 💡 Tips

- Keep the server running to access the website anytime
- Use GitHub Pages to share with others
- Customize the colors and messages to match her personality
- Add real photos to the gallery for more impact

Enjoy! 🎉💕
