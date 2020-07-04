module.exports = function (grunt) {
  grunt.initConfig({
    // clean
    clean: ['dist/'],
    // copy favicon
    copy: {
      dist: {
        files: [{
            src: 'src/favicon.png',
            dest: 'dist/favicon.png'
          },
          {
            expand: true,
            cwd: 'src/static/',
            src: "**",
            dest: "dist/static/"
          }
        ]
      }
    },
    // uglifyJS
    uglify: {
      dist: {
        files: {
          'dist/js/join.min.js': ['src/js/join.js'],
        }
      }
    },
    // minify HTML
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'copy', 'uglify', 'htmlmin'])
}