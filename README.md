# IonicBusApp
##Introduction
This project is an Ionic Application created with a backend database, connecting to the application through php scripts from a server . The reason for the server database is to update bus times and automatically updates all applications that have been downloaded.
The aim of my project was to construct a more approachable timetable of the local buses. I created my database that shows each individual time of the departure of busses from their location. I got this idea from reading the online timetable which is a bit difficult to read.

##Architecture of the solution

The structure of the solution is based on connecting my database on the virtual machine to my application. 
To do this, I used php scripts for each table of my database to format my database into json. 

I wanted my project to be an easy to use and locate information quickly. I have designed my application with two separate tabs. The Home Page tab and the Time tables tab. The Home Page tab consists of information of prices for the day saver, weekly ticket, monthly ticket and single use ticket. I also included the leap card prices which have been introduced recently. 
The second tab is the bus times. I added a button for each bus with its name and basic route. When this button is clicked it then shows each time it leaves and where. 
The times are populated from a database from my virtual machine and are connected to the application using php scripts. I have a php script for every table of the database which are stored in the "www" folder of the wamp server.   The php scripts enclose the results of the name value pairs in json format utilising the php method json_encode.
The angular then sends a http request to the server to get the data and if the connection is successful the data will be displayed.

##Technologies used

Firstly, I had to download and install Ionic and Cordova onto my computer using the command line in order to work at its full potential. I used Ionic as it is a cross-platform and can be developed using html, css and javascript and i aslo wanted to experiment with ionic as we only had one term using ionic and wanted to gain more experience. 
It also has great frameworks like angular which is embedded in ionic by default. Personally, I think this makes it an instant advantage over frameworks  such as phoneGap. However I found that there are certain performance issues as sometimes it is a bit slow loading my database, this was not much of an issue however and believe it's due to Ionic not being completely native.
Secondly, I created my database using SQL by installing wamp on my virtual machine. I used SQL as it can be used to retrieve large amounts of information efficiently. I also liked phpMyAdmin which came with the wampServer it made it more manageable to follow the database and its tables.
After much difficulty in creating the database, I eventually figured out that using Microsoft excel and saving the file as  .csv and importing that into phpMyAdmin it was much easier to structure.

 
##Conclusions
Doing this project enhanced my knowledge greatly on four main aspects:
1) Creating a database using sql
2) Learning php scripts
3) Ionic Platform 
4) azure 

Database:  Firstly it was my first time creating a database. I have worked on sql commands before but never actually created a database. I used phpMyAdmin which was great assistance and when each table is created it shows you the sql command to populate that table on the sqlConsole. This shows if the database has good structure and fit for purpose.
PHP scripts:  This is a general-purpose scripting language that is especially suited to server-side web development, in which case php generally runs a web server.  This was my first time using php and it was extremely useful and easy to understand. I learned that you allow what methods you want e.g GET and POST. You also have to allow access to the host(paddygriffin.cloudap.net) and connect to the database of your choosing. You need to create a user and set a password that you used for the database. The information from the database is populated by using the query you wish to populate. Example:  $query = "SELECT * FROM `401` "; 
This populates the information of the 401 bus times for my project. 
Ionic Platform: I learned a lot of Ionic during the duration of this project . Firstly, I had no problems installing Ionic and the ionic website explains very well step by step to install ionic. During the programming of the Application to show how your app is looking you use the command: Ionic serve(general showing) or ionic serve --lab (showing what it looks on android an IOS).
Important: When running the app you must open the command prompt and make sure the directory is on the folder that you wish to run. When downloaded from github this was the directory:


