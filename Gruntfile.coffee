module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    banner: "/*! <%= pkg.name %>.js - <%= pkg.version %> - <%= grunt.template.today(\"yyyy-mm-dd\") %> - <%= pkg.author %> */\n"
    files: [
      "src/signature-mark.js",
      "src/signature-pad.js",
      "src/signature-pad/*.js"
    ]
    uglify:
      options:
        banner: "<%= banner %>"
      build:
        src: "<%= files %>"
        dest: "build/signature-pad.min.js"
    concat:
      options:
        banner: "<%= banner %>"
        separator: '\n\n'
        stripBanners : true
      en:
        options:
          process: (src, filepath) ->
            new_src = src
            i8n = grunt.file.readJSON("locales/en.json")
            console.log i8n
            for key, value in i8n
              do (key, value) ->
                console.log key
                console.log value
                new_src = new_src.replace("i8n.#{key}", value)
            
            new_src
        src: "<%= files %>"
        dest: "build/signature-pad.js"
      fr:
        options:
          process: (src, filepath) ->
            new_src = src
            i8n = grunt.file.readJSON("locales/fr.json")
            for key, value in i8n
              new_src = new_src.replace("i8n.#{key}", value)
            new_src

        src: "<%= files %>"
        dest: "build/signature-pad.fr.js"
    jshint:
      all: ['src/signature-pad.js', 'src/signature-pad/*.js', 'src/signature-mark.js']
    connect:
      server:
        options:
          hostname: "*"
          port: 3000,
          base: './public'
          keepalive: true
    simplemocha:
      all:
        src: 'test/*.js'

  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-simple-mocha"
  grunt.loadNpmTasks "grunt-contrib-jshint"

  grunt.registerTask "test", ["simplemocha", "jshint"]
  grunt.registerTask "default", ["jshint", "uglify", "concat", "connect"]

  # Some available commands
  # grunt
  # grunt test
  # grunt connect
