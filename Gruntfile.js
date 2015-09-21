module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
          compile: {
              files: {
                  './app/assets/css/app.css': ['./app/**/*.styl'] // compile and concat into single file
              }
          }
        },
        watch: {
            files: ['./app/**/*.styl'],
            tasks: ['stylus']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['watch']);

};