# zm-superCell
GULP automated workflow based on Joel Longie supperCell

# SuperCell 0.0.2

<a href="https://david-dm.org/joellongie/superCell">
  <img src="https://david-dm.org/joellongie/superCell/status.svg" alt="deps status"/>
</a>&nbsp;
<a href="https://david-dm.org/joellongie/superCell#info=devDependencies">
  <img src="https://david-dm.org/joellongie/superCell/dev-status.svg" alt="dev deps status"/>
</a>

SuperCell is my current build system for Node, Moble and ES6+ React apps.  This build system replaces jlGulp and renames the build to reflect that it is no longer tied to any particular technology but will adapt over time as new and better technologies emerge.

Since this is used for my own projects I am currently not accepting public pull requests on this repo.  Other then that please feel free to use it however you like.

## Install Packages

After cloning the project to your computer run the following command in your terminal to install all required node packages.

    sudo npm install
    gulp

The first time you run gulp the build may take a little longer as it compiles and builds out the "public/css" and "public/js" folders and files.

## Features

- ES6+ with Babel.  Use all the new niffty ES6+ features and transpile down to ES5.
- Browserify: JSX transforms, ES6 modules.
- React Ready!
- Uglify: minification.
- BrowserSync.
- Sass / flexbox ready (IE10+), layout for everygreen browsers.

## How to use

Precompiled JS and SCSS files are in the src folder and compile to public.  All other files including HTML, image etc. are in public.  BrowserSync runs from public and serves as the "Dist" folder for client-side apps.

## Other

- **src/.eslintrc:**  This file is a eslint config file for proper ES6+ sublimeText linting.  This file is not required and in the future will be removed.


## To Do
- Express, browser-sync integration.
- Research webpack as alternative for Gulp to improve build speed and optimization.
- add NODE_ENV environment variable to production for [better React performance](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#installation).
- Additional testing.

## How to remove React
If you would like to remove React from the build just follow the steps below.

1. In terminal remove react packages.

        sudo npm uninstall react react-dom --save-dev

2. In gulpfile.js

    Remove lines:

        var react         = require('react');
        var reactDOM      = require('react-dom');

3. In file src/index.js:

    Remove all React code.

        import React from 'react';
        import ReactDOM from 'react-dom';
        import HelloWorld from './demoReact.jsx';

        ReactDOM.render(
            <HelloWorld phrase="ES6"/>,
            document.querySelector('#reactApp')
        );

6. In folder: src/ remove any react components.
