# Keystone — Photo Guide

Keystone is the **Trades & Services** archetype in the Apotome website program — built for
working businesses like auto/diesel shops, welders and fabricators, builders and contractors,
and other skilled-trades operations.

Drop final, web-optimized JPGs into `public/photos/` using the **exact filenames** below.
Filenames must match the `src` / `image` values in `src/config/site.config.ts`.

## Variants

| Variant      | Total photos | Gallery shots | Project shots |
| ------------ | ------------ | ------------- | ------------- |
| `essentials` | 12           | 6             | 4             |

## Brand & space

| Filename    | Shot                                              | Size |
| ----------- | ------------------------------------------------- | ---- |
| `hero.jpg`  | Signature shop bay / exterior, early morning light | 2400×1600 |
| `about.jpg` | The crew on the floor, mid-job                    | 2000×1500 |

## Gallery

| Filename             | Shot                                    |
| -------------------- | --------------------------------------- |
| `gallery-diesel.jpg` | Diesel / engine rebuild on the lift     |
| `gallery-fab.jpg`    | Fabrication — trailer or custom metal   |
| `gallery-weld.jpg`   | Welding in progress, sparks             |
| `gallery-truck.jpg`  | Field-service truck loaded out          |
| `gallery-build.jpg`  | Commercial build-out / framing on site  |
| `gallery-tools.jpg`  | Tool wall / bench detail                |

## Projects

For each entry in `projects.items[]`, add one photo. Defaults:

| Filename              | Project                     |
| --------------------- | --------------------------- |
| `project-fleet.jpg`   | Class-8 fleet PM contract   |
| `project-trailer.jpg` | Gooseneck stock trailer     |
| `project-ag.jpg`      | Ag implement re-build       |
| `project-ti.jpg`      | Main-street shop T.I.       |

## Sourcing photos

Run the Unsplash fetcher from the repo root to auto-populate this folder with credited stock:

```bash
node scripts/fetch-unsplash-photos.mjs --template keystone
```

Photographer attribution is written to `public/photos/CREDITS.md`. Replace with the customer's
real photos before launch — trade sites convert on proof of real work.

## Photo specs

- 2400 px on the long edge for the hero; 1600 px for gallery/projects
- Color-graded JPG, sRGB, quality ~80
- No watermarks or logos
- Shoot honest, in-progress work over posed stock where you can
