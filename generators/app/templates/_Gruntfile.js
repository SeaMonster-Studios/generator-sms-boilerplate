module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowerPath : "bower_components",

        //------------------------------------------------
        // Bower Concatination Tasks
        //------------------------------------------------

        bower_concat: {
            all: {
                options: {
                    separator : ';\n',
                },
                dest: {
                    js: 'js/bower.js',
                    css: 'css/bower.css'
                },
                dependencies: {
                    'owl.carousel' : 'jquery',
                    'Slidebars'  : 'jquery',
                },
                mainFiles: {
                    'Slidebars' : ['dist/slidebars.js', 'dist/slidebars.css'],
                },
                exclude: [ 'bitters', 'bourbon', 'neat' ],
            },
        },

        //------------------------------------------------
        // Copy Bower files Tasks
        //------------------------------------------------

        bowercopy: {
            options: {

            },
            libs: {
                options: {
                    destPrefix: 'js/libs'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.js',
                }
            },
            sass: {
                options: {
                    destPrefix: 'scss'
                },
                files: {
                    'bourbon': 'bourbon/app/assets/stylesheets',
                    'bitters': 'bitters/core',
                    'neat': 'neat/app/assets/stylesheets',
                }
            }
        },

        //------------------------------------------------
        // Watch Tasks
        //------------------------------------------------

        watch: {
            scripts: {
                files : ["public/js/script.js"],
                tasks : ["serve"],
                options : {
                    spawn : false,
                    reload : true,
                },
            },
            php: {
                files : ["**/*.php"],
                tasks : ["serve"],
                options : {
                    spawn : false,
                    reload : true,
                },
            },
            sass: {
                files: ["scss/**/*.scss"],
                tasks: ["sass"],
            },
            livereload: {
                options: {
                    livereload : true
                },
                files: [ "css/style.css", "**/*.php", "public/js/script.js" ],
            },
        },

        //------------------------------------------------
        // Sass Processing Tasks
        //------------------------------------------------

        sass: {
            dist: {
                files: {
                    "public/css/style.css" : "scss/style.scss",
                    "css/style.css" : "scss/style.scss"
                },
                options: {
                    includePaths: require('node-bourbon').includePaths,
                    includePaths: require('node-neat').includePaths
                }
            }
        },
    });// end grunt.initConfig


    // Default task(s).
    grunt.registerTask('default',[ 'build', 'watch']);
    grunt.registerTask('build',[ 'sass' ]);
    grunt.registerTask('bowerBuild',[ 'bower_concat', 'bowercopy', 'build' ]);

};