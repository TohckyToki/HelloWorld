module.exports = function(grunt) {
    // Load plugin
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach(function(task) {
        grunt.loadNpmTasks(task);
    });

    // Configure plugin
    grunt.initConfig({
        cafemocha: {
            all: { src: 'qa/tests-*.js', options: { ui: 'tdd' }, }
        },
        jshint: {
            app: ['main.js', 'public/js/**/*.js',
                'lib/**/*.js'
            ],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
        },
        exec: {
            linkchecker: { cmd: 'linkchecker http://localhost:3000' }
        },
    });
    // Register task
    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};