const minify = require('html-minifier').minify;
const ejs = require('ejs');
module.exports =  (viewfile, option, callback) => {
    if(typeof viewfile === "object"){
        if(typeof callback === "undefined"){callback={};}
        ejs.renderFile("views/" + option + ".ejs", callback, {}, (e, o) => {
            viewfile.send(minify(o, {
                removeTagWhitespace: true,
                removeComments: true,
                collapseInlineTagWhitespace: true,
                removeOptionalTags: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            }));
        });
    }else {
        ejs.renderFile(viewfile, option, {}, (e, o) => {
            callback(minify(o, {
                removeTagWhitespace: true,
                removeComments: true,
                collapseInlineTagWhitespace: true,
                removeOptionalTags: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            }));
        });
    }
};
