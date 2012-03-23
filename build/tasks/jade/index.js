/*
 * Grunt Task File
 * ---------------
 *
 * Task: jade
 * Description: Compile jade files to html
 * Dependencies: jade
 *
 */

task.registerBasicTask("jade", "Compile jade files to html", function(data, name) {

  var files = file.expand(data);

  files.forEach(function(filepath) {
      task.helper('jade', filepath);
  });
});

task.registerHelper('jade', function(filepath /* String */, callback /* [Function] */) {

  var jade = require('jade');

  try {
    var html = jade.compile(file.read(filepath), {filename: filepath});
    if (html) file.write(filepath.replace(/\.jade$/, '.html'), html());
  }
  catch (e) {
    log.error(e.message);
  }
});
