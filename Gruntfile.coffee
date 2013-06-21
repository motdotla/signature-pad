module.exports = (grunt) ->
  i8nSetValues = (original_src, language_code) ->
    en_i8n  = grunt.file.readJSON("locales/en.json")
    i8n     = grunt.file.readJSON("locales/#{language_code}.json")
    i8n     = grunt.util._.extend(en_i8n, i8n)
    
    src = original_src
    src = src.replace "i8n.clear", i8n.clear
    src = src.replace "i8n.done", i8n.done
    src = src.replace "i8n.rotate_90", i8n.rotate_90
    src = src.replace "i8n.click_to_sign", i8n.click_to_sign
    src


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
      en:
        src: ["build/signature-pad.js"]
        dest: "build/signature-pad.min.js"
      fr:
        src: ["build/signature-pad.fr.js"]
        dest: "build/signature-pad.fr.min.js"
    concat:
      options:
        banner: "<%= banner %>"
        separator: '\n\n'
        stripBanners : true
      en:
        options:
          process: (src, filepath) ->
            i8nSetValues(src, "en")

        src: "<%= files %>"
        dest: "build/signature-pad.js"
      fr:
        options:
          process: (src, filepath) ->
            i8nSetValues(src, "fr")

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
  grunt.registerTask "default", ["jshint", "concat", "uglify", "connect"]

  # Some available commands
  # grunt
  # grunt test
  # grunt connect
