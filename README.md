### Tulip interviews repo for Benjamin Pinaya

[![CLUSIANA LOGO](http://i.imgur.com/cHcsgmX.jpg?2)](Clusiana)

# Clusiana (Lady Tulip), a MemTracking Tool

## Main Tools used for Clusiana
Before you begin we recommend you read about the basic building blocks that assemble a clusiana application:
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/)
* AngularJS - Angular's [Official Website](http://angularjs.org/)
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) 


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
  * Node v5 IS NOT SUPPORTED AT THIS TIME! 
* Ruby - [Download & Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```bash
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install grunt globally using npm:

```bash
$ npm install -g grunt-cli
```

* Sass - You're going to use [Sass](http://sass-lang.com/) to compile CSS during your grunt task. Make sure you have ruby installed, and then install Sass using gem install:

```bash
$ gem install sass
```

* Gulp - (Optional) You may use Gulp for Live Reload, Linting, and SASS or LESS.

```bash
$ npm install gulp -g
```

To install Node.js dependencies you're going to use npm again. In the Clusiana folder run this in the command-line:

```bash
$ npm install
```

This command does a few things:
* First it will install the dependencies needed for the Clusiana to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running clusiana.
* Finally, when the install process is over, npm will initiate a bower install command to install all the front-end modules needed for clusiana

## Running Clusiana
After the install process is over, you'll be able to run your Clusiana using Grunt, just run grunt default task:

```
$ grunt
```

Clusiana should run on port 3000 with the *development* environment configuration, so in your browser just go to [http://localhost:3000](http://localhost:3000)

Clusiana should be running normally.

* explore `config/env/development.js` for development environment configuration options

### Running in Production mode
To run your Clusiana with *production* environment configuration, execute grunt as follows:

```bash
$ grunt prod
```

* explore `config/env/production.js` for production environment configuration options

## Testing Clusiana
You can run the full test suite included with Clusiana with the test task:

```bash
$ grunt test
```

This will run both the server-side tests (located in the app/tests/ directory) and the client-side tests (located in the public/modules/*/tests/).

To execute only the server tests, run the test:server task:

```bash
$ grunt test:server
```

And to run only the client tests, run the test:client task:

```bash
$ grunt test:client
```

## Running Clusiana with Gulp

After the install process, you can easily run your project with:

```bash
$ gulp
```
or

```bash
$ gulp default
```

The server is now running on http://localhost:3000 if you are using the default settings. 

### Running Gulp Development Environment

Start the development environment with:

```bash
$ gulp dev
```

### Running in Production mode
To run Clusiana with *production* environment configuration, execute gulp as follows:

```bash
$ gulp prod
```

### Testing Clusiana with Gulp
Using the full test suite included with Clusiana with the test task:

### Run all tests
```bash
$ gulp test
```

### Run server tests
```bash
gulp test:server
```

### Run client tests
```bash
gulp test:client
```

### Run e2e tests
```bash
gulp test:e2e
```

## Development and deployment With Docker

* Install [Docker](https://docs.docker.com/installation/#installation)
* Install [Compose](https://docs.docker.com/compose/install/)

* Local development and testing with compose:
```bash
$ docker-compose up
```

* Local development and testing with just Docker:
```bash
$ docker build -t clusiana .
$ docker run -p 3000:3000 --link db:db_1 clusiana
$
```

* To enable live reload, forward port 35729 and mount /app and /public as volumes:
```bash
$ docker run -p 3000:3000 -p 35729:35729 -v /Users/mdl/workspace/clusiana-stack/clusiana/public:/home/clusiana/public -v /Users/mdl/workspace/clusiana-stack/clusiana/app:/home/clusiana/app --link db:db_1 clusiana
```