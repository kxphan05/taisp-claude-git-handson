# Lab 3: Merge conflicts (15 min)

A **conflict** happens when two branches change the same lines. Git can't guess which version you want, so it asks you. It looks scary but is routine.

## Exercise: create one on purpose

```bash
git switch main
git switch -c conflict-a
```
Edit line 1 of `labs/conflict-playground.txt` to say `Version A`, then:
```bash
git commit -am "Change playground to A"
git switch main
git switch -c conflict-b
```
Edit the same line to say `Version B`, then:
```bash
git commit -am "Change playground to B"
git merge conflict-a
```

Git reports `CONFLICT`. Open the file; you'll see:

```
<<<<<<< HEAD
Version B
=======
Version A
>>>>>>> conflict-a
```

### Resolve it
1. Decide the final text (A, B, or a mix). Delete the three marker lines.
2. Save, then:
```bash
git add labs/conflict-playground.txt
git commit        # accept the default merge message
```

Stuck in a mess? `git merge --abort` returns you to before the merge.

## Tips to avoid conflicts
- Pull `main` often; keep branches short-lived.
- Agree in the team who touches which files.
- Commit small and often.

## Bonus: let Claude explain (after Lab 4)
Make another conflict, then ask Claude Code: *"Explain this merge conflict and what each side is trying to do. Do not edit anything yet."*

## Checkpoint

- [ ] You resolved a conflict and committed the merge
- [ ] You know what `git merge --abort` does
