# Lab 2: Branches and pull requests (20 min)

**Mental model:** A *branch* is a parallel timeline. You work on your own branch so `main` always stays working. A *pull request* (PR) asks teammates to review and merge your branch.

## Exercises

### 1. Create a branch
```bash
git switch -c add-<your-name>      # e.g. add-alex
```

### 2. Add your profile
Copy the template and fill it in:
```bash
cp participants/TEMPLATE.md participants/<your-github-username>.md
```
Edit it: name, year, course, and one TAISP problem you wish someone would fix.

### 3. Commit and push
```bash
git add participants/<your-github-username>.md
git commit -m "Add <your-name> to participants"
git push -u origin add-<your-name>
```

### 4. Open a pull request
Go to your fork on GitHub and click the **Compare & pull request** banner (or the link Git printed after pushing). Give it a title and click **Create pull request**. This PR goes from **your fork** to the **original repo**.

### 5. Review a neighbour's PR
On GitHub, open **Pull requests**, pick someone else's, go to **Files changed**, and leave one friendly comment. Reviewing is how teams catch bugs.

### 6. Stay in sync
After PRs are merged, update your fork:
```bash
git switch main
git pull upstream main
git push origin main
```

## Team workflow to use in the hackathon

1. Never commit straight to `main`.
2. One branch per task, named by what it does (`add-search`, `fix-login`).
3. Small PRs, reviewed by a teammate before merging.
4. Pull `main` often so you don't drift.

## Checkpoint

- [ ] Your PR is open (or merged)
- [ ] You left a comment on someone else's PR
- [ ] You can explain why we use branches
