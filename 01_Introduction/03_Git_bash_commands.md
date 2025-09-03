# Git Bash Guide: Navigation and File Operations (with examples + exercises)

> **Windows + Git Bash context**  
> In Git Bash, Windows drives appear mounted as directories from the root: `C:\` → `/c/`, `D:\` → `/d/`, etc.  
> The user’s “home” path is usually `/c/Users/<name>` and can be shortened as `~`.

> **Warning about deletion!**  
> `rm` does not send anything to the Recycle Bin. Once deleted, it’s gone. Practice in a test folder.

---

## 1) `pwd` — print working directory

- **What it does:** shows your current directory.
- **When to use it:** after `cd` or when you’re not sure where you are in the file tree.

**Examples**
```bash
$ pwd
/c/Users/Ana

$ cd /d/PROJECTS/frontend_2025
$ pwd
/d/PROJECTS/frontend_2025

$ cd ~
$ pwd
/c/Users/Ana
```

---

## 2) `ls` — list directory contents

- **What it does:** shows files and folders in the current directory (or a given path).
- **Note:** hidden files (those starting with `.`) are not shown without options.

**Examples**
```bash
$ ls
README.md  src  package.json

# List another folder without moving into it:
$ ls /d/PROJECTS
frontend_2025  js_course  test
```

---

## 3) `ls -l` — long listing (details)

- **What it does:** shows permissions, links, owner, group, size, date, name.
- **Why useful:** quickly see **file size** and **permissions**.

**Examples**
```bash
$ ls -l
-rw-r--r-- 1 Ana 544  Mar 12 10:05 README.md
drwxr-xr-x 1 Ana   0  Mar 12 10:02 src/
-rw-r--r-- 1 Ana 312  Mar 12 10:03 package.json

# Long listing for a specific folder:
$ ls -l /d/PROJECTS/test
```

> **Tip**: Combine options: `ls -la` ≡ `ls -l -a`.

---

## 4) `ls -a` — include hidden files

- **What it does:** shows files/folders starting with `.` (like `.git`, `.env`).
- **Why useful:** Git repos have a hidden `.git` folder.

**Examples**
```bash
$ ls -a
.  ..  .git  .env  README.md  src  package.json

$ ls -la  # long + hidden, very common
```

---

## 5) `cd` — change directory

- **Common forms:**  
  - `cd <folder>` – move into folder  
  - `cd ~` – go to home  
  - `cd -` – return to previous directory

**Examples**
```bash
$ cd src
$ pwd
/d/PROJECTS/frontend_2025/src

$ cd ~
$ cd -
/d/PROJECTS/frontend_2025/src  # went back
```

---

## 6) `cd ..` — move up one level

- **`.`** = current directory, **`..`** = parent directory.

**Examples**
```bash
$ pwd
/d/PROJECTS/frontend_2025/src/components
$ cd ..
$ pwd
/d/PROJECTS/frontend_2025/src

# Move up two levels:
$ cd ../..
$ pwd
/d/PROJECTS/frontend_2025
```

---

## 7) `cd /c`, `cd /d` — switch drives (Windows mounts)

- In Git Bash, `C:\` is available as `/c/`, `D:\` as `/d/`, etc.

**Examples**
```bash
$ cd /c
$ pwd
/c

$ cd /d/PROJECTS
$ pwd
/d/PROJECTS
```

---

## 8) `mkdir` — create directories

- **Simple:** `mkdir name`
- **Nested:** with `-p` you create the whole path if it doesn’t exist.

**Examples**
```bash
$ mkdir assets
$ ls
assets  README.md  src  package.json

# Create multiple at once:
$ mkdir img css js

# Create nested chain:
$ mkdir -p src/components/Button
```

---

## 9) `rm` — remove files

- **Important:** no recycle bin. Permanent deletion.
- **Works only for files, not folders** (without options).

**Examples**
```bash
$ touch notes.txt
$ rm notes.txt

# Delete multiple files:
$ rm a.log b.log c.log
```

---

## 10) `rm -r` — recursive delete

- **`-r`** removes a folder and its contents.  
- **`-f`** (force) skips prompts/errors (use with caution!).

**Examples**
```bash
# Remove a folder and its contents:
$ rm -r dist

# Without questions (dangerous):
$ rm -rf node_modules

# Remove multiple folders:
$ rm -r build tmp
```

---

## 11) Relative vs Absolute paths

- **Absolute:** starts at root (e.g., `/d/PROJECTS/app`) or from home with `~` (e.g., `~/Documents`).  
- **Relative:** from the current directory (e.g., `src/components`).

**Examples**
```bash
# Absolute:
$ cd /d/PROJECTS/frontend_2025

# Relative (from project root):
$ cd src/components

