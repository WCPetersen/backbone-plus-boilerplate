/*
 * Grunt Task File
 * ---------------
 *
 * Task: less
 * Description: Compile less files to css
 * Dependencies: less
 *
 */

task.registerBasicTask("less", "Compile less files to css", function(data, name) {

  var files = file.expand(data);

  files.forEach(function(filepath) {
      task.helper('less', filepath);
  });
});

task.registerHelper('less', function(filepath, callback) {

  var less = require('less');

  try {
    less.render(file.read(filepath), function(e, css){
      file.write(filepath.replace(/\.less$/, '.css'), css);
    });
  }
  catch (e) {
    log.error(e.message);
  }
});
