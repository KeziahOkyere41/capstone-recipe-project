# Capstone Recipe Project.

# Project Description
  This project project food recipes provide consistency in the production of menu items. It provides food cost control. It provides knowledge for front of the house staff as a sales tool and to help consumers with dietary concerns and allergies.
  
 # Requirements.
  * Backend: Ruby version 3.1.2
  * Backend: Rails version 7.0.4
  * Database: Postgresql

* Setup
  Run rails new appname
  cd into your app
  run code . to open in your VScode
 
 ## Then, create a new remote repository on GitHub. Head to github.com and click the + icon in the top-right corner and follow the steps to create a new repository. Please do not check any of the options such as 'Add a README file', 'Add a .gitignore file', etc since you're importing an existing repository, creating any of those files on GitHub will cause issues.

## If you're working with a partner, add them as a collaborator on GitHub. From your repo on GitHub, go to Settings > Manage Access > Invite a collaborator and enter your partner's username. Once your partner has access, they should git clone (not fork) the repository.

Finally, connect the GitHub remote repository to your local repository and push up your code:
  $ git remote add origin git@github.com:your-username/your-project-name.git
  $ git push -u origin main
  
## When you're ready to start building your project, run:
  bundle install
  rails db:create
  npm install --prefix client
  
## You can use the following commands to run the application:
  * rails s: run the backend on http://localhost:3000
  * npm start --prefix client: run the frontend on http://localhost:4000

* Deployment instructions
### To deploy, first log in to your Heroku account using the Heroku CLI:
  * heroku login

### Create the new Heroku app:
  * heroku create my-app-name
 
### Add the buildpacks for Heroku to build the React app on Node and run the Rails app on Ruby:
  * heroku buildpacks:add heroku/nodejs --index 1
  * heroku buildpacks:add heroku/ruby --index 2
 
### To deploy, commit your code and push the changes to Heroku:
  git add .
  git commit -m 'Commit message'
  git push heroku main

### Note: depending on your Git configuration, your default branch might be named master or main. You can verify which by running git branch --show-current. If it's master, you'll need to run git push heroku master instead.

## Any time you have changes to deploy, just make sure your changes are committed on the main branch of your repo, and push those changes to Heroku to deploy them.

## You can view your deployed app with:
  heroku open
