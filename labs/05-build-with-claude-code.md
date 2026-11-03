# Lab 5: Build a feature with Claude Code and Git (30 min)

Now combine both skills, the way you will in the hackathon.

## The loop

```
branch -> prompt -> review diff -> test in browser -> commit -> repeat -> PR
```

## Setup
```bash
git switch main && git pull upstream main
git switch -c feature-<what-you-build>
```
Open `starter-app/index.html` in your browser (double-click it). You should see a list of opportunities. The data lives in `starter-app/data.js`. Use the terminal for `claude` and git commands.

## Pick one task (or more)

**Easy**
- Show a "Closed" badge on opportunities whose deadline has passed
- Add 5 more sample opportunities to `data.js`

**Medium**
- Add a search box that filters by title
- Add tag filter buttons (Internship, Scholarship, Talk, ...)
- Sort by deadline

**Stretch**
- Add a "Save for later" button using `localStorage`
- Add a form for scholars to submit an opportunity (only needs to work in the browser)
- Make a weekly digest: a script that prints the next 7 days' deadlines

## For each task

1. Write a **specific prompt** (see Lab 4).
2. Let Claude make the change, then **read the diff** (`git diff`).
3. **Refresh the browser** and test it yourself. AI code often looks right but isn't.
4. If it works: `git add -A && git commit -m "<clear message>"`
5. If it doesn't: paste the error back to Claude, or `git restore .` and retry.

## Finish with a PR
```bash
git push -u origin feature-<what-you-build>
```
Then open a pull request from your fork on GitHub, as in Lab 2.
In the PR description, write what you built and **one thing Claude got wrong** (there's almost always one).

## Explain-it check
Pick one function Claude wrote. Without looking at Claude's explanation, explain it to a neighbour. If you can't, ask Claude to walk you through it line by line. At judging you will be asked.

## Checkpoint

- [ ] At least one feature works in the browser
- [ ] You made at least 2 commits with clear messages
- [ ] PR opened, and you can explain the code
