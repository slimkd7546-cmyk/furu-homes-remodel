
# Furu Homes Remodel

Professional Home Remodeling & Renovation website for Furu Homes.

**Live Site:** [https://furuhomes.com/](https://furuhomes.com/)

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Local Development

1. Clone the repository:
	```sh
	git clone https://github.com/slimkd7546-cmyk/furu-homes-remodel.git
	cd furu-homes-remodel
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Start the development server:
	```sh
	npm run dev
	```

## Deployment

This site is deployed to GitHub Pages and uses a custom domain ([furuhomes.com](https://furuhomes.com/)).

### To deploy updates:

1. Build the project:
	```sh
	npm run build
	```
2. Commit and push changes to the `main` branch. GitHub Actions or Pages will handle deployment.

### Custom Domain Setup

- Ensure a `CNAME` file exists in the repository root with `furuhomes.com` as its content.
- Asset paths and Vite config are set for custom domain compatibility (`base: './'`).

## Troubleshooting

- If assets (CSS/JS/images) fail to load, check that all asset paths in HTML and build output are relative (no leading slash).
- For environment variables (e.g., Hotjar), ensure they are defined in your build or injected at runtime.

## License

MIT
