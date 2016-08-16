# UI for MovieFlix
documentation for how to run the client side application for MovieFlix

## run the application
1. clone or download the branch and run npm install and bower install commands inside the folder
2. after step 1 run gulp command

## copy the contents of dist folder and run in your local server like tomcat

## admin creation
1. register admin with credentials:
{"username": "admin@movieflix.com", "password": "<your password>", "firstname": "<your first name>", "firstname": "<your last name>"}
2. after step 1 enter the below command in mongoshell inside MovieFlix db of your server
db.users.update({username:"admin@movieflix.com"},{$set:{admin:true}})
3. after step 2 login with these credentials again 




# THANK YOU
