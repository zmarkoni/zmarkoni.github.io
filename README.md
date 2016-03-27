# zmarkoni.github.io

##Project name

Zoran Markovic -  Online Resume


## Install Packages

After cloning the project to your computer run the following command in your terminal to install all required node packages.

    sudo npm install
    gulp


## Features

- npm           -> managing packages
- Gulp          -> automation
- Browserify    -> load modules
- BrowserSync.  -> reload browser on HTML, CSS or JS change
- Bootstrap     -> Framework
- Sass          -> CSS preprocessors
- Google fonts  -> Roboto
- Html sections are in templates which content is injected via JS in index.html

# Page speed and optimization

- Check website ranking https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fzmarkoni.github.io&tab=desktop

I was unable to add cashing to this website, because Google Pages does not support it !


## How to use

Precompiled JS and SCSS files are in the src folder and compile to public.  All other files including HTML, image etc. are in public.  

BrowserSync runs from public and serves as the "Dist" folder for client-side apps.

