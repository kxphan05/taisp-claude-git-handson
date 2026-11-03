# Lab 0: Setup (15 min)

## 1. Install the tools

| Tool | Check it works | Install |
|------|----------------|---------|
| Git | `git --version` | https://git-scm.com/downloads |
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

## 3. Fork this repo

Create a free account at https://github.com if you don't have one. Open https://github.com/kxphan05/taisp-claude-git-handson and click **Fork**. A **fork** is your own copy on GitHub; you can break things freely.

## 4. Clone your fork

Click the green **Code** button on *your* fork, copy the HTTPS URL, then:

```bash
git clone <your-fork-url>
cd taisp-claude-git-handson
git remote add upstream https://github.com/kxphan05/taisp-claude-git-handson.git
```

The first push will ask you to sign in; use your GitHub username and a personal access token (GitHub > Settings > Developer settings > Tokens) or the browser login Git offers.

## 5. Log in to Claude Code

```bash
claude
```

Follow the login prompt. Type `/exit` to leave for now. (No access? Ask a mentor; you can still do Labs 1-3 and 6.)

## Checkpoint

- [ ] `git --version` and `claude --version` both work
- [ ] You are inside the `taisp-claude-git-handson` folder (`pwd` to check)
- [ ] `git remote -v` shows both `origin` (your fork) and `upstream` (the original)
