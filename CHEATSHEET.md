# Cheatsheet

## Git

| Goal | Command |
|------|---------|
| See what changed | `git status`, `git diff` |
| Stage files | `git add <file>` or `git add -A` |
| Commit | `git commit -m "message"` |
| History | `git log --oneline` |
| New branch | `git switch -c <name>` |
| Switch branch | `git switch <name>` |
| Push a new branch | `git push -u origin <name>` |
| Get latest | `git pull` |
| Discard edits | `git restore <file>` |
| Unstage | `git restore --staged <file>` |
| Abort a merge | `git merge --abort` |

## GitHub CLI

| Goal | Command |
|------|---------|
| Log in | `gh auth login` |
| Fork and clone | `gh repo fork <owner/repo> --clone` |
| Open a PR | `gh pr create` |
| List PRs | `gh pr list` |
| View PR in browser | `gh pr view --web` |

## Claude Code

| Goal | How |
|------|-----|
| Start | `claude` (in your project folder) |
| Stop it | `Esc` |
| Slash commands | type `/` |
| Create a CLAUDE.md | `/init` |
| Clear context | `/clear` |
| Quit | `/exit` |

**Prompt recipe:** goal + file/location + constraints + what "done" looks like.