# With ~ (home):
$ cd ~/Desktop
```

---

## 12) Command parameters/options

- **Arguments**: what to act on (e.g., `ls <path>`).  
- **Options/flags**: how to act (e.g., `ls -l`, `rm -r`).  
- Can **combine**: `ls -la` ≡ `ls -l -a`.

**Examples**
```bash
$ ls -l /d/PROJECTS         # -l = long listing, argument = path

$ rm -r tmp                 # -r = recursive, argument = folder

$ mkdir -p src/utils/date   # -p = create full path
```

---

## 13) `touch` — create/modify files

- **What it does:** creates empty file if missing; if it exists, updates timestamp.

**Examples**
```bash
$ touch README.md

# Create multiple files:
$ touch index.html app.js styles.css

# Create in subfolder:
$ touch src/main.js
```

---

## 14) `clear` — clear terminal

- **What it does:** clears the screen (scroll up to see history).

**Examples**
```bash
$ clear

# shortcut alternative:
$ Ctrl + L
```

---

## 15) Auto-complete with **Tab**

- **Single `Tab`**: completes if only one match.  
- **Double `Tab`**: shows all options.  
- Works for **filenames/directories**, **commands**, sometimes **git branches**.

**Examples**
```bash
# Assuming folder “src/components/” exists:
$ cd s<Tab>
# Becomes:
$ cd src/

# Ambiguous? Press twice:
$ cd s<Tab><Tab>
# Shows: scripts  src  screenshots

# Complete files:
$ touch inde<Tab>
# Becomes “index.html” if that’s the only match.
```

---

# Consolidated scenarios

### A) Quickly inspect a project
```bash
pwd                 # where am I?
ls -la              # see everything, including .git and .env
ls -l src           # details in /src
```

### B) Create structure and files
```bash
mkdir -p src/components/Button
touch src/index.js src/components/Button/Button.jsx
ls -l src/components/Button
```

### C) Clean build artifacts (careful)
```bash
rm -r dist
rm -rf node_modules   # only if you know what you’re doing
```

---

# Exercise set for students

> **Recommended setup:** work on drive `D:` in a dedicated folder: `/d/lab-shell`.

## Part 1 — Navigation & listing
1. Navigate to `/d` and create folder `lab-shell`. Enter it.  
   *Commands:* `cd /d`, `mkdir lab-shell`, `cd lab-shell`, `pwd`.
2. Show contents (should be empty), then create `src`, `docs`, `assets` and list again.  
   *Commands:* `ls`, `mkdir src docs assets`, `ls -l`.
3. Go into `src`, move back to `lab-shell`, then go to `assets` using **relative path**.  
   *Commands:* `cd src`, `cd ..`, `cd assets`.

## Part 2 — Files & hidden
4. In `assets`, create files `logo.png` and `.keep`. List so hidden are visible.  
   *Commands:* `touch logo.png .keep`, `ls -a`, `ls -la`.
5. From `lab-shell`, show **details** (size, date) for everything in `assets`.  
   *Command:* `ls -l assets`.

## Part 3 — Relative vs Absolute
6. In `lab-shell`, try entering `src/components` without `-p`, see error, then create the full path in one go and retry.  
   *Commands:* `cd src/components` (fails), `mkdir -p src/components`, `cd src/components`, `pwd`.
7. From `src/components`, go to **home** (`~`), then return to previous directory with `cd -`.  
   *Commands:* `cd ~`, `pwd`, `cd -`, `pwd`.

## Part 4 — Cleanup & safe removal
8. In `src/components`, create `Button.jsx`, `Card.jsx`, then **move them** temporarily into `trash-local` (don’t delete yet).  
   *Commands:* `touch Button.jsx Card.jsx`, `mkdir -p ../../trash-local`, `mv *.jsx ../../trash-local/`, `ls`.
9. Delete `trash-local` recursively. Verify it’s gone.  
   *Commands:* `rm -r ../../trash-local`, `ls ../../`.

## Part 5 — Autocomplete & misc
10. In `docs`, create files `intro.md`, `install.md`, `ideas.md`. Use **Tab** to complete names when listing or opening them.  
    *Commands:* `cd ~/` then `cd /d/lab-shell/docs`, `touch intro.md install.md ideas.md`, `ls i<Tab><Tab>`, `cat intro.md` (optional).
11. Clear the screen, then show current path.  
    *Commands:* `clear`, `pwd`.

> **Checkpoints for evaluation:**  
> - Explain difference between **absolute** and **relative** paths using lab examples.  
> - Show `ls -la` vs `ls` and interpret `ls -l` columns.  
> - Safety with deletion: when and why **not** to use `rm -rf` immediately.

---

## Mini-summary
- `pwd` = where I am | `ls` = what’s here | `cd` = move  
- `-l` = details, `-a` = include hidden, combine: `ls -la`  
- `..` = parent, `~` = home, `/c`, `/d` = drive roots  
- `mkdir -p` for nested paths | `touch` creates empty files  
- `rm` permanently deletes (use with care)  
- **Tab** saves time (complete or double-Tab for options)
