# Team Vantage

One team. Bigger ambitions.

Our shared university hackathon starter. React + TypeScript + Vite, ready for Vercel. The starting app is a team landing page; replace it with the hackathon idea as we build.

## Links

- [Repository](https://github.com/Seifeldin-Ibrahim597/vantage-hackathon)
- [Tasks and ideas](https://github.com/Seifeldin-Ibrahim597/vantage-hackathon/issues)
- [Pull requests](https://github.com/Seifeldin-Ibrahim597/vantage-hackathon/pulls)
- [Team contribution guide](CONTRIBUTING.md)

## Quick start

Install Node.js LTS (24 or newer; minimum supported version is 22.12), which includes npm. Install Git as well.

```bash
git clone https://github.com/Seifeldin-Ibrahim597/vantage-hackathon.git
cd vantage-hackathon
npm ci
npm run dev
```

Open the local URL printed by Vite, normally http://localhost:5173. No API keys or environment variables are required for the starter.

On Windows, use `npm.cmd` instead of `npm` if PowerShell blocks scripts.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Run TypeScript checks and the linter |
| `npm run build` | Run checks and build the production app in `dist/` |
| `npm run preview` | Serve the built app locally |

## Project structure

- `src/App.tsx`: starting page and app behavior.
- `src/App.css`: page styling and responsive layouts.
- `src/index.css`: global styling.
- `public/`: static assets, including the favicon.
- `vercel.json`: deployment settings.
- `AGENTS.md`: project guidance for coding assistants.

## Working together

Anyone with the public link can read and clone this repository. To push directly to it, ask the repository owner to add your GitHub username as a collaborator. Otherwise, fork it and send a pull request from your fork.

Use a separate branch for each task, open a pull request, and ask a teammate to review before merging into `main`. See [CONTRIBUTING.md](CONTRIBUTING.md) for the exact steps.

## Deployment

The Vercel project belongs to **Team Vantage**. Configuration uses `npm ci`, `npm run build`, and `dist/`. A successful build includes TypeScript and lint checks.

Owner CLI workflow from this folder:

```bash
vercel login
vercel link --scope team-vantage --project vantage-hackathon
vercel deploy --scope team-vantage
# Check the preview before publishing:
vercel deploy --prod --scope team-vantage
```

A GitHub connection, when enabled, deploys `main` to production and creates previews for pull requests. See the deployment status below for the verified connection state. The team's current Hobby plan can restrict Git-triggered deployments authored by other people and collaboration on private repositories; owner CLI deployment remains available. No paid upgrade is required to use this starter.

## Secrets

This is a public repository. Keep credentials out of commits. `.env*`, `.vercel/`, `node_modules/`, and build output are ignored. Values prefixed `VITE_` are visible in the browser; never use them for private API keys. Add any future server secrets through the hosting provider's environment settings.
