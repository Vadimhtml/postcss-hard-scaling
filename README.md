# postcss-hard-scaling
Hard scaling plugin for PostCSS

```js
var postcss = require('gulp-postcss');
var scaling = require('postcss-hard-scaling');

gulp.task('scale', function () {
    return gulp.src('./src/index.css')
        .pipe(postcss([
            scaling({
                layout: 960,
                interface: 1280,
                log: true
            })
        ]))
});
```
