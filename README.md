# Capstone Recipe Project.

# Project Description
  This food recipe project provides consistency in the production of menu items. It provides food cost control. It provides knowledge for front of the house staff as a sales tool and to help consumers with dietary concerns and allergies.
  
 # Requirements.
  * Backend: Ruby version 3.1.2
  * Backend: Rails version 7.0.4
  * Database: Postgresql
  * Render account.

* Setup
  Run rails new appname
  cd into your app
  run code . to open in your VScode
 
 ### Then, create a new remote repository on GitHub. Head to github.com and click the + icon in the top-right corner and follow the steps to create a new repository. Please do not check any of the options such as 'Add a README file', 'Add a .gitignore file', etc since you're importing an existing repository, creating any of those files on GitHub will cause issues.

### If you're working with a partner, add them as a collaborator on GitHub. From your repo on GitHub, go to Settings > Manage Access > Invite a collaborator and enter your partner's username. Once your partner has access, they should git clone (not fork) the repository.

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

### It's recommended that you deploy your project early, and push up changes often, to ensure that your code works equally well in production and development environments.

### Preparing your App for Deployment
### Before we can deploy our app to Render, we need to make a few modifications.

### First, open the config/database.yml file, scroll down to the production section, and update the code to the following:
* production:
  <<: *default
  url: <%= ENV['DATABASE_URL'] %>
  
### Next, open config/puma.rb and find the section shown below. Here, you will un-comment out two lines of code and make one small edit:
# Specifies the number of `workers` to boot in clustered mode.
# Workers are forked web server processes. If using threads and workers together
# the concurrency of the application would be max `threads` * `workers`.
# Workers do not work on JRuby or Windows (both of which do not support
# processes).
#
workers ENV.fetch("WEB_CONCURRENCY") { 4 } ### CHANGE: Un-comment out this line; update the value to 4

# Use the `preload_app!` method when specifying a `workers` number.
# This directive tells Puma to first boot the application and load code
# before forking the application. This takes advantage of Copy On Write
# process behavior so workers use less memory.
#
preload_app! ### CHANGE: Un-comment out this line

### Next, open the config/environments/production.rb file and find the following line:
config.public_file_server.enabled = ENV["RAILS_SERVE_STATIC_FILES"].present?

### Update it to the following:
config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present? || ENV['RENDER'].present?

### Finally, inside the bin folder create a render-build.sh script and copy the following into it:
#!/usr/bin/env bash
# exit on error
set -o errexit

# Build commands for front end to create the production build
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# Build commands for back end
bundle install
bundle exec rake db:migrate 
bundle exec rake db:seed # if you have seed data, run this command for the initial deploy only to avoid duplicate records

### Then run the following command in the terminal to update the permissions on the script and make sure it's executable:
chmod a+x bin/render-build.sh

### Commit your changes and push them up to GitHub:
$ git add .
$ git commit -m 'Configure for Render'
$ git push

### Creating the App Database
Render allows users to create multiple databases within a single PostgreSQL instance using the PostgreSQL interactive terminal, psql.

Navigate to your PostgreSQL instance from the Render dashboard, click the "Connect" dropdown, then the External Connection tab, and copy the PSQL command. Paste it into your terminal and press enter. This command connects you to the remote PostgreSQL instance.

To create the database, run this SQL command:
CREATE DATABASE new_db_name;

Now if you run \l from the PSQL prompt, you should see a table that includes your main PostgreSQL instance as well as the database you just created.

Run \q to exit PSQL.

### Creating the Render Web Service
To deploy, click the "New +" button in Render and select "Web Service". You'll see a list of all the repositories in your GitHub account. Find the repo for the example project and click the "Select" button.

In the page that opens, enter a name for your app and make sure the Environment is set to Ruby.

Scroll down and set the Build Command to ./bin/render-build.sh and the Start Command to bundle exec puma -C config/puma.rb.

Open a separate tab in your browser, navigate to the Render dashboard, and click on your PostgreSQL instance. Scroll down to the "Connection" section, find the "Internal Database URL", and copy it.

Return to the other tab. Scroll down and click the "Advanced" button, then click "Add Environment Variable." Enter DATABASE_URL as the key, then paste in the URL you just copied as the value. Note that the URL will end with the name you gave your PostgreSQL instance when you initially created it; be sure to remove that name and replace it with the name of the database you created in the last section.

Click "Add Environment Variable" again. Add RAILS_MASTER_KEY as the key. The value is in the config/master.key file in your app's files. Copy the value and paste it in.

The completed page should look something like this:
![68747470733a2f2f637572726963756c756d2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f70686173652d342f70726f6a6563742d74656d706c6174652f7765622d736572766963652d73657474696e67732e706e67](https://user-images.githubusercontent.com/69130011/206126294-b4e35383-dec4-4575-a05d-4f713de67c74.png)

Scroll down to the bottom of the page and click "Create Web Service". The deploy process will begin automatically.

### Check Your Work: Deploying
Once the deploy process has completed, click on your app's URL in the upper left corner. Once the page has loaded (which may take a few moments), you should see your deployed app in the browser. If you get a "Page not found" error, wait a few minutes and refresh the page.
