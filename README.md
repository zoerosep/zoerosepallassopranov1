# Zoe Rose Pallas — Soprano Website

This is a mobile-first HTML/CSS website with four pages:

- `index.html`
- `about.html`
- `media.html`
- `offstage.html`

The shared stylesheet is located at:

- `css/styles.css`

## Open the project in VS Code

1. Unzip the project folder.
2. Open the entire `zoe-rose-soprano-site` folder in VS Code.
3. Open `index.html`.
4. Use the Live Server extension, or open `index.html` directly in a browser.

## Replace the image placeholders

The current files in `assets/` are SVG placeholders so the site works immediately.

You can either:

- Replace a placeholder while keeping its exact filename, or
- Put your image in `assets/` and change the `src` in the HTML.

Example:

```html
<img src="assets/my-real-headshot.jpg" alt="Zoe Rose Pallas in a professional headshot">
```

Recommended image names:

- `headshot.jpg`
- `about-photo.jpg`
- `gallery-1.jpg`
- `gallery-2.jpg`
- etc.

## Update contact and social links

Search all HTML files for:

- `your-email@example.com`
- `href="#"`

Replace those placeholders with your professional email and social media URLs.

## Photo credits and accessibility

Every real image should have:

- Accurate `alt` text describing what is visible.
- A photographer credit in the `<figcaption>` when needed.

## Add another photo

Copy one complete block from `media.html`:

```html
<figure class="gallery-item">
    <img src="assets/gallery-7.jpg" alt="Describe the performance photograph">
    <figcaption>Production, role, venue, and photographer credit.</figcaption>
</figure>
```

## Fonts and branding

The site uses:

- Montserrat
- Averia Serif Libre
- IBM Plex Serif as a fallback

Brand colors are stored as CSS variables at the top of `styles.css`, making them easy to edit.