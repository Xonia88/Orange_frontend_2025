To start using Git, you first need to configure your user information. This information will be used in your commits.

## Steps

Open **Git Bash** and run the following commands:

```bash
# 1. Set your Git username
git config --global user.name "Sonia Rosianu"

# 2. Set your Git email
git config --global user.email "rosianu.sonia@gmail.com"

# 3. Check your Git configuration
git config --global --list
```

## Explanation

1. **`git config --global user.name "Sonia Rosianu"`**  
   - This sets your Git username globally (for all repositories on your computer).  
   - The name will appear in every commit you make.

2. **`git config --global user.email "rosianu.sonia@gmail.com"`**  
   - This sets your Git email globally.  
   - The email will also appear in every commit.  
   - ⚠️ Make sure to use the same email as your GitHub account, so commits are linked to your profile.

3. **`git config --global --list`**  
   - This shows all global configuration settings (including username and email).  
   - Useful to verify that your details were saved correctly.
