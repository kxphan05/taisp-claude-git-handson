# Lab 4: Claude Code basics (20 min)

Claude Code is an AI assistant that runs in your terminal. It can read your project, run commands, and edit files, **asking permission first**.

## 1. Start it
```bash
git switch main
cd starter-app
claude
```

## 2. Ask before you change
Start by exploring. Try these prompts one at a time:

- `What does this project do? Explain it for a beginner.`
- `Which file would I edit to change how an opportunity card looks?`
- `Are there any bugs or things that could break?`

Notice that Claude reads files but changes nothing yet.

## 3. Make a small change
Prompt: `Change the page title to "TAISP Opportunity Radar" and add my name in the footer.`

Claude will show a proposed edit and ask to approve it. **Read it.** Then:
```bash
git diff
```
Happy? Commit. Not happy? `git restore .` and reword your prompt.

## 4. Prompting tips

| Weak | Better |
|------|--------|
| `make it better` | `Sort opportunities by deadline, soonest first, and show "Closed" for past dates` |
| `fix it` | `Clicking a tag does nothing. Here is the console error: ...` |
| `build me an app` | `Add a search box that filters cards by title. Keep it plain JavaScript, no libraries.` |

Rules of thumb: one task at a time, name the files if you know them, state constraints, and say what "done" looks like.

## 5. Useful controls

| Action | How |
|--------|-----|
| Slash commands | type `/` to see them (`/help`, `/clear`, `/init`) |
| Stop Claude | `Esc` |
| Undo a bad turn | `git restore .` (this is why we commit often) |
| Leave | `/exit` or `Ctrl+C` twice |

## 6. Give Claude memory with `CLAUDE.md`
Claude reads a file called `CLAUDE.md` at the start of every session. Open the one in `starter-app/` and read it. Add a rule of your own, e.g. *"Always explain changes in simple terms."* Restart Claude and test it.

## Safety checklist
- Review every diff. Ask *"why did you do that?"* when unsure.
- Don't approve commands you don't understand.
- Never paste secrets or real scholar data.
- You must be able to explain your code at judging.

## Checkpoint

- [ ] You used Claude to explore code without changing it
- [ ] You reviewed a diff and either kept or discarded it
- [ ] You edited `CLAUDE.md` and saw Claude follow it
