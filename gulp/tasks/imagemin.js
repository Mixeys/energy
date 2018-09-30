'use strict';

module.exports = function() {
    $.gulp.task('imagemin', () =>
    $.gulp.src('./source/images/**/*.*')
        .pipe($.gp.imagemin([
            $.gp.imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe($.gulp.dest($.config.root + '/assets/img'))
    );
};