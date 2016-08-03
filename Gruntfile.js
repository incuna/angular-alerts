module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        // Configurable paths
        config: {
            files: {
                lint: [
                    'alerts.js',
                    'Gruntfile.js'
                ]
            }
        },
        eslint: {
            all: {
                options: {
                    config: '.eslintrc'
                },
                src: '<%= config.files.lint %>'
            }
        },
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: '<%= config.files.lint %>'
        }
    });

    grunt.registerTask('lint', [
        'eslint',
        'jscs'
    ]);

    grunt.registerTask('test', [
        'lint'
    ]);

};
