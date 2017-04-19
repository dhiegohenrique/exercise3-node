// Karma configuration
// Generated on Sun Apr 16 2017 18:07:14 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "public/vendor/jquery/dist/jquery.min.js",
      "public/vendor/bootstrap/dist/js/bootstrap.min.js",
      "public/vendor/angular/angular.min.js",
      "public/vendor/angular-ui-router/release/angular-ui-router.min.js",
      "public/vendor/angular-sanitize/angular-sanitize.min.js",
      "public/vendor/angular-translate/angular-translate.min.js",
      "public/vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
      "public/vendor/angular-bootstrap/ui-bootstrap.min.js",
      "public/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js",
      "public/js/main.js",
      "public/js/config/languageConfig.js",
      "public/js/controllers/*.js",
      "public/js/services/*.js",
      "public/js/directives/directives.js",
      "public/js/config/*.js",
      "public/js/interceptors/*.js",
      "public/js/state/*.js",
      "public/vendor/ngmap/build/scripts/ng-map.min.js",
      "public/vendor/moment/min/moment.min.js",
      "public/vendor/moment/locale/*.js",
      "public/vendor/angular-moment/angular-moment.min.js",
      "public/vendor/angular-mocks/angular-mocks.js",
      "test/spec/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
