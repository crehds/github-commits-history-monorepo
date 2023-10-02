# Commit History App

## Description

This project will show all the commits of a repository, using the GitHub API.

## Important

It is necessary to have a GitHub token to be able to use the GitHub API. So, you will need this [token](https://docs.google.com/document/d/1xuN0RF9BzJb4krDRrCgSP7F9uxWAYdC0Ica7zPTcgpo/edit?usp=sharing) in order to run the project.

## How to run

1. Clone this repository

  ```bash
    git clone git@github.com:crehds/github-commits-history-monorepo.git
  ```

2. Install dependencies

  ```bash
    npm install
  ```

3. Build the project

  ```bash
    npm run build
  ```

4. Create a .env file and copy the token in the file

  ```bash
    touch .env # command to create the file, if you are using a linux based system
  ```

4. Run the project

  ```bash
    npm start
  ```

5. Open your browser at http://localhost:3000

Note:

For security reasons the token has restrict access and it will expire in 7 days.
