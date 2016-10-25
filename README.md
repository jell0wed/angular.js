# AngularJS Fork
 
Our master branch for angularjs is dmxfee-master
 
# Change-list
  * Aug 10, 2016 - Opt out digest loops for $http() when requestParams.skipApply is set to true (https://embed.plnkr.co/feOmt98Q6QnWjI1iQzD9/).
 
 
# Fork Details
 
```
(angular/angular.js) ---> 1.5.5 ---> 1.5.6 ---> 1.5.7 ---> 1.5.8 ---> master
        |
(dmxfee/angular.js)  ---> 1.5.5 ---> 1.5.6 ---> 1.5.7 ---> 1.5.8 ---> master
                            |
 
                            |
 
                            |---> dmxfee-master
                                    --> (custom updates)
```
 
dmxfee-master branch is originally forked off from Angular's v1.5.5(commit:25d4e5cca4fa615e49d65976223c6deb5b485b4c) to include custom optimizations made by our developers. **This will become our Angular master branch for now on and any new migrations to new angular versions needs to be merged into this branch**.
 
 
# Getting latest updates from Angular
 
Below instructions are best effort steps for future integrations, please update if there are any inconsistencies.
 
## Sync our forked branch (dmxfee/angular.js) with the upstream source (angular/angular.js)
 
Github UI makes it little tricky but this can be easily done with git command line. Here are good references:
  * https://2buntu.com/articles/1459/keeping-your-forked-repo-synced-with-the-upstream-source/
  * https://help.github.com/articles/syncing-a-fork/
 
These are the steps are to sync master branches. We may also want do similar steps for the branch we're interested in (e.g. v1.5.x) to get all changes that were never merged back into master.
 
```
  * git clone https://github.com/dmxfee/angular.js.git
  * cd angular.js
  * git remote add upstream https://github.com/angular/angular.js.git
     * check your remotes - 'git remote show origin', 'git remote show upstream'
     * git fetch upstream
   * git merge upstream/master
      * (resolve any conflicts here)
   * git push origin master
   * git push origin master --tags //pushes all tags too
 
```
## Merge in future angular version (e.g. v1.5.9) into dmxfee-master
Create a branch from dmxfee-master, merge the needed tag# and send a PR.
```
   * git checkout dmxfee-master
   * git checkout -b dmxfee-merge-v1.5.9
   * git merge 'tagname'
   * (resolve conflicts)
   * git push
   * create PR against dmxfee-master
```
 
## Push the build files to dmxfee/angular-bower
 
The new angular build files needs to be pushed to dmxfee/angular-bower branch. Our project fetches the angular code from this github branch.
 
Fork dmxfee/bower-angular:
```
   * git clone https://github.com/dmxfee/bower-angular.git
   * git checkout -b v1.5.9 (some meaningful branch name)
```
 
Generate angular's build files and copy them to bower-angular repository
```
   * Switch to repo: dmxfee/angular.js (branch: dmxfee-master)
   * npm install
   * if grunt, bower not installed globally run 'npm install grunt', 'npm install bower'
   * grunt package
      * If you run into an issue of missing npm package, open package.json and remove preinstall step
      * "preinstall": "node scripts/npm/check-node-modules.js --purge"
      * Also we may have to fix the automatically generated stamped versions in build files. I temporarily overwrote
      * "NG_VERSION" object with desired values (in gruntfile.json) before running 'grunt package'.
      * DONOT CHECK IN THESE TEMP CHANGES.
   * grunt test:unit
   * grunt test:e2e
   * If all good, copy these files from "build" folder into the bower-angular repo folder.
      * angular.js, angular.min.js, angular.min.js.map, angular-csp.css
      * update the version into bower.json and package.json
 
   * send the PR to bower-angular branch.
   * once it goes in, open our project's bower.json and update the commit hash for angular and also in resolutions.
```
 
# Making Custom Changes to our master branch
```
* Fork dmxfee/angular.js into your github account (dev/angular.js)
* create a new branch off dmxfee-master
* Make your changes.
* Make sure unit tests and scenario tests are still passing
    * npm install
    * grunt package
    * grunt test:unit
    * grunt test:e2e
* Push your changes.
* Create PR against dmxfee/angular.js





AngularJS [![Build Status](https://travis-ci.org/angular/angular.js.svg?branch=master)](https://travis-ci.org/angular/angular.js)
=========

AngularJS lets you write client-side web applications as if you had a smarter browser.  It lets you
use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s
syntax to express your application’s components clearly and succinctly.  It automatically
synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data
binding. To help you structure your application better and make it easy to test, AngularJS teaches
the browser how to do dependency injection and inversion of control.

It also helps with server-side communication, taming async callbacks with promises and deferreds,
and it makes client-side navigation and deeplinking with hashbang urls or HTML5 pushState a
piece of cake. Best of all? It makes development fun!

* Web site: https://angularjs.org
* Tutorial: https://docs.angularjs.org/tutorial
* API Docs: https://docs.angularjs.org/api
* Developer Guide: https://docs.angularjs.org/guide
* Contribution guidelines: [CONTRIBUTING.md](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md)
* Dashboard: https://dashboard.angularjs.org


Building AngularJS
---------
[Once you have set up your environment](https://docs.angularjs.org/misc/contribute), just run:

    grunt package


Running tests
-------------
To execute all unit tests, use:

    grunt test:unit

To execute end-to-end (e2e) tests, use:

    grunt package
    grunt test:e2e

To learn more about the grunt tasks, run `grunt --help`

Contribute & Develop
--------------------

We've set up a separate document for our [contribution guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).


[![Analytics](https://ga-beacon.appspot.com/UA-8594346-11/angular.js/README.md?pixel)](https://github.com/igrigorik/ga-beacon)

What to use AngularJS for and when to use it
---------
AngularJS is the next generation framework where each component is designed to work with every other component in an interconnected way like a well-oiled machine. AngularJS is JavaScript MVC made easy and done right. (Well it is not really MVC, read on, to understand what this means.)

#### MVC, no, MV* done the right way!
MVC, short for Model-View-Controller, is a design pattern, i.e. how the code should be organized and how the different parts of an application separated for proper readability and debugging. Model is the data and the database. View is the user interface and what the user sees. Controller is the main link between Model and View. These are the three pillars of major programming frameworks present on the market today. On the other hand AngularJS works on MV*, short for Model-View-_Whatever_. The _Whatever_ is AngularJS's way of telling that you may create any kind of linking between the Model and the View here.

Unlike other frameworks in any programming language, where MVC, the three separate components, each one has to be written and then connected by the programmer, AngularJS helps the programmer by asking him/her to just create these and everything else will be taken care of by AngularJS.

#### Interconnection with HTML at the root level
AngularJS uses HTML to define the user's interface. AngularJS also enables the programmer to write new HTML tags (AngularJS Directives) and increase the readability and understandability of the HTML code. Directives are AngularJS’s way of bringing additional functionality to HTML. Directives achieve this by enabling us to invent our own HTML elements. This also helps in making the code DRY (Don't Repeat Yourself), which means once created, a new directive can be used anywhere within the application.

#### Data Handling made simple
Data and Data Models in AngularJS are plain JavaScript objects and one can add and change properties directly on it and loop over objects and arrays at will.

#### Two-way Data Binding
One of AngularJS's strongest features. Two-way Data Binding means that if something changes in the Model, the change gets reflected in the View instantaneously, and the same happens the other way around. This is also referred to as Reactive Programming, i.e. suppose `a = b + c` is being programmed and after this, if the value of `b` and/or `c` is changed then the value of `a` will be automatically updated to reflect the change. AngularJS uses its "scopes" as a glue between the Model and View and makes these updates in one available for the other.

#### Less Written Code and Easily Maintainable Code
Everything in AngularJS is created to enable the programmer to end up writing less code that is easily maintainable and readable by any other new person on the team. Believe it or not, one can write a complete working two-way data binded application in less than 10 lines of code. Try and see for yourself!

#### Testing Ready
AngularJS has Dependency Injection, i.e. it takes care of providing all the necessary dependencies to its controllers whenever required. This helps in making the AngularJS code ready for unit testing by making use of mock dependencies created and injected. This makes AngularJS more modular and easily testable thus in turn helping a team create more robust applications.
