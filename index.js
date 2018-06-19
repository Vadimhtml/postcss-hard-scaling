'use strict';

const postcss = require('postcss');

module.exports = postcss.plugin('postcss-hard-scaling', function (opts) {
    opts = (typeof opts === 'object') ? opts : {};
    opts.layout = opts.layout || 1;
    opts.interface = opts.interface || opts.layout;
    opts.log = opts.log || false;
    const multiplier = parseInt(opts.interface) / parseInt(opts.layout);

    return function (css) {
        function replacer(value, amount, direction) {
            let rounding;
            let result;

            switch (direction) {
                case 'r':
                    rounding = Math.round;
                    break;
                case 'c':
                    rounding = Math.ceil;
                    break;
                case 'f':
                    rounding = Math.floor;
                    break;
                default:
                    rounding = (e) => {
                        return e;
                    };
                    break;

            }

            result = `${rounding(parseInt(amount) * multiplier).toString()}px`;

            if (opts.log) {
                console.log(`${value} => ${result}`);
            }

            return result;
        }

        css.walkDecls(declaration => {
            declaration.value = declaration.value.replace(/\b(\d+|\d+\.\d+)pt(r|c|f|)\b/g, replacer);
        });
    };
});
