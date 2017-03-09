/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({

        clean: ["wwwroot/app/*", "wwwroot/main.js"],
        copy: {
            main: {
                files: [
                {
                    cwd: 'Script/app/',
                    expand: true,
                    src: ['**/*.js', '**/*.html', '**/*.css'],
                    dest: 'wwwroot/app/'
                    },
                    {
                    cwd: 'Script/environments/',
                    expand: true,
                    src: ['**/*.js', '**/*.html'],
                    dest: 'wwwroot/environments/'
                },
                    {
                        cwd: 'Script/',
                        expand: true,
                        src: ['**/*.js', '**/*.html'],
                        dest: 'wwwroot/'
                    }
                ]
            }
        },
        watch: {
            expand: true,
            files: ['Script/app/*.js', 'Script/app/*.html'],
            tasks: ['copy']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.registerTask('All', ['clean', 'copy', 'watch']);
    grunt.registerTask('Clean All', ['clean']);
};

