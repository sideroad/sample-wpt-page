/*
 * sample-wpt-page
 * https://github.com/sideroad/sample-wpt-page
 *
 * Copyright (c) 2014 sideroad
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    clean: ['pages'],

    // Configuration to be run (and then tested).
    wpt: {
      options: {
        locations: ['Tokyo'],
        runs: 4,
        key: process.env.WPT_API_KEY
      },
      target: {
        options: {
          url: [
            'http://sideroad.secret.jp/',
            'http://travel.rakuten.co.jp/'
          ]
        },
        dest: 'pages'
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-wpt');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['wpt']);

};
