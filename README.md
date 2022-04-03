# Git 101 with Chanakya

Git is one of the most popular distributed version control systems in the world. Through remote repositories such as Github and Gitlab, the open source VCS's popularity continues to grow. 

This repository continues a quick cheatsheet of git commands and how you can use git in your everyday life as an IT professional. 

For more detailed explainations, check out my [**Git for Developers video series**](https://youtube.com). 

## Setting up a new local repository

To setup a new local repository you will have to create a new directory.

```sh
# Use your own directory name here in place of new-directory
mkdir new-directory

cd new-directory

git init
```

## Adding a remote to your repository

To add a remote repository from providers such as Gitlab, Github and others - you can use the below command. You can find the HTTPS URL of your repository within the Github console under clone.

```sh
git remote add origin <remote-repository-url>
```

## Cloning a remote repository

In cases where you are trying to clone an existing remote repository and want to have a local working version, you can then use the below command. 

**Note** : This will create the directory with the repository name in your local environment.

```sh
git clone <remote-repository-url>
```

If you already have a directory that you have created for your project and would like to clone the code from the repository into it (without generating its own directory), you can add a period `.` at the end.

```sh
git clone <remote-repository-url> .
```

## Local Commits

Commits are your mechanism to save your code to the local repository. This means that your code is moved from working directory to staging and then to the local repository. It is usually best practice to,

- Provide clear and simple commit messages
- Group your work into a commit - dont commit two different features together

```sh
# Add a new file with the following command
touch test.txt
echo "Sample Text" > test.txt

# Check the status and see if you have any code that needs to be committed
git status
```

Within the status you will see the following,

- Which branch you are on - you should be on **master** currently
- Changes that have been made on tracked files - README.md
- New files that are there which are not being tracked - test.txt

```sh
# Add your files to staging - you can use . (or) specify which file to add
git add test.txt

# You can now commit those to the local repository
git commit -m "Added test.txt"

# View your commit history using the below
git log
```

**Note** : Use q to exit from git log command

Some other options for add and commit are as follows,

```sh
# Add all files in the folder
git add .

# Add and Commit all files in one command

git commit -am "commit message"
```

## Push changes to remote repository

The next step is to then push your changes from your local repository to your remote repository

```sh
# master is the remote branch to which we will push our repository
git push origin master
```

You can now go to your remote repository in Github, Gitlab (or) any other server and you will be able to view the test.txt file with the commit message as well.

## Run your Node JS API(Optional Example)

In this repository, we have also added a Node JS API project. This project consist of the following pieces,

- package.json file that defines the project
- app.js file which will host the web server and API that we create

To run this API you will have to run the following commands,

```sh
# Navigate to the api folder
cd /src

#  Install node modules
npm install

# Create your .env file for your environment variables
touch .env
```

Open your .env file and add the following line

```
PORT=1234
```

Then you can run your app using the following commands,

```sh
node app.js
```

## Create .gitignore file

We will want to ensure that we dont commit and push dependencies and environment variables such as .env file and node_modules folder. This is where we will create a .gitignore file which tells our Git repository to ignore those files or folders.

```sh
# Create .gitignore file - make sure that you are in the root folder of your repository
touch .gitignore
```

Then add the following to the .gitignore file.

```sh
.env
node_modules
```

## Using Branching

To view all branches that you have available - you can use the following,

```sh
# To view local branches
git branch

# To view remote branches
git branch -r

# To view all branches
git branch -a
```

Branches allow us to isolate our work to fix bugs, make enhancements and continue to develop on the reporistory. For example, let us say we have a bug fix 1234 that we have to implement.

```sh
# Create branch for hotfix
git branch hotfix1234

# Switch to the new branch
git checkout hotfix1234
```

Once you make all your changes in this branch, you can then merge this branch back into master as follows.

**Note** : In most cases, you will not have access to merge into master. That is where we will use Merge Requests(Gitlab) or Pull Requests(Github)

```sh
# Swtich to master branch
git checkout master

# Merge the hotfix branch into master
git merge hotfix1234
```

## Fetching and Merging

There will be many scenarios where the remote repository in your Git Server is updated by someone else on your team. In this case, you will need to first fetch and merge your repository to your local to ensure that your local repository is up to date.

To check if there were any updates on the remote,

```sh
#Fetch the latest branch updates from the remote
git fetch origin

# Now check if there is any difference
git diff --name-only master origin/master

# To check if there were any commits in your remote that you dont have in local
git log --oneline master..origin/master
```

If you dont have any differences this should open an empty file and you can hit 'q' to exit.

In case there are differences, those will be shown in the file and you will need to merge those before you can push to your remote.

If you want to review the changes that were made by somebody in the remote repository, you can use the following.

```sh
# Get the latest remote repository
git fetch origin

# Checkout the respective remote branch
git checkout origin/master
```

To merge a remote to a local we will do the following,

```sh
# Get the latest updates from the remote master branch
git fetch origin master

# Once you have checked all of the changes and want to merge them
git merge origin/master
```

## Using Pull

Pull allows you to run fetch and then merge in one command. In some cases it is considered to not be a safe option.

```sh
git pull origin master
```
