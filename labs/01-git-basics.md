# Lab 1: Git basics (20 min)

**Mental model:** Git takes *snapshots* (commits) of your project. You choose what goes into each snapshot.

```
working folder  --git add-->  staging area  --git commit-->  history
```

## Exercises

### 1. Look around
```bash
git status        # what has changed?
git log --oneline # what snapshots exist?
```

### 2. Make a change and see it
Open `participants/README.md` and add a line at the bottom. Then:
```bash
git status        # file shows as modified (red)
git diff          # exactly what changed
```

### 3. Stage and commit
```bash
git add participants/README.md
git status        # now green: staged
git commit -m "Add a line to participants README"
git log --oneline # your commit is at the top
```

### 4. Undo mistakes safely
Edit any file badly, then:
```bash
git restore <file>          # throw away unstaged changes
git restore --staged <file> # unstage but keep the edit
```

### 5. Good commit messages
Bad: `update`, `fix`, `asdf`. Good: `Add deadline sorting to opportunity list`. Describe *what* and *why* in one short line.

### 6. Ignore files
Create `secrets.txt`; it is already listed in `.gitignore`, so `git status` won't show it. Now create `notes.tmp`, add its name to `.gitignore`, and check it vanishes too. **Never commit secrets.** If you do, rotate the key; deleting the file later does not erase history.

## Checkpoint

- [ ] You made a commit and can see it in `git log --oneline`
- [ ] You can explain the difference between `git add` and `git commit`
- [ ] You know what `git diff` shows
