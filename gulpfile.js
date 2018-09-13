/* globals require */

(function () {
  'use strict';

  // General
  var gulp = require('gulp-help')(require('gulp'));
  var localConfig = {};

  try {
    localConfig = require('./local.gulp-config');
  }
  catch (e) {
    // Do nothing.
  }
  require('emulsify-gulp')(gulp, localConfig);



  // custom named tasks start here //

  //pl-deploy
  var ghpages = require('gh-pages');

  gulp.task('pl-deploy', function(){

    //create build directory
    gulp.src(['./dist/**/*', './pattern-lab/public/**/*'], { base: './'})
      .pipe(gulp.dest('build'));

    //Publish the build directory to github pages.
    ghpages.publish('./build', {remote: 'github', message: 'auto-generated commit via pl-deploy'}, function(err){
      if (err === undefined) {
        console.log('PL successfully deployed to github!');
      } else {
        console.log(err);
      }
    });
  });


})();
