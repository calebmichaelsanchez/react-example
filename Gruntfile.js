/*
 * Generated on 2014-03-14
 * generator-assemble v0.4.10
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },
    compass: {
      dist: {
        options: {
          config: 'compass.rb',
          force: true
        }
      }
    },
    autoprefixer: {
        single_file: {
            src: '<%= config.dist %>/assets/css/styles.css',
            dest: '<%= config.dist %>/assets/css/styles.css'
        }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        app: "Chrome Canary"
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    copy: {
      javascript: {
        files: [
          {
            expand: true,
            flatten: false,
            cwd: '<%= config.src %>/assets/js/',
            src: ['**/*.js'],
            dest: '<%= config.dist %>/assets/js/'
          }
        ]
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs',
          ext: '.php'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs'],
          '<%= config.dist %>/making-it-awesome-with/': ['<%= config.src %>/templates/pages/casestudies/*.hbs']
        }
      },
      contact: {
        options: {
          layout: '<%= config.src %>/templates/layouts/contact.hbs',
          assets: '<%= config.dist %>/assets',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/contact/partials/*.hbs',
          ext: '.php'
        },

        src: '<%= config.src %>/templates/contact/*.hbs',
        dest: '<%= config.dist %>/contact'
      },
      questionnaire: {
        options: {
          layout: '<%= config.src %>/templates/layouts/questionnaire.hbs',
          assets: '<%= config.dist %>/assets',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/questionnaire/partials/*.hbs',
          ext: '.php'
        },

        src: '<%= config.src %>/templates/questionnaire/identity-questionnaire.hbs',
        dest: '<%= config.dist %>/getting-to-know-you'
      },
      sadtoseeyougo: {
        options: {
          layout: '<%= config.src %>/templates/layouts/questionnaire.hbs',
          assets: '<%= config.dist %>/assets',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/questionnaire/partials/*.hbs',
          ext: '.php'
        },

        src: '<%= config.src %>/templates/questionnaire/sad-to-see-you-go.hbs',
        dest: '<%= config.dist %>/sad-to-see-you-go'
      },
      honoredtoworkwithyou: {
        options: {
          layout: '<%= config.src %>/templates/layouts/questionnaire.hbs',
          assets: '<%= config.dist %>/assets',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/questionnaire/partials/*.hbs',
          ext: '.php'
        },

        src: '<%= config.src %>/templates/questionnaire/honored-to-work-with-you.hbs',
        dest: '<%= config.dist %>/honored-to-work-with-you'
      }
    },
    uglify: {
      js_target: {
        files: {
          '<%= config.dist %>/assets/js/global.min.js': ['<%= config.src %>/assets/js/global.js'],
          '<%= config.dist %>/assets/js/plugins.min.js': ['<%= config.src %>/assets/js/plugins/plugins.js'],
          '<%= config.dist %>/assets/js/homepage.min.js': ['<%= config.src %>/assets/js/homepage.js'],
          '<%= config.dist %>/assets/js/work.min.js': ['<%= config.src %>/assets/js/work.js'],
          '<%= config.dist %>/assets/js/store.min.js': ['<%= config.src %>/assets/js/store.js'],
          '<%= config.dist %>/assets/js/pace.min.js': ['<%= config.src %>/assets/js/pace.js'],
          '<%= config.dist %>/assets/js/foundation.min.js': ['<%= config.src %>/assets/js/foundation.js']
        }
      }
    },
    watch: {
      assemble: {
        files: [
          '<%= config.src %>/{content,data,templates}/**/{,*/}*.{md,hbs,yml}'
          ],
        tasks: ['assemble']
      },
      copy: {
        files: ['<%= config.src %>/assets/js/**/{,*/}*.js'],
        tasks: ['copy']
      },
      uglify: {
        files: ['<%= config.src %>/assets/js/**/{,*/}*.js'],
        tasks: ['uglify']
      },
      autoprefixer: {
        files: ['<%= config.src %>/assets/scss/**/{,*/}*.scss'],
        tasks: ['autoprefixer']
      },
      compass: {
         files: ['<%= config.src %>/assets/scss/**/{,*/}*.scss'],
         tasks: ['compass', 'autoprefixer'],
         options: { livereload: true }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    rsync: {
        options: {
            src: '<%= config.dist %>/',
            args: ["--verbose"],
            exclude: ['.git*', 'node_modules', '.sass-cache', 'Gruntfile.js', 'package.json', '.DS_Store', 'README.md', 'config.rb', '.jshintrc', 'rambling', 'peddling', '.htaccess', 'dev'],
            recursive: true,
            syncDestIgnoreExcl: true
        },
        staging: {
          options: {
                exclude: ['rambling', 'peddling', 'assets/js/vendor', 'assets/js/plugins', 'assets/js/foundation', 'dev'],
                src: "<%= config.dist %>/",
                dest: "domains/dev.underbelly.is/html/",
                host: "underbelly.co@s47302.gridserver.com"
          }
        },
        production: {
            options: {
                exclude: ['rambling', 'peddling', 'assets/js/vendor', 'assets/js/plugins', 'assets/js/foundation', 'dev'],
                src: "<%= config.dist %>/",
                dest: "domains/underbelly.is/html/",
                host: "underbelly.co@s47302.gridserver.com"
            }
        }
    },


    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks( 'grunt-contrib-compass' );
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('server', [
    'clean',
    'assemble',
    'connect:livereload',
    'watch',
    'copy',
    'uglify'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'autoprefixer',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('deploy:staging', [
    'build',
    'autoprefixer',
    'rsync:staging'
  ]);

  grunt.registerTask('deploy:production', [
    'build',
    'autoprefixer',
    'rsync:production'
  ]);

};
