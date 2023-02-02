# GraphicsApp

## GraphicsApp README

This app is an example about angular framework, Its functionality is to draw different graphics in angular like bars, double bars, donuts and drawing graphic from response http from a server (locally server created with [json-server](https://www.npmjs.com/package/json-server)), this app use [chartjs.org](https://www.chartjs.org/) to draw these graphics.

You can check final result [here](https://sparkly-toffee-ba0a69.netlify.app). This app use a server in glitch, this platform use a serverless server, it means that the first time you enter, it is very possible that the information takes time to arrive while the server turns on (if you have a problem with url please notice to emmanueltamburini@gmail.com)

### Getting started

Run `npm install` to install all dependencies of the app.

You must install json-server to run locally the server of this app with the following command `npm install -g json-server` (notice that this command will install json-sever globally in your environment)

Then you have to move the server folder `cd server` and finally start the server `json-server --watch db.json`

Follow angular step to serve the app.

## Angular README

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
