# postcss-hard-scaling

Hard scaling plugin for PostCSS…

So, we have CSS like this:
```css
.Block {
    width: 22ptr;
    height: 22ptc;
    line-height: 22ptf;
}
```

After plugin *postcss-hard-scaling* applying:
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

We get:
```css
.Block {
    width: 29px;
    height: 30px;
    line-height: 29px;
}
```
