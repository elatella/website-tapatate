# TaPatate! Website

The TaPatate! website available at <https://tapatate.ch>

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

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

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Adding new Depots

Simply add new depots to `src/lib/depots.ts` and they will be propagated everywhere.

## Adding new Photos

Simply add new gallery images to `src/lib/images/gallery` with the file name format `YYYY-X.jpg` where "YYYY" is the year and "X" is the index of the image. Then add a description of that image to the locale files using the same index.

## Adding new Media

Simply add new media to `src/lib/medias.ts` and a respective description text to the locale files and they will be propagated everywhere.
