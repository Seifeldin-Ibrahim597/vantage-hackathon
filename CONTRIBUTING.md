# Building together

## Get access

Open the repository link and clone it. For write access, send your GitHub username to the repository owner and accept the collaborator invitation. A link alone grants read access to this public repository.

You can also use GitHub's **Fork** button, clone your fork, and open pull requests back to this repository without direct write access.

## Start a task

For collaborators:

```bash
git switch main
git pull --ff-only
npm ci
git switch -c feat/short-task-name
npm run dev
```

Pick one task from Issues or create an issue describing the goal and what counts as done. Use your own descriptive branch name so teammates can work in parallel.

## Save and share

```bash
npm run check
npm run build
git status
git diff
```

Stage only the files for your change, then commit and push. For example, if you changed the main page:

```bash
git add src/App.tsx src/App.css
git commit -m "Describe the change"
git push -u origin feat/short-task-name
```

Open the repository's Pull requests tab and create a pull request into `main`. Explain what changed and how you checked it. Ask a teammate to review before merging. Do not force-push to `main`.

If using a fork, push to your fork and choose the shared repository's `main` as the pull request target.

## Bring in the latest work

Commit or stash your own work first. Then update your branch:

```bash
git fetch origin
git merge origin/main
```

Resolve any conflicts, check the app, and push again. Ask for help if you're unsure which changes to keep.

## Local Git identity

If Git asks who you are, set your own name and GitHub-verified email for this repository:

```bash
git config user.name "Your Name"
git config user.email "YOUR_GITHUB_VERIFIED_EMAIL"
```

You can use the private no-reply address from GitHub Settings > Emails.

## Before a demo

- The main feature works on desktop and mobile.
- TypeScript checks, lint, and the production build pass.
- No secrets, personal data, or generated folders are staged.
- The production URL opens and shows the expected version.
