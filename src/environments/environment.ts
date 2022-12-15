// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'erlfrontend',
    appId: '1:533560034018:web:32c0d33084f05f66f514bb',
    storageBucket: 'erlfrontend.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyCu8c-WUefAmvGXSPTIy6rNLXQJgRwc9BQ',
    authDomain: 'erlfrontend.firebaseapp.com',
    messagingSenderId: '533560034018',
    measurementId: 'G-KGBPWYG6YV',
  },
  production: false,

  URL:'http://localhost:8080/'
  //URL:'https://heroku-backendERL.herokuapp.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
