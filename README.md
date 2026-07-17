# Portfolio

React and Vite skeleton for Tu Vu's personal portfolio page.

## Local Development

```bash
npm install
npm run dev
```

## Downloadable Files

- Downloads are served from `public/resume.pdf`, `public/about.md`,
  `public/contact.vcf`, and `public/tu.go`.
- Update profile, links, skills, and project cards in `src/portfolioData.js`.
- Replace placeholder project and demo URLs with the final GitHub/deployment links.

## GitHub Pages

For a repository named `username.github.io`, the app builds with `/` as its base path.

For a project repository such as `Portfolio`, the Vite config automatically uses `/<repo-name>/` when building in GitHub Actions.

Build locally with:

```bash
npm run build
```
