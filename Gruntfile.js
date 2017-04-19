module.exports = function (grunt) {

  grunt.initConfig({
    copy: {
        project: {
                expand: true,
                cwd: '.',
                src: ['**', '!Gruntfile.js', '!package.json','!public/bower.json'],
                dest: 'dist'
            },
        fontAwesome: {
                expand: true,
                cwd: 'public/vendor/font-awesome/fonts',
                src: '**/*',
                dest: 'dist/public/fonts'
            },
        fontOw: {
                expand: true,
                cwd: 'public/resources/fonts',
                src: '**/*',
                dest: 'dist/public/fonts'
        }
    },
    clean: {
        dist: {
            src: 'dist '
        },
        temp: {
            src: ['.tmp', 'dist/public/js', 'dist/public/resources/css', 'dist/public/resources/fonts', 'dist/public/vendor']
        }
    },
    usemin : {
        html: 'dist/app/views/**/*.ejs'
    },
    useminPrepare: {
        options: {
            root: 'dist/public',
            dest: 'dist/public'
        },
        html: 'dist/app/views/**/*.ejs'
    },
    concat: {
        scripts: {
            src: [
              'public/js/**/*.js'
            ],
            dest: 'dist/public/js/scripts.js'
        },
        libs: {
            src: [
              'public/vendor/jquery/dist/jquery.min.js',
              'public/vendor/bootstrap/dist/js/bootstrap.min.js',
              'public/vendor/angular/angular.min.js',
              'public/vendor/angular-ui-router/release/angular-ui-router.min.js',
              'public/vendor/angular-sanitize/angular-sanitize.min.js',
              'public/vendor/angular-translate/angular-translate.min.js',
              'public/vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
              'public/vendor/angular-bootstrap/ui-bootstrap.min.js',
              'public/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
              'public/vendor/ngmap/build/scripts/ng-map.min.js',
              'public/vendor/moment/min/moment.min.js',
              'public/vendor/moment/locale/pt-br.js',
              'public/vendor/moment/locale/es.js',
              'public/vendor/moment/locale/en-au.js',
              'public/vendor/angular-moment/angular-moment.min.js'
            ],
            dest: 'dist/public/js/libs.min.js'
        },
        all: {
            src: ['dist/public/js/libs.min.js', 'dist/public/js/scripts.min.js'],
            dest: 'dist/public/scripts/all.min.js'
        }
    },
    uglify: {
        scripts: {
            src: ['dist/public/js/scripts.js'],
            dest: 'dist/public/js/scripts.min.js'
        }
    },
    cssmin: {
        all: {
            src: [
              'public/vendor/bootstrap/dist/css/bootstrap.min.css',
              'public/vendor/bootstrap/dist/css/bootstrap-theme.min.css',
              'public/resources/css/style.css',
              'public/resources/css/owfont-regular.min.css',
              'public/vendor/font-awesome/css/font-awesome.min.css'
            ],
            dest: 'dist/public/css/styles.min.css'
        }
    },
    htmlmin: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        views: {
            expand: true,
            cwd: 'public/partials/',
            src: ['*.html'],
            dest: 'dist/public/partials'
        }
    },
    ngAnnotate: {
        scripts: {
            expand: true,
            src: ['dist/public/js/**/*.js']
        },
    },
    'json-minify': {
        build: {
            files: 'dist/public/translations/**/*.json'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-json-minify');

  grunt.registerTask('dist', ['clean:dist', 'copy']);
  grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate','concat', 'uglify', 'cssmin', 'htmlmin', 'usemin', 'json-minify', 'clean:temp']);
  grunt.registerTask('default', ['dist', 'minifica']);
}