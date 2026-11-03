# Lab 0: Setup (15 min)

## 1. Install the tools

| Tool | Check it works | Install |
|------|----------------|---------|
| Git | `git --version` | https://git-scm.com/downloads |
| GitHub CLI | `gh --version` | https://cli.github.com |
| Python 3 | `python3 --version` | https://www.python.org/downloads |
| Claude Code | `claude --version` | See https://docs.claude.com/en/docs/claude-code/setup |
| A code editor | n/a | VS Code is a fine choice |

Windows users: use **Git Bash** or **WSL** so the commands in these labs work as written.

## 2. Tell Git who you are

```bash
git config --global user.name  "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Use the email tied to your GitHub account.

## 3. Log in to GitHub

```bash
gh auth login
```

Pick GitHub.com, then follow the prompts (browser login is easiest).

## 4. Fork and clone this repo

```bash
gh repo fork kxphan05/taisp-claude-git-handson --clone
cd taisp-claude-git-handson
```

A **fork** is your own copy on GitHub. You can break things freely.

## 5. Log in to Claude Code

```bash
claude
```

Follow the login prompt. Type `/exit` to leave for now. (No access? Ask a mentor; you can still do Labs 1-3 and 6.)

## Checkpoint

- [ ] `git --version` and `gh auth status` both work
- [ ] You are inside the `taisp-claude-git-handson` folder (`pwd` to check)
- [ ] `git remote -v` shows both `origin` (your fork) and `upstream` (the original)

Missing `upstream`? Run `git remote add upstream https://github.com/kxphan05/taisp-claude-git-handson.git`.
