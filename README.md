# Ribbons-Screensaver
> **Ribbons** Generator that can be used as a **Relaxing screensaver**
* Tools used 
  * HTML (canvas)
  * CSS
  * JS
> Tried to make it pwa ,but failed

* why I would Like to make it pwa ?
  * to make it an **offline** desktop **Screensaver**

**Live demo:** https://fadyehabamer.github.io/Ribbons-Screensaver/

## Run locally

No build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Press F11 for full screen to use it as a screensaver.

## Controls

- **🌓** toggles the white / black background
- **⏸ / ▶** pauses and resumes the animation. If your OS has *reduce motion* enabled, the ribbons stop after a few seconds and you can resume them with this button.

## Files

- `ribbons.js`: the canvas ribbons generator (`Ribbons` class) and its options (colours, speed, ribbon count, and so on) at the bottom of the file
- `main.js`: background toggle and pause/play button
- `style.css`: layout of the canvas and buttons
