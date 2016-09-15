module.exports = function(grunt) {
         grunt.initConfig({

            less: {
                production: {
                    options: {
                        paths: ["css"],
                        cleancss: true
                    },
                    files: {"example/css/style.css": "example/less/main.less"}
                }
            },

            watch: {
                files: ["example/less/**/*.less"],
                tasks: ["less"]
            }

         });

        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-less');

        grunt.registerTask('default', ['watch']);
     };
