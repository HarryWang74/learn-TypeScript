module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
          default : {
            src: ["**/*.ts", "!node_modules/**"]
          }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['ts']
        }
    });

    grunt.registerTask('default', ['watch']);

}
