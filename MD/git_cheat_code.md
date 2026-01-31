# Git Command Cheat Sheet (Beginner – Practical)

## Mental Model (READ THIS FIRST)

Git is a time machine for your code.
You decide WHEN to save and WHAT to save.

Saving = commit  
Choosing what to save = add

---

## 1. Start Git in a project (once only)

git init

Creates a hidden `.git` folder.
This turns your folder into a Git repository.

---

## 2. Check current status (USE THIS A LOT)

git status

Tells you:

- what files changed
- what is staged
- what is NOT staged

If you are confused → run `git status`.

---

## 3. Stage files (choose what to save)

### Stage one file

git add index.js

### Stage all changed files

git add .

IMPORTANT:

- `git add` does NOT save
- it only prepares files for saving

---

## 4. Commit (SAVE SNAPSHOT)

git commit -m "Meaningful message"

This creates a checkpoint in history.

Good messages:

- Add variables lesson
- Fix operator logic
- Update README notes

Bad messages:

- update
- changes
- final

---

## 5. The BASIC FLOW (MEMORIZE THIS)

Every time you finish a task:

git status
git add .
git commit -m "What I changed"

This is 80% of Git usage.

---

## 6. View commit history

git log

Shows:

- commit id
- author
- date
- message

This is your code timeline.

---

## 7. Common Scenarios

### I changed files but nothing is saved

→ You forgot to commit

### I added files but they’re not saved

→ You forgot to commit

### I committed but want to continue working

→ Just keep coding, then commit again later

---

## 8. VERY IMPORTANT RULES

- Commit small changes often
- One idea = one commit
- Use `const` mindset: be intentional
- Git does NOTHING unless you tell it to

---

## One-Sentence Summary (MEMORIZE)

git add = choose  
git commit = save  
git status = check
