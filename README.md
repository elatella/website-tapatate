# TaPatate! Website

The TaPatate! website available at <https://tapatate.ch>

Requires [Node.js](https://nodejs.org/) to be installed.

Powered by [Svelte Kit](https://kit.svelte.dev/) and [Skeleton](https://www.skeleton.dev/).

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> The deployment of the built app happens automatically via [GitHub Action](https://github.com/elatella/website-tapatate/actions) once you committed and pushed your code via Git.

## Adding New content

The content is described in two parts:

- The Svelte file which describes the HTML template that will be used
- The locale files which contain the respective texts in each language

## Adding New Depots

Add new depots to `src/lib/depots.ts` and they will appear everywhere.

## Adding New Photos to the Gallery

Add new gallery images to `src/lib/images/gallery` with the file name format `YYYY-X.jpg` where "YYYY" is the year and "X" is the index of the image. Then add a description of that image to the locale files using the same index.

## Adding New Media to the Medias Page

Add new media to `src/lib/medias.ts` and a respective description text to the locale files and they will be propagated everywhere.

## Adding New Recipes

Add an image to `src/lib/images/recipes` and then the respective translations to the locale files. The name of the file needs to match the key in the translations (e.g., `carrot-soup.jpg` => `"carrot-soup": { "title": "Karrottensuppe", ... }`).
