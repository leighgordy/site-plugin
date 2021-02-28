# site-plugin

This is a webpack project that has been designed to be imported as an ES6 module by other projects. 
This pattern allows you to break up a large web application into several projects. 
This is useful when you are reusing components in different projects or if you want several teams 
of developers to work on a very large project. 

This is exported as an ES6 module to allow tree shaking. It also uses [styled components](https://styled-components.com/) project to bundle the CSS into the JS module.

## Project Structure
* `lib` - Contains the module code. As it's an ES6 we just export the raw files
* `src` - Contains only the site assets to demo code in webpack. Imports the contents of lib directly. 
* `jest` - Contains jest tests

## Commands

* `npm run serve` - serves webpack in development mode 
* `npm run test` - runs the jest tests
* `npm run coverage` - runs the site coverage
