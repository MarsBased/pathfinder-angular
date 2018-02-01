# Pathfinder - Angular

![Pathfinder](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mars_pathfinder_panorama_large.jpg/1200px-Mars_pathfinder_panorama_large.jpg)

Angular Template for MarsBased projects.

## Start, run and build the project

The recommended way to use it is cloning it from the Github repository and start your project from there.

```shell
git clone https://github.com/MarsBased/pathfinder-angular
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

### Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `yarn start`.


### Running typescript linter
Run `yarn lint` to execute linter.

## Development
pathfinder-angular is shipped with some sample pages to help you build a full project. Use them as a guide, you can consider a different structure.

We strongly recommend to follow the official [Angular Style Guide] (https://angular.io/guide/styleguide) published.

### Structure
Following the *Folders-by-feature structure* principle we placed pages under src/pages folder. Each component has its own html, ts, spec and scss (when needed)

### Environments
Environment configuration is located in `src/environments` folder. You can create as many as you need. Remember to add the new environment to `.angular-cli.json` file.

The file contents for the current environment will overwrite `environment.ts` content during the build.
The build system defaults to the dev environment which uses `environment.ts`,
But if you do `ng build --env=prod` then `environment.prod.ts` will be used instead.
The list of which env maps to which file can be found in `.angular-cli.json`.

There are some existing tasks like `yarn build` or `yarn build:prod` with predefined targets and environments.

### I18n

Language assets are under `assets/i18n` folder. If you need to support more languages you will need to place here a new language file and edit the list of supported languages in the `app.config.ts` file. 

The `app.config.ts` file is the application configuration file that you can access during runtime, here you can define default and supported languages.