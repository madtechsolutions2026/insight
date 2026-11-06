# insight

In-Sight Photography & Films portfolio website, featuring a responsive cinematic layout, a filterable photo archive, video playback, an enquiry message builder, and React components animated with Motion (Framer Motion).

## Local preview

```sh
node preview.cjs
```

Open http://127.0.0.1:4178 in your browser. The built website is in `dist/` and can be served by any static web server.

## Develop the animations

Requires Node.js and npm.

```sh
npm ci
npm run build:motion
npm run check
```

Edit `src/motion.jsx` for the React interactions, then rebuild `dist/motion.js`. Edit `dist/cinematic.css`, `dist/index.html`, and `dist/app.js` for styling, page content, and the photo/video/enquiry interactions.

## Vercel deployment

Import the repository with the repository root as the Root Directory. `vercel.json` runs `npm ci`, builds and checks the animation bundle with `npm run build`, and serves the website from `dist/`.

## Content and enquiries

The site uses the supplied In-Sight photographs and concert film in `dist/assets/`. Enquiries prepare a message for the visitor to copy and send on Instagram; the website does not submit or store enquiries on a server.
