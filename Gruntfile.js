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
        runs: 5,
        timeout: 3600,
        key: process.env.WPT_API_KEY
      },
      target: {
        options: {
          url: [
            'http://sideroad.secret.jp/'
          ]
        },
        dest: 'pages'
      }
    },

    githubPages: {
      target: {
        // The folder where your gh-pages repo is
        src: 'pages'
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-wpt');
  grunt.loadNpmTasks('grunt-github-pages');


  // By default, lint and run all tests.
  grunt.registerTask('default', ['wpt', 'deploy']);
  grunt.registerTask('deploy', ['githubPages:target']);

};
