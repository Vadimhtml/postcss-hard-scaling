# postcss-hard-scaling

Hard scaling plugin for PostCSS…

So, we have CSS like this:
```css
.Block {
    width: 22ptr;
    height: 22ptc;
    line-height: 22ptf;
    border-radius: 10pt;
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
        .pipe(gulp.dest('./build'));
});
```

We get:
```css
.Block {
    width: 29px;
    height: 30px;
    line-height: 29px;
    border-radius: 13.3333px
}
```
Units:

`ptr` — Will be scaled and rounded to the nearest integer.   

`ptc` — Largest integer less than or equal to a scaled.

`ptf` — Smallest integer greater than or equal to a scaled. 

`pt` — Just multiplication. 

Arguments:

`layout` — Source size: integer 

`interface` — Destination size: integer

`log` — Console logging: boolean
