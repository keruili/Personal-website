# Li Power Electronics Lab - Website

This website is ready to be published to GitHub Pages.

## How to Publish

1. **Export to GitHub**: Use the **Export** menu in Google AI Studio to push this code to a new GitHub repository.
2. **Configure Pages**:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. **Automatic Deployment**:
   - The included workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site whenever you push to the `main` branch.
   - Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

## Project Structure

- `src/`: Contains the React source code.
- `dist/`: The folder containing built files (generated during deployment).
- `.github/workflows/deploy.yml`: The GitHub Actions configuration file.

## Local Development

```bash
npm install
npm run dev
```
