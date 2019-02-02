module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          './public/css/core.css': './client/scss/core.scss',
          './public/css/web.css': './client/scss/web.scss',
          './public/css/app.css': './client/scss/app.scss',
          './public/css/chat.css': './client/scss/chat.scss',
        }
      }
    },
    watch: {
      sass: {
        files: ['./client/scss/*.scss', './client/scss/**/*.scss', './client/scss/**/**/*.scss'],
        tasks: ['sass', 'notify'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch']);

}
