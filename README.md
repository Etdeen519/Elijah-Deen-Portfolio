# Elijah Deen — engineering portfolio

This is a GitHub Pages-ready copy of the portfolio, including the latest project galleries. The original photos and videos are included at their existing resolution. The site uses Vite and publishes automatically when changes are pushed to `main`.

## Put it online with GitHub Desktop

1. Download and unzip this package. Keep the **Elijah-Deen-GitHub-Portfolio** folder intact.
2. Install [GitHub Desktop](https://desktop.github.com/) and sign in to your GitHub account.
3. In GitHub Desktop, choose **File → Add local repository**, then choose the unzipped folder. When it says it is not a Git repository, choose **Create a repository here**. Keep the branch named `main` (GitHub Desktop's default).
4. Choose **Publish repository**. Leave **Keep this code private** unchecked if you want free public GitHub Pages hosting. Publish it.
5. On GitHub.com, open the new repository and choose **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Open the repository's **Actions** tab. The **Publish portfolio** workflow should run. When it completes, GitHub shows your Pages URL in **Settings → Pages**. The URL normally looks like `https://YOUR-USERNAME.github.io/Elijah-Deen-GitHub-Portfolio/`.

If the publish action does not run when Pages is enabled, choose **Actions → Publish portfolio → Run workflow**. Future edits can be made locally; commit and push in GitHub Desktop to republish.

## Run it locally (optional)

With Node.js 22.13 or newer and pnpm 11.25 installed, run `pnpm install --frozen-lockfile` then `pnpm dev`. To test the published files, run `pnpm build`. The deployment workflow sets the correct URL prefix from the GitHub repository name automatically.
