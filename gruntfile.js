module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/js/join.min.js': ['src/js/join.js']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/404.html': 'src/404.html',
          'dist/doctrine.html': 'src/doctrine.html',
          'dist/index.html': 'src/index.html',
          'dist/join.html': 'src/join.html',
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['uglify', 'htmlmin'])
}

