# Underbelly.is

Welcome to the underbelly.is portfolio repository! 

### Getting Started

#### Installing Node

In order to get up and running with the code in this repo you'll need to make sure you have
Node.js installed. To do this you can open your Terminal.app and type in:

`node -v`

If you see a number that looks like this `v4.2.6` then congrats! Node.js is installed. If there is not a number
in that format then you'll need to go to nodejs.org and download it. You'll want to go with the LTS version and not
the stable version.

Now double check terminal to make sure node is installed with `node -v`.

Now you're ready to clone the repo. 

#### Cloning the repository

In the toolbar of every github repo (repository) there will be a url you can use to clone it to your local machine. 
Your options to clone the repo will be HTTPS and SSH. We are going to use HTTP as it is recommended and doesn't
require any additional setup.

Before cloning though, we'll need to create a place for this code to live. To do that we'll need to hop 
back into Terminal.app.

First we need to ensure that you are in your home directory. To do that you'll type:

`cd`

This command stands for "change directories", and it usually takes an argument. If you use this command without an argument
it will place you in the home directory - #protips. Now we are going to create a directory path by typing: 

`mkdir -p ~/Code/underbelly.is/`

`mkdir` is a command that creates directories, and the `-p` allows us to create a path with subdirectories
instead of one directory at a time.

Now we'll use the `cd` command agian to change into the `Code` directory we just created: 

`cd Code`

Now we are inside the Code directory and ready to clone the github repo. Luckily Mac's come with git pre-installed,
which means all of the commands for git are available to you without downloading anything. 

After copying the url from the toolbar above (make sure you have chosen the https option), you can run this command:

`git clone https://github.com/underbelly/underbelly.git underbelly.is`

This will clone the files into the underbelly.is directory. 

Now you will have all of the files associated with the repository. 

#### Installing dependencies

Remember earlier when we installed Node.js? Well, now we are going to put it to good use. When you install Node.js
you automatically get access to `npm` which is the Node Package Manager. This let's use libraries from other
developers that are much smarter than us. 

Move into the underbelly.is directory by typing: 

`cd underbelly.is`

To install all of our dependencies type: 

`npm install`

This will install all of the packages we use to make the Underbelly site work. Currently we are using Webpack + Babel
to bundle our code and transpile our es6, React to render our front-end, and Node.js to run our production server.
These things along with many other smaller packages allow us to work quickly and efficiently. 

#### Running the dev server

Once the dependencies are installed you will be able to run this command

`npm start`

This will start up the webpack-dev-server and allow you to see the website on your local machine. 
