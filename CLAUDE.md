# CLAUDE.md

This is the personal website of Robin Pokorny, a software architect based in Berlin.

## Tech Stack

- **Static Site Generator**: Jekyll 4.4.x
- **Theme**: Custom fork of jekyll-theme-basically-basic (in `/theme`)
- **Styling**: SCSS with Opera skin, dark mode support
- **CMS**: Decap CMS (admin at `/admin`)
- **Deployment**: Vercel
- **Media**: Cloudinary

## Development

```bash
# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve

# Run CMS locally
npx decap-server
```

## Workflow

**All changes should be done in a branch. Create a PR for review before merging to master.**

```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make changes, then commit and push
git add -A
git commit -m ":zap: Description of changes"
git push -u origin feature/your-feature-name

# Create PR on GitHub
```

## Commit Messages

Use the [git3moji](https://robinpokorny.github.io/git3moji/) standard for commit prefixes:

| Emoji | Code | Purpose |
|-------|------|---------|
| ⚡️ | `:zap:` | Features and primary concerns |
| 🐛 | `:bug:` | Bugs and fixes |
| 📺 | `:tv:` | CI, tooling, and configuration |
| 👮 | `:cop:` | Tests and linting |
| 🔤 | `:abc:` | Documentation |

Example: `:zap: Add dark mode toggle`

## Project Structure

- `_posts/` - Blog posts (Markdown)
- `_data/` - Content data (talks.yml, theme.yml)
- `theme/` - Custom theme with layouts, includes, and SCSS
- `admin/` - Decap CMS configuration
- `api/` - Vercel serverless functions (OAuth)

## Key Pages

- `/` - Home
- `/blog/` - Blog listing
- `/talks/` - Conference talks
- `/now/` - Current focus
