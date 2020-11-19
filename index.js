const minify = require('html-minifier').minify;
const ejs = require('ejs');
module.exports =  (viewfile, option, callback) => {
    ejs.renderFile(viewfile, option, {}, (e, o) => {
        callback(minify(o, {
            removeTagWhitespace: true,
            removeComments: true,
            collapseInlineTagWhitespace: true,
            removeOptionalTags: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            collapseWhitespace: true,
            minifyCSS:true,
            minifyJS:true
        }));
    });
};
