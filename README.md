## Praxis Projekt Seminar - Slideshow

![Slides Explosion View](./public/docs/thumbnail.png)

### Getting Started

```bash
# Install Dependencies
npm i
```

```bash
# Run Development Server
npm run dev
```

---

### Keys

- `F`: Toggle Fullscreen
- `E`: Toggle Explosion View
- `ArrowRight`: Next Chapter
- `ArrowLeft`: Previous Chapter
- `ArrowDown`: Next Section
- `ArrowUp`: Previous Section

### Features

- Gamepad Api Support (Tested with JoyCon Controller)

### Src Folder Structure

- `assets`
- `components`: Contains the components of the application
  - `render`: ThreeJS componets
  - `slideshow`: Slideshow framework components
  - `styled`: Custom styled components
- `hooks`: useful hooks
- `pages`: Contains MDX files for slides rendering
  - `chapter-000-intro`
    - `slide-000.mdx`
    - `...`
  - `chapter-010-problem`
    - `slide-000.mdx`
    - `slide-010.mdx`
  - `...`
- `store`: Global state and colors
- `styles`: Basic styles
