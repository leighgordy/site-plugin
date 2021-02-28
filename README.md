# site-plugin

This project allows you to build a React component isolation, export it as a JS module which can be consumed by a web framework. 
This project can serve the component as its own mini website via webpack for development. It is designed to be completely modular 
so styles will not bleed thanks to [styled-components](https://styled-components.com/).

This design allows you to break up a large web frontend application into several smaller projects. This will allow you to speed up development as well as reduce the risk of errors
of conflicts and errors. Its surprising how many organisations have a dozen backend teams and one large frontend team. You can have a dozen frontend teams too!

## Project Structure
* `lib` - Contains the module code. As it's an ES6 we just export the raw files
* `src` - Contains only the site assets to demo code in webpack. Imports the contents of lib directly. 
* `jest` - Contains jest tests

## Commands

* `npm run serve` - serves webpack in development mode 
* `npm run test` - runs the jest tests
* `npm run coverage` - runs the site coverage
* `npm run lint` - runs AirBnB linting rules against lib, src and test

## Issues
* I have no configuration to push this project to a npm repo. Its more designed for in house use. If you do that all you need to push is the lib folder, 
  src and test are redundant.
  
* I've not tested this within another project yet. Building a project from this just now. If I find any issues I'll be sure to update this one in the next couple of weeks.
